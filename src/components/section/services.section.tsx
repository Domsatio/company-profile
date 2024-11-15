import Image from "next/image";
import { cn } from "@/lib/utils";
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
import Pencil from "../../../public/assets/icons/Pencil.svg";
import OrangeMonitor from "../../../public/assets/icons/OrangeMonitor.svg";
import BlackMonitor from "../../../public/assets/icons/BlackMonitor.svg";
import Rocket from "../../../public/assets/icons/Rocket.svg";
import { Services, ServicesProps } from "@/constants/Services";

const Service = () => {
  return (
    <SectionWrapper className="py-20 bg-white flex flex-col items-center justify-center gap-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex justify-center items-center">
            Explore
            <Image
              src={Rocket}
              alt="Rocket Icon"
              width={40}
              height={40}
              className="mx-2"
            />
            Our Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto flex justify-center items-center">
            We provide a wide range of services to meet your needs
            <Image
              src={Pencil}
              width={40}
              height={40}
              alt="Pencil Icon"
              className="mx-2"
            />
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-around md:space-x-10 p-5 md:p-0">
        {/* <div className="hidden lg:flex items-start justify-end lg:basis-1/5">
          <h3 className="font-bold text-xl">Categories</h3>
        </div> */}
        <div className="relative flex justify-center md:justify-start basis-full lg:basis-4/5">
          <Carousel
            orientation="custom"
            opts={{
              align: "start",
            }}
            className="max-w-sm md:max-w-max md:w-full h-96"
          >
            <CarouselContent className="cursor-grab">
              <ListComponent
                data={Services}
                renderItem={(item: ServicesProps, index) => {
                  const isEven = (index + 1) % 2 == 0;
                  return (
                    <CarouselItem
                      key={item.title}
                      className="md:basis-1/2 lg:basis-2/5">
                      <Card
                        className={cn(
                          "h-[375px] rounded-[40px] border-none",
                          isEven
                            ? "bg-gradient-to-t from-[#9BCEFF] to-blue-50"
                            : "bg-[#35363d] text-white"
                        )}
                      >
                        <CardContent className="flex flex-col justify-between h-full p-5 lg:p-10">
                          <div className="space-y-2">
                            <Image
                              src={isEven ? OrangeMonitor : BlackMonitor}
                              alt="Monitor Icon"
                            />
                            <p className="text-3xl font-semibold">
                              {item.title}
                            </p>
                            <p className="text-base">{item.body}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <ListComponent
                              data={item.points ?? []}
                              renderItem={(item, indexx) => (
                                <div
                                  key={indexx}
                                  className="rounded-full bg-white text-black px-4 py-1.5 text-sm"
                                >
                                  <span>{item}</span>
                                </div>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                }}
              />
            </CarouselContent>
            <CarouselPrevious customClassName="-bottom-16 right-20 md:right-48 w-14 h-14 border-2 border-[#a3a2a2]" />
            <CarouselNext customClassName="-bottom-16 right-2 md:right-[116px] w-14 h-14 border-2 border-[#a3a2a2]" />
          </Carousel>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Service