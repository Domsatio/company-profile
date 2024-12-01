import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <SectionWrapper className="min-h-[90dvh] flex items-center justify-center">
      <div className="md:text-center flex flex-col space-y-8 items-start md:items-center">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
            We Help You Achieve{' '}
            <strong className="px-1.5 accent">
              Your <i>Goals</i>
            </strong>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            <strong className="pe-2.5 accent">
              <i>Grow</i>
            </strong>{' '}
            Your Business
          </h1>
        </div>
        <p className="text-base sm:text-lg md:max-w-2xl md:mx-auto">
          Kami adalah perusahaan teknologi yang berdedikasikan untuk membantu bisnis mencapai tujuan mereka melalui solusi digital yang inovatif dan kemitraan pertumbuhan yang strategis.
        </p>
        <Link href='/contact'>
          <Button variant="outline" className="h-12 sm:h-14 px-6 rounded-full font-semibold text-base sm:text-lg">
            Mulai Sekarang <ArrowUpRight className="size-4 sm:size-5" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}

export default Hero
