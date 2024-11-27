import { Expand, Rocket, Star, Users } from 'lucide-react'

export type WhyUsProps = {
  id: number
  title: string
  description: string
  icon: React.ElementType
}

export const WhyUs: WhyUsProps[] = [
  {
    id: 1,
    title: 'Tim Terampil',
    description:
      'Tim kami yang terdiri dari pengembang dan konsultan TI yang terampil menggabungkan keahlian teknis dengan komitmen terhadap keunggulan. Kami membangun hubungan jangka panjang melalui transparansi, keandalan, dan layanan terbaik.',
    icon: Users
  },
  {
    id: 2,
    title: 'Solusi Inovatif',
    description:
      'Kami mengkhususkan diri dalam menciptakan perangkat lunak kustom dan solusi TI yang selaras sempurna dengan tujuan bisnis Anda. Pendekatan inovatif kami memastikan bahwa teknologi Anda berkembang sesuai dengan kebutuhan Anda.',
    icon: Rocket
  },
  {
    id: 3,
    title: 'Skalabilitas',
    description:
      'Solusi kami dibangun untuk tumbuh bersama bisnis Anda. Apakah Anda sedang memperluas tim, meluncurkan produk baru, atau memasuki pasar baru, sistem kami dirancang untuk menangani kebutuhan Anda yang terus berkembang dengan lancar.',
    icon: Expand
  },
  {
    id: 4,
    title: 'Personalisasi',
    description:
      'Kami memahami bahwa setiap bisnis itu unik. Itulah mengapa kami meluangkan waktu untuk mendengarkan, menganalisis, dan memberikan strategi serta teknologi yang disesuaikan yang selaras sempurna dengan tujuan spesifik Anda.',
    icon: Star
  }
]
