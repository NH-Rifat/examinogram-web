import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { MentorFeatures } from "@/components/landing/MentorFeatures";
import { LearnerFeatures } from "@/components/landing/LearnerFeatures";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { QuestionBank } from "@/components/landing/QuestionBank";
import { Library } from "@/components/landing/Library";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <MentorFeatures />
        <LearnerFeatures />
        <HowItWorks />
        <QuestionBank />
        <Library />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
