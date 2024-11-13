"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Flame,
  Plus,
  Minus,
  MoveRight,
  MoveLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { SectionWrapper } from "@/components/Layout";
import { accordionItems } from "@/constants/FAQ";
import { Accordion, AccordionItem } from "@/components/Accordion";
import ListComponent from "@/components/ListComponent";
import { AccordionItemProps } from "@/constants/FAQ";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Thropy from "../../public/assets/icons/thropy.png";
import Thunder from "../../public/assets/icons/thunder.png";
import Rocket from "../../public/assets/icons/rocket.png";
import Smile from "../../public/assets/icons/smile.png";
import send from "../../public/assets/icons/send.png";
import Pencil from "../../public/assets/icons/pencil.png";
import GreenQustionMark from "../../public/assets/icons/greenquestionmark.png";
import Monitor from "../../public/assets/icons/monitor.png";
import BlackMonitor from "../../public/assets/icons/blackmonitor.png";
import LogoDomsat from "../../public/assets/images/logo_domsat.jpg";
import { AboutServices, AboutServicesProps } from "@/constants/AboutServices";
import { Services, ServicesProps } from "@/constants/Services";

export default function Home() {
  return (
    <div className="w-full min-h-dvh px-2 md:px-20">
      <main className="flex flex-col gap-28 row-start-2 sm:items-start mb-8">
        <SectionWrapper className="min-h-[550px] md:min-h-[700px] rounded-3xl w-full flex items-center justify-center bg-gradient-to-b from-blue-300 to-white">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm">
              <Flame className="h-4 w-4" />
              <span className="ml-2">Find Us for Company</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                We help you achieve <span className="font-black">your</span>{" "}
                <i className="inline-flex items-center font-black">
                  goals grow
                </i>
                <br />
                your bussiness
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Team of professionals specializing in development and
                implementation
              </p>
            </div>
            <Button size="lg" className="rounded-full">
              Get Started <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </SectionWrapper>

        <SectionWrapper className="min-h-[550px] md:min-h-[650px] rounded-3xl w-full flex flex-col items-center justify-center gap-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full  bg-black text-white px-4 py-1.5 text-sm">
              <Flame className="h-4 w-4" />
              <span className="ml-2">Our Services</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex justify-center">
                Explore{" "}
                <Image
                  src={Rocket}
                  alt="rocket"
                  className="hidden md:flex mx-2"
                />{" "}
                Our Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto flex justify-center items-center">
                Handpicked Export Ready to Bring Your Bussiness
                <Image
                  src={Pencil}
                  width={40}
                  height={40}
                  alt="pencil"
                  className="hidden md:flex mx-3"
                />
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-around md:space-x-10 p-5 md:p-0">
            <div className="hidden lg:flex items-start justify-end lg:basis-1/5">
              <h3 className="font-bold text-xl">Categories</h3>
            </div>
            <div className="relative flex justify-center md:justify-start basis-full lg:basis-4/5">
              <Carousel
                orientation="custom"
                opts={{
                  align: "start",
                }}
                className="max-w-sm md:max-w-max md:w-full h-96"
              >
                <CarouselContent className="p-2 md:p-0 md:pl-2 cursor-grab">
                  <ListComponent
                    data={Services}
                    renderItem={(item: ServicesProps, index) => {
                      const isEven = (index + 1) % 2 == 0;
                      return (
                        <CarouselItem
                          key={index}
                          className={cn([
                            "md:basis-1/2 lg:basis-2/5",
                            index !== AboutServices.length - 1 && "mr-5",
                          ])}
                        >
                          <Card
                            className={cn(
                              "h-[375px]",
                              isEven
                                ? "bg-gradient-to-t from-blue-300 via-blue-100 to-blue-50"
                                : "bg-[#35363D] text-white"
                            )}
                          >
                            <CardContent className="flex flex-col justify-between h-full p-5 lg:p-10">
                              <div>
                                <div
                                  className={cn(
                                    "flex justify-center items-center rounded-full w-10 h-10 p-3 mb-5",
                                    isEven ? "bg-[#FF842C]" : "bg-white"
                                  )}
                                >
                                  <Image
                                    src={isEven ? Monitor : BlackMonitor}
                                    alt="monitor"
                                  />
                                </div>
                                <span className="text-3xl font-semibold">
                                  {item.title}
                                </span>
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
                <CarouselPrevious customClassName="-bottom-16 right-20 md:right-48 w-14 h-14" />
                <CarouselNext customClassName="-bottom-16 right-2 md:right-[116px] w-14 h-14" />
              </Carousel>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="min-h-[550px] md:min-h-[650px rounded-3xl w-full flex flex-col items-center justify-center space-y-10">
          <div className="mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex justify-center">
              Our Clients{" "}
              <Image
                src={Smile}
                alt="smile"
                height={5}
                width={50}
                className="hidden md:flex mx-2"
              />{" "}
              About Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto flex justify-center">
              Handpicked Export Ready to Bring Your Bussiness{" "}
              <Image
                src={Thunder}
                alt="thunder"
                width={20}
                height={5}
                className="hidden md:flex mx-2"
              />
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-around md:space-x-10">
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
                className="w-full max-w-sm md:max-w-72 lg:max-w-3xl h-96"
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
                <CarouselPrevious customClassName="-bottom-16 right-20 xl:-right-10 w-14 h-14" />
                <CarouselNext customClassName="-bottom-16 right-2 xl:-right-28 w-14 h-14" />
              </Carousel>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="min-h-[550px] md:min-h-[650px] rounded-3xl w-full flex items-center justify-center">
          <div className="mx-auto space-y-8">
            <div className="max-w-5xl space-y-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex justify-center">
                Frequently Asked{" "}
                <Image
                  src={GreenQustionMark}
                  alt="greenquestionmark"
                  className="hidden md:flex mx-2"
                />{" "}
                Questions
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connecting You with the Best Answer
              </p>
            </div>
            <div className="w-full max-w-4xl">
              <Accordion className="">
                <ListComponent
                  data={accordionItems}
                  renderItem={(item: AccordionItemProps, index) => (
                    <AccordionItem
                      key={index}
                      value={index + 1}
                      trigger={item.title}
                      className="w-full p-5 mb-5 border rounded-3xl bg-[#F5F5F5]"
                      activeClassName="bg-zinc-900 text-white"
                      customTriggerIcon={(open) => (
                        <div
                          className={cn([
                            "w-6 h-6 lg:w-10 lg:h-10 p-3 flex items-center justify-center text-center rounded-full border-2 border-black",
                            open && "bg-white text-black",
                          ])}
                        >
                          <span
                            className={`transition-transform ${
                              open
                                ? "rotate-180 duration-1000"
                                : "duration-1000"
                            }`}
                          >
                            {open ? <Minus /> : <Plus />}
                          </span>
                        </div>
                      )}
                    >
                      {item.content}
                    </AccordionItem>
                  )}
                />
              </Accordion>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
