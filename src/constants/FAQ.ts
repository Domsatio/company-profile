export type AccordionItemProps = {
  id: string
  title: string
  content: string
}

export const accordionItems: AccordionItemProps[] = [
  {
    id: '1',
    title: 'What services do you offer?',
    content:
      'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and IT consulting. Our team specializes in creating custom software solutions tailored to your business needs.'
  },
  {
    id: '2',
    title: 'How long does it typically take to complete a project?',
    content:
      "Project timelines vary depending on scope and complexity. A simple website might take 4-8 weeks, while a complex enterprise application could take 6 months or more. We'll provide detailed timeline estimates during our initial consultation based on your specific requirements."
  },
  {
    id: '3',
    title: 'What is your development process?',
    content:
      'We follow an agile development methodology with iterative cycles. This includes requirements gathering, planning, design, development, testing, and deployment phases. We maintain regular communication and provide progress updates throughout the project lifecycle.'
  },
  {
    id: '4',
    title: 'How do you handle project pricing?',
    content:
      'Our pricing is project-based and depends on factors like complexity, features, timeline, and resources required. We provide detailed quotes after thoroughly understanding your requirements. We also offer flexible engagement models including fixed price, time and materials, and retainer arrangements.'
  },
  {
    id: '5',
    title: 'Do you provide maintenance and support after project completion?',
    content:
      'Yes, we offer ongoing maintenance and support services to ensure your digital solutions remain up-to-date and perform optimally. We provide different support packages that include regular updates, security patches, performance monitoring, and technical support.'
  },
  {
    id: '6',
    title: 'How do you ensure the quality and security of your deliverables?',
    content:
      'We implement rigorous quality assurance processes including automated testing, code reviews, and security audits. Our development practices follow industry standards and best practices for secure coding. We also perform thorough testing before any deployment.'
  },
  {
    id: '7',
    title: 'Can you work with our existing systems and technologies?',
    content:
      'Yes, we have experience integrating with various technologies and legacy systems. Our team is skilled in multiple programming languages and frameworks, allowing us to work with your existing infrastructure while implementing modern solutions.'
  }
]
