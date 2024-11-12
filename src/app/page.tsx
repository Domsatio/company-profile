"use client";
import Image from "next/image";
import { ArrowRight, Flame, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { SectionWrapper } from "@/components/Layout";
import { accordionItems } from "@/constants/FAQ";
import { Accordion, AccordionItem } from "@/components/Accordion";
import ListComponent from "@/components/ListComponent";
import { AccordionItemProps } from "@/constants/FAQ";

export default function Home() {
  return (
    <Layout>
      <div className="w-full min-h-dvh px-2 md:px-20">
        <main className="flex flex-col gap-8 row-start-2 sm:items-start mb-8">
          <SectionWrapper className="min-h-[550px] md:min-h-[700px] rounded-3xl w-full flex border items-center justify-center bg-gradient-to-b from-blue-300 to-white">
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

          <SectionWrapper className="min-h-[550px] md:min-h-[650px] border rounded-3xl w-full flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center rounded-full  bg-black text-white px-4 py-1.5 text-sm">
                <Flame className="h-4 w-4" />
                <span className="ml-2">Our Services</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Explore Our Services
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Handpicked Export Ready to Bring Your Bussiness
                </p>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper className="min-h-[550px] md:min-h-[650px] border rounded-3xl w-full flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center rounded-full  bg-black text-white px-4 py-1.5 text-sm">
                <Flame className="h-4 w-4" />
                <span className="ml-2">Our Services</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Explore Our Services
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Handpicked Export Ready to Bring Your Bussiness
                </p>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper className="min-h-[550px] md:min-h-[650px] border rounded-3xl w-full flex items-center justify-center">
            <div className="mx-auto space-y-8">
              <div className="max-w-5xl space-y-4 text-center">
                <h1 className="text-2xl md:text-6xl font-bold tracking-tight">
                  Frequently Asked Questions
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
                          <span
                            className={`transition-transform ${
                              open ? "rotate-180 duration-1000" : ""
                            }`}
                          >
                            {open ? <Minus /> : <Plus />}
                          </span>
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
    </Layout>
  );
}
