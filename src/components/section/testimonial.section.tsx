'use client'
import Image from 'next/image'
import { SectionWrapper } from '@/components/Layout'
import ListComponent from '@/components/ListComponent'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Testimonials, TestimonialProps } from '@/constants/Testimonial'
import OrangeChecklist from '../../../public/assets/icons/OrangeChecklist.svg'
import Autoplay from 'embla-carousel-autoplay'

const Testimonial = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center my-10 md:my-20">
      <div className="max-w-3xl mx-auto text-center space-y-8 px-4 md:px-0">
        <div className="space-y-2 md:space-y-4">
          <p className='text-[#FF842C] text-lg md:text-xl'>WHAT THEY SAY</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight flex justify-center items-center">
            Our User Kind Words{' '}
            <Image src={OrangeChecklist} alt="Rocket Icon" width={40} height={40} className="mx-2 hidden md:block" />
          </h1>
          <p className="text-base md:text-lg flex justify-center items-center">
            Here are some testimonials from our user after using Spend.In to manage their business expenses.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center md:space-x-10 px-4 md:px-5 lg:px-0">
        <div className="relative flex justify-center md:justify-start">
          <Carousel
            orientation="custom"
            plugins={[Autoplay({ playOnInit: true, stopOnInteraction: false, delay: 4000 })]}
            opts={{
              align: 'start',
              loop: true
            }}
            className="w-full max-w-[300px] sm:max-w-sm md:max-w-max md:w-full h-[360px] md:h-80"
          >
            <CarouselContent className="cursor-grab">
              <ListComponent
                data={Testimonials}
                renderItem={(item: TestimonialProps, index: number) => {
                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-80 rounded-[30px] md:rounded-[40px] border border-primary/50 bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                        <CardContent className="flex flex-col justify-between h-full p-4 sm:p-10">
                          <p className="text-sm md:text-base">{item.statement}</p>
                          <div className="flex items-center gap-1.5 md:gap-3">
                            <div className="w-14 h-14">
                              <Image
                                src={item.image}
                                alt="Monitor Icon"
                                className="w-full h-full rounded-xl object-cover"
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
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Testimonial
