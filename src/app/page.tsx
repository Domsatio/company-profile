import Service from "@/components/section/services.section";
import WhyUs from "@/components/section/whyus.section";
import Hero from "@/components/section/hero.section";
import FAQ from "@/components/section/faq.section";
import CTA from "@/components/section/cta.section";
import Testimonial from "@/components/section/testimonial.section";

export const metadata = {
  title: 'Home',
  description: 'Home page',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <WhyUs />
      <FAQ />
      <CTA />
      <Testimonial />
    </div>
  );
}
