import { ArrowUpRight, Flame } from 'lucide-react'
import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <SectionWrapper className="min-h-dvh rounded-t-3xl flex items-center justify-center bg-gradient-to-b from-[#9BCEFF] to-white">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm">
          <Flame size={16} />
          <span className="ml-2">Introducing Our Company</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight">
            We help you achieve <strong>your</strong> <i><strong>goals</strong></i>
          </h1>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight">
            <i><strong>grow</strong></i> your business
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are a technology company dedicated to helping businesses achieve their goals through innovative digital solutions and strategic growth partnerships.
          </p>
        </div>
        <Button variant='outline' className="h-14 w-48 rounded-full font-semibold text-lg">
          Get Started <ArrowUpRight />
        </Button>
      </div>
    </SectionWrapper>
  )
}

export default Hero