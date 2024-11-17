import { ArrowUpRight, Flame } from 'lucide-react'
import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <SectionWrapper className="min-h-fit flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center border border-primary rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm">
          <Flame size={16} />
          <span className="ml-1.5 sm:ml-2">Introducing Our Company</span>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            We help you achieve <strong>your</strong> <i><strong>goals</strong></i>
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            <i><strong>grow</strong></i> your business
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-6">
            We are a technology company dedicated to helping businesses achieve their goals through innovative digital solutions and strategic growth partnerships.
          </p>
        </div>
        <Button className="h-12 sm:h-14 w-40 sm:w-48 rounded-full font-semibold text-base sm:text-lg">
          Get Started <ArrowUpRight className="size-4 sm:size-5" />
        </Button>
      </div>
    </SectionWrapper>
  )
}

export default Hero