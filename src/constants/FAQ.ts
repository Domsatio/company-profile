import {
  Info,
  HeadphonesIcon,
  Clock,
  Settings,
  CreditCard,
  WrenchIcon,
  ShieldCheck,
  Cable,
  Laptop,
  BoxIcon,
  Cloud,
  Webhook,
  PaintBucket,
  Smartphone,
  PenTool,
  MousePointer2,
  HelpCircle,
  Server,
  Download,
  Clock4,
  GraduationCap
} from 'lucide-react'

export type AccordionItemProps = {
  id: string
  icon: React.ElementType
  title: string
  content: string
}

export type AccordionProps = {
  General: AccordionItemProps[]
  Development: AccordionItemProps[]
  Design: AccordionItemProps[]
  Support: AccordionItemProps[]
}

export const accordionItems: Record<string, AccordionItemProps[]> = {
  General: [
    {
      id: '1',
      icon: Info,
      title: 'What services do you offer?',
      content:
        'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and IT consulting. Our team specializes in creating custom software solutions tailored to your business needs.'
    },
    {
      id: '2',
      icon: Clock,
      title: 'How long does it typically take to complete a project?',
      content:
        "Project timelines vary depending on scope and complexity. A simple website might take 4-8 weeks, while a complex enterprise application could take 6 months or more. We'll provide detailed timeline estimates during our initial consultation based on your specific requirements."
    },
    {
      id: '3',
      icon: Settings,
      title: 'What is your development process?',
      content:
        'We follow an agile development methodology with iterative cycles. This includes requirements gathering, planning, design, development, testing, and deployment phases. We maintain regular communication and provide progress updates throughout the project lifecycle.'
    },
    {
      id: '4',
      icon: CreditCard,
      title: 'How do you handle project pricing?',
      content:
        'Our pricing is project-based and depends on factors like complexity, features, timeline, and resources required. We provide detailed quotes after thoroughly understanding your requirements. We also offer flexible engagement models including fixed price, time and materials, and retainer arrangements.'
    },
    {
      id: '5',
      icon: WrenchIcon,
      title: 'Do you provide maintenance and support after project completion?',
      content:
        'Yes, we offer ongoing maintenance and support services to ensure your digital solutions remain up-to-date and perform optimally. We provide different support packages that include regular updates, security patches, performance monitoring, and technical support.'
    },
    {
      id: '6',
      icon: ShieldCheck,
      title: 'How do you ensure the quality and security of your deliverables?',
      content:
        'We implement rigorous quality assurance processes including automated testing, code reviews, and security audits. Our development practices follow industry standards and best practices for secure coding. We also perform thorough testing before any deployment.'
    },
    {
      id: '7',
      icon: Cable,
      title: 'Can you work with our existing systems and technologies?',
      content:
        'Yes, we have experience integrating with various technologies and legacy systems. Our team is skilled in multiple programming languages and frameworks, allowing us to work with your existing infrastructure while implementing modern solutions.'
    }
  ],
  Development: [
    {
      id: '1',
      icon: Laptop,
      title: 'What technologies do you work with?',
      content:
        'We work with a wide range of technologies including JavaScript, TypeScript, React, Angular, Node.js, Python, Django, Ruby on Rails, Java, Kotlin, Swift, and more. Our team stays updated with the latest trends and tools to deliver cutting-edge solutions.'
    },
    {
      id: '2',
      icon: Smartphone,
      title: 'Do you provide mobile app development services?',
      content:
        'Yes, we specialize in mobile app development for iOS and Android platforms. Our team has experience building native, hybrid, and cross-platform apps using technologies like React Native, Flutter, and Xamarin.'
    },
    {
      id: '3',
      icon: BoxIcon,
      title: 'Can you help with custom software development?',
      content:
        'Absolutely! We excel in custom software development tailored to your unique business requirements. Our team can build bespoke solutions from scratch or enhance existing systems to improve efficiency and productivity.'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'What is your experience with cloud technologies?',
      content:
        'We have extensive experience working with cloud platforms like AWS, Azure, and Google Cloud. Our team can help you migrate to the cloud, build cloud-native applications, and leverage cloud services for scalability and cost-efficiency.'
    },
    {
      id: '5',
      icon: Webhook,
      title: 'Do you provide API development services?',
      content:
        'Yes, we offer API development services to help you build robust and scalable APIs for your applications. Our team follows best practices for API design, documentation, and testing to ensure seamless integration with other systems.'
    }
  ],
  Design: [
    {
      id: '1',
      icon: PaintBucket,
      title: 'What design services do you offer?',
      content:
        'We offer a wide range of design services including UI/UX design, branding, graphic design, and illustration. Our design team specializes in creating visually appealing and user-friendly interfaces that enhance the overall user experience.'
    },
    {
      id: '2',
      icon: Smartphone,
      title: 'Do you provide responsive web design?',
      content:
        'Yes, we design websites and applications that are responsive and optimized for all devices and screen sizes. Our design process includes wireframing, prototyping, and user testing to ensure a seamless user experience across platforms.'
    },
    {
      id: '3',
      icon: PenTool,
      title: 'Can you help with logo and branding design?',
      content:
        'Absolutely! We offer logo design, branding, and identity services to help you establish a strong brand presence. Our design team can create custom logos, brand guidelines, and marketing collateral that reflect your brand values and resonate with your target audience.'
    },
    {
      id: '4',
      icon: MousePointer2,
      title: 'What is your approach to user experience design?',
      content:
        'We follow a user-centered design approach focused on understanding user needs, behaviors, and motivations. Our design process includes user research, wireframing, prototyping, and usability testing to create intuitive and engaging user experiences.'
    },
    {
      id: '5',
      icon: HelpCircle,
      title: 'Do you provide design consulting services?',
      content:
        'Yes, we offer design consulting services to help you optimize your digital products and services. Our design experts can review your existing designs, provide recommendations for improvement, and help you align your design strategy with your business goals.'
    }
  ],
  Support: [
    {
      id: '1',
      icon: HeadphonesIcon,
      title: 'What support services do you offer?',
      content:
        'We offer a range of support services including maintenance, monitoring, troubleshooting, and technical support. Our support team is available to assist you with any issues, updates, or enhancements to ensure your digital solutions run smoothly.'
    },
    {
      id: '2',
      icon: Server,
      title: 'Do you provide hosting and server management?',
      content:
        'Yes, we offer hosting and server management services to help you deploy and maintain your applications. Our team can set up hosting environments, configure servers, and monitor performance to ensure optimal uptime and security.'
    },
    {
      id: '3',
      icon: Download,
      title: 'Can you help with software updates and patches?',
      content:
        'Absolutely! We provide software update and patch management services to keep your applications up-to-date and secure. Our team can schedule regular updates, test new releases, and apply patches to address vulnerabilities and bugs.'
    },
    {
      id: '4',
      icon: Clock4,
      title: 'What is your response time for support requests?',
      content:
        'Our support team aims to respond to support requests within 24 hours. We prioritize urgent issues and provide timely updates on the status of your request. Our goal is to resolve issues quickly and efficiently to minimize downtime and disruptions.'
    },
    {
      id: '5',
      icon: GraduationCap,
      title: 'Do you offer training and documentation for your solutions?',
      content:
        'Yes, we provide training and documentation services to help you onboard your team and users. Our training programs cover system usage, best practices, and troubleshooting techniques. We also create user manuals, guides, and FAQs to support your users.'
    }
  ]
}
