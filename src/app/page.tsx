import type { Metadata } from 'next'
import Service from "@/components/section/services.section";
import WhyUs from "@/components/section/whyus.section";
import Hero from "@/components/section/hero.section";
import FAQ from "@/components/section/faq.section";
import CTA from "@/components/section/cta.section";
import Testimonial from "@/components/section/testimonial.section";

export const metadata: Metadata = {
  title: 'Domsat - Crafted with Passion and Precision',
  description: 'Homepage | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
}
