import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionWrapper } from "@/components/Layout";
import { Code2, Database, Layout, Server } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const technologies = {
  frontend: [
    { name: "HTML/CSS", description: "Foundation of web development" },
    { name: "JavaScript", description: "Dynamic client-side scripting" },
    { name: "React", description: "UI component library" },
    { name: "Vue.js", description: "Progressive JavaScript framework" },
    { name: "Angular", description: "Full-featured web framework" },
    { name: "Sass", description: "CSS preprocessor" },
  ],
  backend: [
    { name: "Node.js", description: "JavaScript runtime" },
    { name: "Python", description: "Versatile programming language" },
    { name: "PHP", description: "Server-side scripting" },
    { name: "Django", description: "Python web framework" },
    { name: ".NET", description: "Microsoft's development platform" },
    { name: "Laravel", description: "PHP web framework" },
  ],
  databases: [
    { name: "MySQL", description: "Relational database" },
    { name: "MongoDB", description: "NoSQL database" },
    { name: "PostgreSQL", description: "Advanced relational database" },
    { name: "Redis", description: "In-memory data store" },
    { name: "Neo4j", description: "Graph database" },
  ],
};

const developmentSteps = [
  {
    step: "01",
    title: "Discuss The Project",
    description: "Initial project discussion and gathering requirements information and supporting data."
  },
  {
    step: "02",
    title: "Research & Analysis",
    description: "Process of analyzing requirements, finding solutions, creating concept plans and website development strategies."
  },
  {
    step: "03",
    title: "Concept Submission",
    description: "Process of submitting website concept plans and designs that have been created to the client."
  },
  {
    step: "04",
    title: "Prototype",
    description: "Process of creating prototypes or initial website designs such as website design and system design."
  },
  {
    step: "05",
    title: "Development",
    description: "Process of creating and developing the website from the prototype and designs that have been made."
  },
  {
    step: "06",
    title: "Testing",
    description: "Process of testing and trial runs to ensure website functionality can run perfectly."
  },
  {
    step: "07",
    title: "Pre Deployment",
    description: "Website version finalization and revision, preparing a series of actions for the deployment process."
  },
  {
    step: "08",
    title: "Deployment",
    description: "Final stage, website installation process on server and user. And finally, website ready to use."
  }
]

export const metadata: Metadata = {
  title: 'Pengembangan Web | Domsat - Crafted with Passion and Precision',
  description: 'Pengembangan Web | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

export default function ProcessPage() {
  return (
    <SectionWrapper className="flex flex-col px-4 md:gap-4 md:px-0 py-5 md:py-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/services">Layanan</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">Pengembangan Web</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-16">
        <div className="space-y-4 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Elevating brands through expert SEO and exceptional design
            </h1>
            <p className="text-muted-foreground max-w-[600px]">
              Enhanced brands by helping effective SEO techniques, beautiful design and smart business strategy.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src=""
              alt="Workspace with devices"
              className="object-cover"
              fill
            />
          </div>
        </div>

        <div className="space-y-10 flex flex-col items-center">
          <div className="max-w-3xl self-start md:self-center md:text-center space-y-3 md:space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Website Development Process</h1>
            <p className="text-muted-foreground">
              These are the detailed steps we take in the website development process to achieve maximum results that align with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                    <span className="text-4xl font-bold text-muted-foreground/15">
                      {step.step}
                    </span>
                  </div>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-10 flex flex-col items-center">
          <div className="max-w-3xl self-start md:self-center md:text-center space-y-3 md:space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Web Development Technologies
            </h1>
            <p className="text-muted-foreground">
              Explore the essential components and technologies that power modern web development
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Server className="h-4 w-4" />
                Backend
              </TabsTrigger>
              <TabsTrigger value="databases" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                Databases
              </TabsTrigger>
            </TabsList>

            {Object.entries(technologies).map(([category, techs]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techs.map((tech) => (
                    <Card key={tech.name} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="space-y-2">
                        <div className="flex justify-between">
                          <CardTitle className="text-xl font-semibold">{tech.name}</CardTitle>
                          <Badge variant="secondary">
                            <Code2 className="h-3 w-3 mr-1" />
                            {category}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">
                          {tech.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </SectionWrapper>
  )
}

