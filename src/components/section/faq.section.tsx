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
    <div className="flex flex-wrap sm:justify-center gap-2">
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
      <div className="self-start md:self-center md:text-center space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex md:justify-center items-center">
          Frequently Asked{' '}
          <Image
            src={GreenQuestionMark}
            alt="Green Question Mark Icon"
            className="mx-2 hidden md:block"
            width={40}
            height={40}
          />
          Questions
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Kami siap menjawab pertanyaan Anda dan membantu Anda dengan segala kekhawatiran yang Anda miliki.
        </p>
      </div>
      <ListFAQToggle />
      <div className='w-full max-w-3xl'>
        <Accordion type="single" className='space-y-2' collapsible>
          <ListComponent
            data={accordionItems[active]}
            renderItem={(item: AccordionItemProps) => (
              <AccordionItem key={item.id} value={item.id} className='border border-border rounded-3xl data-[state=open]:bg-primary data-[state=open]:text-primary-foreground'>
                <AccordionTrigger className='px-4 sm:py-6 text-sm md:text-base'>
                  <div className="flex items-center">
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className='px-4 text-sm md:text-base'>{item.content}</AccordionContent>
              </AccordionItem>
            )}
          />
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

export default FAQ
