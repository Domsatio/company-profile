import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

const CTA = () => {
  return (
    <SectionWrapper>
      <div className='rounded-3xl flex items-center justify-center text-black bg-gradient-to-tr from-primary-300 to-primary-400 p-6 md:p-10'>
        <div className="md:text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Ready to Transform Your Business?
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Take the first step towards digital excellence. Let&apos;s collaborate to bring your vision to life and drive your business forward.
          </p>
          <Button className="h-12 sm:h-14 w-40 sm:w-48 rounded-full font-semibold text-base sm:text-lg">
            Get Started <ArrowUpRight className="ml-1" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CTA