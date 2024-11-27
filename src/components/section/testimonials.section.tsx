'use client'
import Image from 'next/image'
import { SectionWrapper } from '@/components/Layout'
import ListComponent from '@/components/ListComponent'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Testimonials as TestimonialsData, TestimonialProps } from '@/constants/Testimonials'
import OrangeChecklist from '../../../public/assets/icons/OrangeChecklist.svg'
import Autoplay from 'embla-carousel-autoplay'

const Testimonials = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="self-start md:self-center md:text-center space-y-3 md:space-y-4">
        <p className='text-[#FF842C] text-lg md:text-xl uppercase'>APA KATA MEREKA</p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex md:justify-center items-center">
          Testimoni Pelanggan Kami{' '}
          <Image src={OrangeChecklist} alt="Rocket Icon" width={40} height={40} className="mx-2 hidden md:block" />
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Temukan apa yang dikatakan pelanggan kami tentang pengalaman mereka.
        </p>
      </div>
      <Carousel
        orientation="custom"
        plugins={[Autoplay({ playOnInit: true, stopOnInteraction: false, delay: 4000 })]}
        opts={{
          align: 'start',
          loop: true
        }}
        className="w-full max-w-sm sm:max-w-max"
      >
        <CarouselContent className="cursor-grab">
          <ListComponent
            data={TestimonialsData}
            renderItem={(item: TestimonialProps, index: number) => {
              return (
                <CarouselItem key={index} className="sm:basis-1/2 xl:basis-1/3">
                  <Card className="h-56 md:h-80 rounded-3xl border border-border bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                    <CardContent className="flex flex-col justify-between h-full p-4 md:p-10">
                      <p className="text-sm md:text-base">{`"${item.statement}"`}</p>
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14">
                          <Image
                            src={item.image}
                            alt="Monitor Icon"
                            className="w-full h-full rounded-full object-cover"
                            width={100}
                            height={100}
                            priority
                          />
                        </div>
                        <div>
                          <p className="text-sm md:text-base font-semibold">{item.name}</p>
                          <p className="text-xs md:text-sm">{item.job}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            }}
          />
        </CarouselContent>
      </Carousel>
    </SectionWrapper>
  )
}

export default Testimonials
