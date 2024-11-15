import Image from "next/image";
import { SectionWrapper } from "@/components/Layout";
import ListComponent from "@/components/ListComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Thunder from "../../../public/assets/icons/Thunder.svg";
import Smile from "../../../public/assets/icons/Smile.svg";
import LogoDomsat from "../../../public/assets/images/logo_domsat.jpg";
import { AboutServices, AboutServicesProps } from "@/constants/AboutServices";

const Testimonials = () => {
  return (
    <SectionWrapper className="py-10 md:py-20 bg-white flex flex-col items-center justify-center space-y-6 md:space-y-10">
      <div className="mx-auto text-center space-y-3 md:space-y-4 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex justify-center items-center">
          Our Clients{" "}
          <Image
            src={Smile}
            alt="Smile Icon"
            height={40}
            width={40}
            className="mx-2 hidden md:block"
          />
          About Services
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto flex justify-center items-center">
          Discover what our valued clients say about our exceptional services
          <Image
            src={Thunder}
            alt="Thunder Icon"
            width={40}
            height={40}
            className="mx-2 hidden md:block"
          />
        </p>
      </div>
      <div className="w-full flex justify-center md:justify-around md:space-x-10 px-4 md:px-6 lg:px-0">
        <div className="hidden lg:flex items-start justify-end lg:basis-4/12">
          <Image
            src={LogoDomsat}
            alt="iamge"
            className="rounded-xl border"
            height={100}
            width={100}
          />
        </div>
        <div className="relative flex justify-center md:justify-start basis-full lg:basis-8/12">
          <Carousel
            orientation="custom"
            opts={{
              align: "start",
            }}
            className="w-full max-w-[300px] sm:max-w-sm md:max-w-2xl lg:max-w-3xl h-[350px] md:h-96"
          >
            <CarouselContent className="p-2 md:p-0 cursor-grab">
              <ListComponent
                data={AboutServices}
                renderItem={(item: AboutServicesProps, index) => (
                  <CarouselItem key={index}>
                    <Card className="max-h-[375px]">
                      <CardContent className="flex aspect-square items-start justify-center">
                        <span className="text-3xl lg:text-5xl font-semibold">
                          {item.body}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )}
              />
            </CarouselContent>
            <CarouselPrevious customClassName="-bottom-16 right-20 md:right-16 xl:-right-10 w-12 h-12 md:w-14 md:h-14 border-2 border-[#a3a2a2]" />
            <CarouselNext customClassName="-bottom-16 right-2 md:right-0 xl:-right-28 w-12 h-12 md:w-14 md:h-14 border-2 border-[#a3a2a2]" />
          </Carousel>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Testimonials