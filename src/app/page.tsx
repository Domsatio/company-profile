import Service from "@/components/section/services.section";
import Testimonials from "@/components/section/testimonials.section";
import Hero from "@/components/section/hero.section";
import FAQ from "@/components/section/faq.section";
import CTA from "@/components/section/cta.section";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
