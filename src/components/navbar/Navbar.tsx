'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { NavRoutes } from '@/constants/NavRoutes'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'
import DomsatLogo from '../../../public/assets/images/Domsat.svg'
import ListComponent from '../ListComponent'
import { cn } from '@/lib/utils'
import ToggleDarkMode from './ThemeSwitch'
import ContactForm from '../ContactForm'

type NavListProps = {
  onClick?: () => void
  pathname: string
  isUseSheetClose?: boolean
}

const NavList = ({ onClick, pathname, isUseSheetClose = false }: NavListProps) => (
  <ListComponent
    data={NavRoutes}
    renderItem={(item) => (
      <Link
        href={item.href}
        key={item.label}
        onClick={onClick}
        className={cn(
          '',
          pathname === item.href
            ? 'before:w-[50%] after:w-[50%]'
            : 'after:duration-500 hover:after:w-[50%] before:duration-500 hover:before:w-[50%]'
        )}
      >
        {isUseSheetClose ? (
          <SheetPrimitive.Close className="w-full text-start">{item.label}</SheetPrimitive.Close>
        ) : (
          <Button variant={pathname.includes(item.href) ? 'default' : 'ghost'} className="rounded-full">
            {item.label}
          </Button>
        )}
      </Link>
    )}
  />
)

const NavSheet = ({ pathname, open, setOpen }: { pathname: string, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <Sheet defaultOpen={false}>
    <SheetTrigger className="md:hidden" asChild>
      <Button variant="ghost" size="icon">
        <AlignJustify size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-5 mt-5">
        <NavList pathname={pathname} isUseSheetClose={true} />
        <ContactForm open={open} setOpen={setOpen} />
      </div>
    </SheetContent>
  </Sheet>
)

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false)
  const pathname = usePathname()

  return (
    <header className="px-5 py-4 flex items-center justify-between">
      <div className="md:flex md:space-x-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={DomsatLogo} alt="Domsat logo" width={30} height={30} />
          <span className="text-xl font-semibold dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">Domsat</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-3">
          <NavList pathname={pathname} />
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <NavSheet pathname={pathname} open={open} setOpen={setOpen} />
        <ToggleDarkMode />
        <div className="hidden md:block">
          <ContactForm open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  )
}
