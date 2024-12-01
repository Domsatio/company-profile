import { Metadata } from "next";
import { SectionWrapper } from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: 'Hubungi Kami | Domsat - Crafted with Passion and Precision',
  description: 'Hubungi Kami | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

const About = () => {
  return (
    <SectionWrapper className="flex flex-col px-4 md:gap-4 md:px-0 py-5 md:py-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">Hubungi Kami</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-2 accent">Hubungi Kami</h1>
          <p>
            Jika Anda tertarik dengan layanan kami, memiliki pertanyaan, atau hanya ingin menyapa, jangan ragu untuk menghubungi kami. Kami akan segera merespons Anda secepat mungkin.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex flex-row gap-4 items-center">
              <div className='p-2 size-fit rounded-full bg-[#ff842c] text-white'>
                <MapPin size={18} />
              </div>
              <Link href="https://maps.app.goo.gl/Cx5XTNzqEz2KKPji8" target="_blank">
                <p className="text-sm md:text-base">
                  Jalan Puspowarno No. 94, RT 3, RW 1, Mangkujayan, Ponorogo, Ponorogo, Jawa Timur, 63413
                </p>
              </Link>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className='p-2 size-fit rounded-full bg-[#ff842c] text-white'>
                <Mail size={18} />
              </div>
              <p className="text-sm md:text-base">domsattech@gmail.com</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className='p-2 size-fit rounded-full bg-[#ff842c] text-white'>
                <Phone size={18} />
              </div>
              <Link href='https://wa.me/628140261540' target="_blank">
                <p className="text-sm md:text-base">08140261540</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Tertarik Untuk Bekerja Sama?</h1>
          <ContactForm />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Lokasi Kami</h1>
          <div className="relative w-full rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.2990660184773!2d111.45539799999999!3d-7.863738999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTEnNDkuNSJTIDExMcKwMjcnMTkuNCJF!5e0!3m2!1sen!2sid!4v1731772446480!5m2!1sen!2sid"
              className="w-full h-[450px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute w-80 top-2 left-2 bg-white rounded-3xl p-6 shadow-md space-y-2">
              <h4 className="text-base font-semibold text-black">Kantor Domsat</h4>
              <p className="text-xs font-medium text-gray-600 leading-5">
                Jalan Puspowarno No. 94, RT 3, RW 1, Mangkujayan, Ponorogo, Ponorogo, Jawa Timur, 63413
              </p>
              <Link
                href="https://maps.app.goo.gl/Cx5XTNzqEz2KKPji8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007DFE] hover:underline underline-offset-4 text-sm font-medium inline-block"
              >
                Lihat peta lebih besar →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;