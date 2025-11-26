import { Hero } from "@/components/Hero";
import { Responsibilities } from "@/components/Responsibilities";
import { Requirements } from "@/components/Requirements";
import { Benefits } from "@/components/Benefits";
import { WorkProcess } from "@/components/WorkProcess";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ApplicationForm } from "@/components/ApplicationForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Responsibilities />
      <Requirements />
      <Benefits />
      <WorkProcess />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ApplicationForm />
    </main>
  );
};

export default Index;
