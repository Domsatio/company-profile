import React from 'react'
import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

const CTA = () => {
  return (
    <SectionWrapper className="mt-10 min-h-96 rounded-3xl flex items-center justify-center bg-[#9BCEFF]">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Ready to Transform Your Business?
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Take the first step towards digital excellence. Let&apos;s collaborate to bring your vision to life and drive your business forward.
        </p>
        <Button variant='outline' className="h-14 w-48 rounded-full font-semibold text-lg">
          Get Started <ArrowUpRight />
        </Button>
      </div>
    </SectionWrapper>
  )
}

export default CTA