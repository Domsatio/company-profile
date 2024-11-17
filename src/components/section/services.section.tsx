import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionWrapper } from '@/components/Layout'
import ListComponent from '@/components/ListComponent'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Pencil from '../../../public/assets/icons/Pencil.svg'
import OrangeMonitor from '../../../public/assets/icons/OrangeMonitor.svg'
import BlackMonitor from '../../../public/assets/icons/BlackMonitor.svg'
import Rocket from '../../../public/assets/icons/Rocket.svg'
import { Services, ServicesProps } from '@/constants/Services'

const Service = () => {
  return (
    <SectionWrapper className="py-10 md:py-20 flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="max-w-3xl mx-auto text-center space-y-8 px-4 md:px-0">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight flex justify-center items-center">
            Explore <Image src={Rocket} alt="Rocket Icon" width={40} height={40} className="mx-2 hidden md:block" />
            Our Services
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto flex justify-center items-center">
            We provide a wide range of services to meet your needs
            <Image src={Pencil} width={40} height={40} alt="Pencil Icon" className="mx-2 hidden md:block" />
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-around md:space-x-10 px-4 md:px-5 lg:px-0">
        <div className="relative flex justify-center md:justify-start basis-full lg:basis-4/5">
          <Carousel
            orientation="custom"
            opts={{
              align: 'start'
            }}
            className="w-full max-w-[300px] sm:max-w-sm md:max-w-max md:w-full h-[420px] md:h-96"
          >
            <CarouselContent className="cursor-grab">
              <ListComponent
                data={Services}
                renderItem={(item: ServicesProps, index) => {
                  const isEven = (index + 1) % 2 == 0
                  return (
                    <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-2/5">
                      <Card
                        className={cn(
                          'h-[375px] rounded-[30px] md:rounded-[40px] border-none',
                          isEven
                            ? 'bg-gradient-to-t from-[#9BCEFF] to-blue-50 dark:bg-gradient-to-t dark:from-[#35363d] dark:to-[#1a1a1a] dark:text-white'
                            : 'bg-[#35363d] text-white dark:bg-gray-200 dark:text-dark'
                        )}
                      >
                        <CardContent className="flex flex-col justify-between h-full p-4 sm:p-10">
                          <div className="space-y-2">
                            <Image
                              src={isEven ? OrangeMonitor : BlackMonitor}
                              alt="Monitor Icon"
                              className={cn(
                                'w-10 h-10 md:w-auto rounded-full md:h-auto',
                                !isEven && 'dark:border-2 dark:border-dark'
                              )}
                            />
                            <p className="text-2xl md:text-3xl font-semibold">{item.title}</p>
                            <p className="text-sm md:text-base">{item.body}</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            <ListComponent
                              data={item.points ?? []}
                              renderItem={(item, indexx) => (
                                <div
                                  key={indexx}
                                  className={cn(
                                    'rounded-full bg-white text-black px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm',
                                    !isEven && 'dark:bg-dark dark:text-white'
                                  )}
                                >
                                  <span>{item}</span>
                                </div>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                }}
              />
            </CarouselContent>
            <CarouselPrevious customClassName="-bottom-14 md:-bottom-16 right-16 md:right-48 w-12 h-12 md:w-14 md:h-14 border-2 border-[#a3a2a2]" />
            <CarouselNext customClassName="-bottom-14 md:-bottom-16 right-0 md:right-[116px] w-12 h-12 md:w-14 md:h-14 border-2 border-[#a3a2a2]" />
          </Carousel>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Service
