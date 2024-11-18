'use client'
import { useState } from 'react'
import Image from 'next/image'
import { SectionWrapper } from '@/components/Layout'
import { accordionItems } from '@/constants/FAQ'
import ListComponent from '@/components/ListComponent'
import { AccordionItemProps } from '@/constants/FAQ'
import GreenQuestionMark from '../../../public/assets/icons/QuestionMark.svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '../ui/button'

const FAQ = () => {
  const listFAQ: string[] = Object.keys(accordionItems)
  const [active, setActive] = useState<string>(listFAQ[0])

  const ListFAQToggle = () => (
    <div className="flex flex-wrap justify-center gap-2">
      {listFAQ.map((item) => (
        <Button
          key={item}
          variant={active === item ? 'default' : 'outline'}
          onClick={() => setActive(item)}
          className="rounded-full"
        >
          {item}
        </Button>
      ))}
    </div>
  )

  return (
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-4xl space-y-6 md:space-y-8">
        <div className="mx-auto text-center space-y-3 md:space-y-4 px-4 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center items-center">
            Frequently Asked{' '}
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
        <ListFAQToggle />
        <Accordion type="single" collapsible className='space-y-2'>
          <ListComponent
            data={accordionItems[active]}
            renderItem={(item: AccordionItemProps) => (
              <AccordionItem key={item.id} value={item.id} className='border border-border rounded-3xl px-4 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground'>
                <AccordionTrigger>
                  <div className="flex items-center">
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            )}
          />
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

export default FAQ
