import Service from "@/components/section/services.section";
import WhyUs from "@/components/section/whyus.section";
import Hero from "@/components/section/hero.section";
import FAQ from "@/components/section/faq.section";
import CTA from "@/components/section/cta.section";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyUs />
      <FAQ />
      <CTA />
    </>
  );
}
