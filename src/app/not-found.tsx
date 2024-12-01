import Image from "next/image";
import NotFoundImage from "../../public/assets/images/404.svg";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/Layout";

export const metadata: Metadata = {
  title: 'Halaman Tidak Ada | Domsat - Crafted with Passion and Precision',
  description: 'Halaman Tidak Ada | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

const NotFound = () => {
  return (
    <SectionWrapper className="min-h-[90dvh] flex items-center justify-center">
      <div className="md:text-center flex flex-col space-y-8 items-start md:items-center">
        <Image src={NotFoundImage} alt="404" className="h-96" />
        <p className="text-2xl font-bold mt-5">
          Halaman yang Anda Cari Tidak Ditemukan.
        </p>
        <p className="text-center mt-2">
          Halaman yang Anda cari mungkin telah dipindah, dihapus, atau tidak ada.
        </p>
        <Link href='/' className="mt-10">
          <Button className="h-12 sm:h-14 px-6 rounded-full font-semibold text-base sm:text-lg">
            <ArrowLeft className="size-4 sm:size-5" /> Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default NotFound