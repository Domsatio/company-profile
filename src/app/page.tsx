import type { Metadata } from 'next'
import Service from "@/components/section/services.section";
import WhyUs from "@/components/section/whyus.section";
import Hero from "@/components/section/hero.section";
import FAQ from "@/components/section/faq.section";
import CTA from "@/components/section/cta.section";
import Testimonial from "@/components/section/testimonial.section";
import RecentBlog from '@/components/section/blog.section';
import { getLatest } from '@/lib/mdx.server';

export const metadata: Metadata = {
  title: 'Domsat - Crafted with Passion and Precision',
  description: 'Homepage | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

export default async function Home() {
  const data = await getLatest('blog')
  return (
    <>
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <RecentBlog data={data} />
      <FAQ />
      <CTA />
    </>
  );
}
