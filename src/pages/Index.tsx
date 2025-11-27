import { Header } from "@/components/Header";
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
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
        <div id="responsibilities">
          <Responsibilities />
        </div>
        <div id="requirements">
          <Requirements />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="work-process">
          <WorkProcess />
        </div>
        <WhyUs />
        <Testimonials />
        <div id="faq">
          <FAQ />
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default Index;
