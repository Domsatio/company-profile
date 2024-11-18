import { ArrowUpRight, Flame } from 'lucide-react'
import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <SectionWrapper className="min-h-fit flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center border rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm">
          <Flame size={16} />
          <span className="ml-1.5 sm:ml-2">Introducing Our Company</span>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            We help you achieve{' '}
            <strong className="dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">
              your <i>goals</i>
            </strong>
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            <strong className="pe-1 dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">
              <i>grow</i>
            </strong>{' '}
            your business
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