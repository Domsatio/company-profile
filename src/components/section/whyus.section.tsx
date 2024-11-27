import Image from "next/image";
import { SectionWrapper } from "@/components/Layout";
import Thunder from "../../../public/assets/icons/Thunder.svg";
import Smile from "../../../public/assets/icons/Smile.svg";
import { WhyUs } from "@/constants/WhyUs";

const Testimonials = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="self-start md:self-center md:text-center space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex md:justify-center items-center">
          Mengapa Pilih{" "}
          <Image
            src={Smile}
            alt="Smile Icon"
            height={40}
            width={40}
            className="mx-2 hidden md:block"
          />
          Kami
        </h1>
        <p className="text-sm sm:text-base md:text-lg flex justify-center items-center">
          Temukan mengapa klien kami mempercayai kami. Rasakan keunggulan, keandalan, dan inovasi dalam setiap solusi yang kami berikan.
          <Image
            src={Thunder}
            alt="Thunder Icon"
            width={40}
            height={40}
            className="mx-2 hidden md:block"
          />
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {WhyUs.map((item) =>
          <div key={item.title} className="p-4 md:p-10 border border-border hover:bg-primary hover:text-background transition-colors rounded-3xl flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <div className="p-3 rounded-xl bg-[#ff842c] text-white">
                <item.icon size={20} />
              </div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
            </div>
            <p className="text-sm md:text-base">{item.description}</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials