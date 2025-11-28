import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, messenger, experience } = await req.json();
    
    const webhookUrl = Deno.env.get('GOOGLE_SHEETS_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL is not configured');
      return new Response(
        JSON.stringify({ error: 'Webhook URL not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Log masked URL for debugging
    const maskedUrl = webhookUrl.substring(0, 50) + '...' + webhookUrl.substring(webhookUrl.length - 10);
    console.log('Using webhook URL:', maskedUrl);
    console.log('Sending data to Google Sheets:', { name, phone, messenger, experience });

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        messenger,
        experience,
        timestamp: new Date().toISOString(),
      }),
      redirect: 'follow', // Follow redirects
    });

    console.log('Response status:', response.status);
    console.log('Response URL:', response.url);

    // Google Apps Script returns 302 redirect, then 200
    // Even non-200 responses might be OK for Apps Script
    const responseText = await response.text();
    console.log('Response body:', responseText.substring(0, 200));

    // Check if response contains HTML error page
    if (responseText.includes('Seite nicht gefunden') || responseText.includes('Page not found')) {
      console.error('Google returned page not found error');
      return new Response(
        JSON.stringify({ error: 'Google Apps Script URL is invalid or not deployed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Try to parse as JSON, if it fails it might still be successful
    try {
      const jsonResponse = JSON.parse(responseText);
      console.log('Successfully sent to Google Sheets:', jsonResponse);
    } catch {
      console.log('Response is not JSON, but request might still be successful');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in send-to-sheets function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
