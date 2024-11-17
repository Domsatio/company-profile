import { SectionWrapper } from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <SectionWrapper className="flex flex-col px-4 md:px-0 md:py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About Us</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sint possimus, velit doloremque soluta facere cupiditate quasi quas odit cumque voluptatem placeat praesentium ducimus, temporibus, minima et doloribus consequuntur. Consequatur iure eveniet fugit at, explicabo eaque consectetur ab blanditiis odit quisquam! Facere fugiat nostrum dolore quis enim reprehenderit nam qui nesciunt, rerum excepturi numquam error quas recusandae nisi? Commodi enim, necessitatibus mollitia magni aspernatur amet? Incidunt ab sed ea, in ipsam alias aliquam illo. Nihil delectus error fugit repudiandae! Ratione architecto delectus aliquam possimus, perspiciatis nihil quos cum ad alias tenetur ex quasi distinctio optio, nostrum at provident. Voluptatibus cum, sunt modi minima nihil non maxime dolorum recusandae numquam deleniti soluta rerum molestiae. Aut omnis repellendus dicta asperiores quam error dolore, fugiat ullam! Esse iure aut quos molestiae facere nemo, quibusdam ea nobis dolore dolor rem, ratione totam delectus eaque pariatur repudiandae in ducimus numquam doloremque sed doloribus animi natus?
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold mb-6">Our Location</h1>
        <div className="flex flex-row gap-4">
          <div className="rounded-3xl overflow-hidden w-4/6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.2990660184773!2d111.45539799999999!3d-7.863738999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTEnNDkuNSJTIDExMcKwMjcnMTkuNCJF!5e0!3m2!1sen!2sid!4v1731772446480!5m2!1sen!2sid" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="space-y-4 w-2/6">
            <h3 className="text-lg font-bold mb-2">Company Info</h3>
            <div className="flex flex-row gap-2 items-center">
              <Mail size={16} />
              <p className="">domsattech@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Phone size={16} />
              <p className="">08140261540</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MapPin size={16} />
              <p>
                Jalan Puspowarno No. 94, RT 3, RW 1, <br />
                Mangkujayan, Ponorogo, Ponorogo, <br />
                Jawa Timur, 63413
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;