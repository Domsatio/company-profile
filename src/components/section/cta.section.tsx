import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

const CTA = () => {
  return (
    <SectionWrapper className="mt-6 sm:mt-8 md:mt-10 min-h-[60vh] sm:min-h-80 md:min-h-96 rounded-2xl sm:rounded-3xl flex items-center justify-center bg-[#9BCEFF] px-4 sm:px-6">
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
          Ready to Transform Your Business?
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          Take the first step towards digital excellence. Let&apos;s collaborate to bring your vision to life and drive your business forward.
        </p>
        <Button variant='outline' className="h-12 sm:h-14 w-40 sm:w-48 rounded-full font-semibold text-base sm:text-lg">
          Get Started <ArrowUpRight className="ml-1" />
        </Button>
      </div>
    </SectionWrapper>
  )
}

export default CTA