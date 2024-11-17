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
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="mx-auto text-center space-y-3 md:space-y-4 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex justify-center items-center">
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
        <p className="text-base md:text-lg text-center">
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
    </SectionWrapper>
  )
}

export default FAQ