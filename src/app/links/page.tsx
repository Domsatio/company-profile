import { SectionWrapper } from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import Domsat from '../../../public/assets/images/Domsat.svg'
import Link from 'next/link'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import { Mail } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Link | Domsat - Crafted with Passion and Precision',
  description: 'Link | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

const links: {
  title: string
  url: string
}[] = [
    {
      title: 'Website',
      url: 'https://www.domsat.co.id/',
    },
    {
      title: 'INAPROC',
      url: 'https://katalog.inaproc.id/domsat-solutechno-global',
    },
  ]

const contacts: {
  title: string
  url: string
  icon: React.ElementType
}[] = [
    {
      title: 'Email',
      url: 'mailto:domsattech@gmail.com',
      icon: Mail
    },
    {
      title: 'Whatsapp',
      url: 'https://wa.me/6281450261540',
      icon: SiWhatsapp
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/domsat.id',
      icon: SiInstagram
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/domsat',
      icon: SiLinkedin
    },
  ]

const Links = () => {
  return (
    <SectionWrapper className='md:px-20 lg:px-40 xl:px-56 space-y-8'>
      <div className='flex flex-col items-center'>
        <div className='rounded-full flex items-center justify-center bg-primary py-6 ps-7 pe-5 w-24 h-24 mb-4'>
          <Image
            src={Domsat}
            alt="Domsat"
            width={40}
            height={40}
          />
        </div>
        <h1 className="text-lg font-bold">
          PT. Domsat Solutechno Global
        </h1>
        <h2 className="text-sm font-medium mt-1">
          Crafted with Passion and Precision
        </h2>
      </div>
      <div className='flex flex-col gap-4'>
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            target='_blank'
            className="text-sm font-medium p-4 border border-border hover:bg-primary hover:text-background transition-colors rounded-full text-center"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {contacts.map((contact) => (
          <Link
            key={contact.title}
            href={contact.url}
            target='_blank'
            className='hover:scale-110 transition-transform'
          >
            <contact.icon size={24} />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Links