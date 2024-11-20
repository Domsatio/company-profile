import Image from "next/image";
import { SectionWrapper } from "@/components/Layout";
import Thunder from "../../../public/assets/icons/Thunder.svg";
import Smile from "../../../public/assets/icons/Smile.svg";
import { ThumbsUp } from "lucide-react";

const Testimonials = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="self-start md:self-center md:text-center space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex md:justify-center items-center">
          Why Choose{" "}
          <Image
            src={Smile}
            alt="Smile Icon"
            height={40}
            width={40}
            className="mx-2 hidden md:block"
          />
          Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg flex justify-center items-center">
          Discover why our clients trust us. Experience excellence, reliability, and innovation in every solution we deliver.
          <Image
            src={Thunder}
            alt="Thunder Icon"
            width={40}
            height={40}
            className="mx-2 hidden md:block"
          />
        </p>
      </div>
      <div className="w-full h-96 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-primary/50 hover:bg-primary hover:text-background transition-colors rounded-3xl flex justify-center items-center">
          <ThumbsUp size={40} />
        </div>
        <div className="border border-primary/50 hover:bg-primary hover:text-background transition-colors rounded-3xl flex justify-center items-center">
          <ThumbsUp size={40} />
        </div>
        <div className="sm:row-span-2 border border-primary/50 hover:bg-primary hover:text-background transition-colors rounded-3xl flex justify-center items-center">
          <ThumbsUp size={40} />
        </div>
        <div className="sm:col-span-2 border border-primary/50 hover:bg-primary hover:text-background transition-colors rounded-3xl flex justify-center items-center">
          <ThumbsUp size={40} />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Testimonials