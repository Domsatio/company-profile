import { MessageSquareText, Monitor, Paintbrush, TabletSmartphone } from 'lucide-react'

export type ServicesProps = {
  title: string
  icon: React.ElementType
  body: string
  points: string[]
}

export const Services: ServicesProps[] = [
  {
    title: 'Pengembangan Web',
    icon: Monitor,
    body: 'Buat situs web dan aplikasi web modern yang responsif sesuai dengan kebutuhan bisnis Anda.',
    points: ['React', 'Next.js', 'WordPress', 'Webflow']
  },
  {
    title: 'Pengembangan Aplikasi Mobile',
    icon: TabletSmartphone,
    body: 'Bangun aplikasi mobile native dan lintas platform yang memberikan pengalaman pengguna yang luar biasa.',
    points: ['Android', 'React Native', 'Flutter']
  },
  {
    title: 'Desain UI/UX',
    icon: Paintbrush,
    body: 'Desain antarmuka pengguna yang intuitif dan menarik yang meningkatkan kepuasan dan tingkat konversi pengguna.',
    points: ['Wireframing', 'Prototyping', 'User Research', 'Visual Design']
  },
  {
    title: 'Konsultasi IT',
    icon: MessageSquareText,
    body: 'Konsultasi teknologi strategis untuk membantu bisnis Anda membuat keputusan yang tepat dan mencapai tujuan.',
    points: ['Strategy', 'Architecture', 'Security', 'Integration']
  }
]
