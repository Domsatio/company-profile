import { Metadata } from "next";
import { SectionWrapper } from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ListComponent from "@/components/ListComponent";
import { Services, ServicesProps } from "@/constants/Services";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Tentang Kami | Domsat - Crafted with Passion and Precision',
  description: 'Tentang Kami | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

const About = () => {
  return (
    <SectionWrapper className="flex flex-col px-4 md:gap-4 md:px-0 py-5 md:py-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">Tentang Kami</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-2 accent">Tentang Kami</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sint possimus, velit doloremque soluta facere cupiditate quasi quas odit cumque voluptatem placeat praesentium ducimus, temporibus, minima et doloribus consequuntur. Consequatur iure eveniet fugit at, explicabo eaque consectetur ab blanditiis odit quisquam! Facere fugiat nostrum dolore quis enim reprehenderit nam qui nesciunt, rerum excepturi numquam error quas recusandae nisi? Commodi enim, necessitatibus mollitia magni aspernatur amet? Incidunt ab sed ea, in ipsam alias aliquam illo. Nihil delectus error fugit repudiandae! Ratione architecto delectus aliquam possimus, perspiciatis nihil quos cum ad alias tenetur ex quasi distinctio optio, nostrum at provident. Voluptatibus cum, sunt modi minima nihil non maxime dolorum recusandae numquam deleniti soluta rerum molestiae. Aut omnis repellendus dicta asperiores quam error dolore, fugiat ullam! Esse iure aut quos molestiae facere nemo, quibusdam ea nobis dolore dolor rem, ratione totam delectus eaque pariatur repudiandae in ducimus numquam doloremque sed doloribus animi natus?
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Layanan Kami</h1>
          <Carousel
            orientation="custom"
            opts={{
              align: 'start'
            }}
            className="relative w-full max-w-sm sm:max-w-max"
          >
            <CarouselContent className="cursor-grab">
              <ListComponent
                data={Services}
                renderItem={(item: ServicesProps) => {
                  return (
                    <CarouselItem key={item.title} className="sm:basis-1/2 min-h-64 md:min-h-[375px]">
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
                                  className='rounded-full border border-border bg-[#fafafa] text-black px-3 py-1 text-xs md:text-sm'
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
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Lokasi Kami</h1>
          <div className="relative w-full rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.2990660184773!2d111.45539799999999!3d-7.863738999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTEnNDkuNSJTIDExMcKwMjcnMTkuNCJF!5e0!3m2!1sen!2sid!4v1731772446480!5m2!1sen!2sid"
              className="w-full h-[450px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute w-80 top-2 left-2 bg-white rounded-3xl p-6 shadow-md space-y-2">
              <h4 className="text-base font-semibold text-black">Kantor Domsat</h4>
              <p className="text-xs font-medium text-gray-600 leading-5">
                Jalan Puspowarno No. 94, RT 3, RW 1, Mangkujayan, Ponorogo, Ponorogo, Jawa Timur, 63413
              </p>
              <Link
                href="https://maps.app.goo.gl/Cx5XTNzqEz2KKPji8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007DFE] hover:underline underline-offset-4 text-sm font-medium inline-block"
              >
                Lihat peta lebih besar →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;