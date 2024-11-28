'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NavChildrenProps, NavRoutes } from '@/constants/NavRoutes'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'
import DomsatLogo from '../../../public/assets/images/Domsat.svg'
import ListComponent from '../ListComponent'
import { cn } from '@/lib/utils'
import ToggleDarkMode from './ThemeSwitch'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const NavList = ({ pathname }: { pathname: string }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <ListComponent
          data={NavRoutes}
          renderItem={(route) => (
            <NavigationMenuItem key={route.label}>
              {route.children ? (
                <>
                  <NavigationMenuTrigger
                    className={cn({ 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80': pathname.includes(route.href) })}
                  >
                    {route.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:grid-cols-2 w-[600px]">
                      {route.children.map((child: NavChildrenProps) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.href}
                        >
                          {child.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(),
                      { 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80': pathname.includes(route.href) })}
                  >
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          )}
        />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const SheetList = () => (
  <ListComponent
    data={NavRoutes}
    renderItem={(route) => (
      route.children ? (
        <Accordion key={route.label} type="multiple" className="w-full">
          <AccordionItem value={route.label}>
            <AccordionTrigger className='py-0 text-base font-normal'>{route.label}</AccordionTrigger>
            <ListComponent
              data={route.children}
              renderItem={(child) => (
                <AccordionContent key={child.title} className='ps-5 pt-5 pb-0'>
                  <Link
                    href={child.href}
                  >
                    {child.title}
                  </Link>
                </AccordionContent>
              )}
            />
          </AccordionItem>
        </Accordion>
      ) : (
        <Link
          href={route.href}
          key={route.label}
        >
          {route.label}
        </Link>
      )
    )}
  />
)

const NavSheet = () => (
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
        <SheetList />
        <Link href='/contact'>
          <Button size="lg" className="block rounded-full md:text-base">
            Hubungi Kami
          </Button>
        </Link>
      </div>
    </SheetContent>
  </Sheet>
)

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="px-5 md:px-0 py-4 flex items-center justify-between">
      <div className="md:flex md:space-x-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={DomsatLogo} alt="Domsat logo" width={30} height={30} />
          <span className="text-xl font-semibold accent">Domsat</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-3">
          <NavList pathname={pathname} />
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <NavSheet />
        <ToggleDarkMode />
        <Link href='/contact' className="hidden md:block">
          <Button size="lg" className="block rounded-full md:text-base">
            Hubungi Kami
          </Button>
        </Link>
      </div>
    </header>
  )
}
