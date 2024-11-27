import { SiInstagram, SiLinkedin, SiX } from 'react-icons/si'

export type FooterLinkProps = {
  label: string
  href: string
}

export type ListFooterLinkProps = {
  Tautan: FooterLinkProps[]
  Bantuan: FooterLinkProps[]
  Perusahaan: FooterLinkProps[]
}

export const ListFooterLink: ListFooterLinkProps = {
  Tautan: [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Hubungi Kami', href: '/contact' }
  ],
  Bantuan: [
    { label: 'Syarat & Ketentuan', href: '/terms-and-conditions' },
    { label: 'Kebijakan Privasi', href: '/privacy-policy' }
  ],
  Perusahaan: [
    { label: 'Karir', href: '/career' }
    // { label: 'Pricing', href: '/pricing' }
  ]
}

export type FooterSectionProps = {
  title: keyof ListFooterLinkProps
  links: FooterLinkProps[]
}

type SocialLinkProps = {
  href: string
  icon: React.ElementType
  label: string
}

export const socialLinks: SocialLinkProps[] = [
  { href: 'https://www.instagram.com/domsat.id/', icon: SiInstagram, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: SiLinkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: SiX, label: 'X' }
]
