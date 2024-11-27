import { Services } from '@/constants/Services'

export type NavChildrenProps = {
  title: string
  href: string
  description: string
}

export type NavRoutesProps = {
  label: string
  href?: string
  children?: NavChildrenProps[]
}

export const NavRoutes: NavRoutesProps[] = [
  {
    label: 'Layanan',
    children: Services.map((service) => ({
      title: service.title,
      href: `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
      description: service.body
    }))
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Tentang Kami',
    href: '/about'
  }
]
