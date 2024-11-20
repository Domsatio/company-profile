'use client'
import Image from 'next/image'
import { SectionWrapper } from '@/components/Layout'
import GreenQuestionMark from '../../../public/assets/icons/QuestionMark.svg'

const RecentBlog = () => {
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
          We are here to answer your questions and help you with any concerns you may have.
        </p>
      </div>
      {/* TODO: Add Recent Blog */}
    </SectionWrapper>
  )
}

export default RecentBlog
