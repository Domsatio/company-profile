import Image from 'next/image'
import { SectionWrapper } from '@/components/Layout'
import ListComponent from '@/components/ListComponent'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Pencil from '../../../public/assets/icons/Pencil.svg'
import Rocket from '../../../public/assets/icons/Rocket.svg'
import { Services, ServicesProps } from '@/constants/Services'

const Service = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="self-start md:self-center md:text-center space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex md:justify-center items-center">
          Jelajahi <Image src={Rocket} alt="Rocket Icon" width={40} height={40} className="mx-2 hidden md:block" />
          Layanan Kami
        </h1>
        <p className="text-sm sm:text-base md:text-lg flex justify-center items-center">
          Kami menyediakan berbagai layanan untuk memenuhi kebutuhan Anda.
          <Image src={Pencil} width={40} height={40} alt="Pencil Icon" className="mx-2 hidden md:block" />
        </p>
      </div>
      <Carousel
        orientation="custom"
        opts={{
          align: 'start'
        }}
        className="w-full max-w-sm sm:max-w-max"
      >
        <CarouselContent className="cursor-grab">
          <ListComponent
            data={Services}
            renderItem={(item: ServicesProps) => {
              return (
                <CarouselItem key={item.title} className="sm:basis-1/2 xl:basis-1/3 min-h-64 md:min-h-[375px]">
                  <Card className='h-full rounded-3xl border border-border bg-background hover:bg-primary hover:text-primary-foreground transition-colors'>
                    <CardContent className="flex flex-col justify-between gap-6 h-full p-4 md:p-10">
                      <div className="space-y-2">
                        <div className='p-4 size-fit rounded-full bg-[#ff842c] text-white'>
                          <item.icon size={24} />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-semibold">{item.title}</h4>
                        <p className="text-sm md:text-base">{item.body}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        <ListComponent
                          data={item.points}
                          renderItem={(item, indexx) => (
                            <div
                              key={indexx}
                              className='rounded-full border border-border bg-[#fafafa] text-black px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm'
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
        <CarouselPrevious customClassName="-bottom-14 md:-bottom-16 right-16 md:right-20 w-12 h-12 md:w-14 md:h-14 border border-primary/50" />
        <CarouselNext customClassName="-bottom-14 md:-bottom-16 right-0 w-12 h-12 md:w-14 md:h-14 border border-primary/50" />
      </Carousel>
    </SectionWrapper >
  )
}

export default Service
