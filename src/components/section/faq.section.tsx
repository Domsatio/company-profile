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
    <SectionWrapper className="py-20 rounded-b-3xl bg-white flex items-center justify-center">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex justify-center">
            Frequently Asked
            <Image
              src={GreenQuestionMark}
              alt="Green Question Mark Icon"
              className="mx-2"
            />
            Questions
          </h1>
          <p className="text-lg mx-auto">
            We are here to answer your questions and help you with any concerns you may have.
          </p>
        </div>
        <Accordion type="single" collapsible>
          <ListComponent
            data={accordionItems}
            renderItem={(item: AccordionItemProps) => (
              <AccordionItem value={item.id} className="mb-5">
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