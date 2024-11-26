import { MessageSquareText, Monitor, Paintbrush, TabletSmartphone } from 'lucide-react'

export type ServicesProps = {
  title: string
  icon: React.ElementType
  body: string
  points: string[]
}

export const Services: ServicesProps[] = [
  {
    title: 'Web Development',
    icon: Monitor,
    body: 'Create modern, responsive websites and web applications tailored to your business needs.',
    points: ['React', 'Next.js', 'WordPress', 'Webflow']
  },
  {
    title: 'Mobile Development',
    icon: TabletSmartphone,
    body: 'Build native and cross-platform mobile applications that deliver exceptional user experiences.',
    points: ['Android', 'React Native', 'Flutter']
  },
  {
    title: 'UI/UX Design',
    icon: Paintbrush,
    body: 'Design intuitive and engaging user interfaces that enhance user satisfaction and conversion rates.',
    points: ['Wireframing', 'Prototyping', 'User Research', 'Visual Design']
  },
  {
    title: 'IT Consulting',
    icon: MessageSquareText,
    body: 'Strategic technology consulting to help your business make informed decisions and achieve goals.',
    points: ['Strategy', 'Architecture', 'Security', 'Integration']
  }
]
