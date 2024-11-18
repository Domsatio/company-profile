'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { NavRoutes } from '@/constants/NavRoutes'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'
import DomsatLogo from '../../public/assets/images/Domsat.svg'
import ListComponent from './ListComponent'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

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
          <Button variant="ghost" className="hover:bg-gray-200 rounded-full">
            {item.label}
          </Button>
        )}
      </Link>
    )}
  />
)

const NavSheet = ({ pathname }: { pathname: string }) => (
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
      </div>
    </SheetContent>
  </Sheet>
)

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration issues
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <div>
      <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id="switch-12"
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="peer absolute dark:bg-white dark:text-dark inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
        />
        <span className="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=checked]:text-muted-foreground/70">
          <Sun size={16} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=unchecked]:text-muted-foreground/70">
          <Moon size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <Label htmlFor="switch-12" className="sr-only">
        Labeled switch
      </Label>
    </div>
  )
}

type EmailDialogProps = {
  open: boolean
  setOpen: (value: boolean) => void
}
const EmailDialog = ({ open, setOpen }: EmailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="hidden md:block rounded-full md:text-base dark:bg-white dark:text-dark">
          Let&apos;s Talk
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-dark dark:text-white">
        <DialogHeader>
          <DialogTitle>Let&apos;s Talk</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <Input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-md" />
          <Input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md" />
          <Textarea placeholder="Message" className="p-3 border border-gray-300 rounded-md" />
          <Button size="lg" className="dark:bg-white dark:text-dark">
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false)
  const pathname = usePathname()

  return (
    <header className="w-full px-5 md:px-10 py-4">
      <div className="flex items-center justify-between">
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
          <NavSheet pathname={pathname} />
          <ToggleDarkMode />
          <EmailDialog open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  )
}
