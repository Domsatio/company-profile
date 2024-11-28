import Link from 'next/link'
import { SectionWrapper } from '../Layout'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <SectionWrapper>
      <div className='rounded-3xl flex items-center justify-center text-black bg-gradient-to-tr from-primary-300 to-primary-400 p-6 md:p-10'>
        <div className="md:text-center flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Siap Mengubah Bisnis Anda?
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan solusi terbaik bagi bisnis Anda. Kami hadir untuk membantu Anda dalam merancang solusi yang tepat sesuai dengan kebutuhan bisnis Anda.
          </p>
          <Link href='/contact'>
            <Button className="h-12 sm:h-14 w-40 sm:w-48 rounded-full font-semibold text-base sm:text-lg">
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CTA