import Image from "next/image";
import NotFoundImage from "../../public/assets/images/404.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Halaman Tidak Ada | Domsat - Crafted with Passion and Precision',
  description: 'Halaman Tidak Ada | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={NotFoundImage} alt="404" />
      <p className="text-2xl font-bold">
        OOPS! Halaman yang Anda cari tidak ditemukan.
      </p>
    </div>
  );
};

export default NotFound