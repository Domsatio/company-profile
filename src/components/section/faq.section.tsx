import Image from "next/image";
import { SectionWrapper } from "@/components/Layout";
import { accordionItems } from "@/constants/FAQ";
import ListComponent from "@/components/ListComponent";
import { AccordionItemProps } from "@/constants/FAQ";
import GreenQuestionMark from "../../../public/assets/icons/QuestionMark.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <SectionWrapper className="py-12 md:py-20 rounded-b-3xl bg-white flex items-center justify-center px-4 md:px-6">
      <div className="mx-auto w-full max-w-4xl space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center items-center">
            Frequently Asked{" "}
            <Image
              src={GreenQuestionMark}
              alt="Green Question Mark Icon"
              className="mx-2 hidden sm:block"
              width={40}
              height={40}
            />
            Questions
          </h1>
          <p className="text-base md:text-lg mx-auto max-w-2xl px-2">
            We are here to answer your questions and help you with any concerns you may have.
          </p>
        </div>
        <Accordion type="single" collapsible>
          <ListComponent
            data={accordionItems}
            renderItem={(item: AccordionItemProps) => (
              <AccordionItem key={item.id} value={item.id} className="mb-5">
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            )}
          />
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

export default FAQ