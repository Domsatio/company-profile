'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { NavChildrenProps, NavRoutes } from '@/constants/NavRoutes'
import { ChevronDown } from 'lucide-react'
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='fixed top-4 right-4 z-50 [&[data-state=open]>svg]:rotate-180 flex md:hidden' asChild>
        <Button className='text-xs px-3 rounded-full'>
          Menu
          <ChevronDown size={16} className='transition-transform duration-200' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className="w-56 rounded-3xl bg-background">
        <ListComponent
          data={NavRoutes}
          renderItem={(route) => (
            <DropdownMenuItem key={route.label} className='py-3'>
              {route.children ? (
                // <Accordion type="single" className='space-y-2'>
                //   <AccordionItem value={route.label}>
                //     <AccordionTrigger className='py-0'>
                //       {route.label}
                //     </AccordionTrigger>
                //     <ListComponent
                //       data={route.children}
                //       renderItem={(child: NavChildrenProps) => (
                //         <Link
                //           href={child.href}
                //           key={child.title}
                //           className='ml-3'
                //         >
                //           <AccordionContent className='px-4 text-sm md:text-base'>
                //             {child.title}
                //           </AccordionContent>
                //         </Link>
                //       )}
                //     />
                //   </AccordionItem>
                // </Accordion>
                <div className='flex flex-col gap-6'>
                  <p className='text-sm'>{route.label}</p>
                  <ListComponent
                    data={route.children}
                    renderItem={(child: NavChildrenProps) => (
                      <Link
                        href={child.href}
                        key={child.title}
                        className='ml-3'
                      >
                        {child.title}
                      </Link>
                    )}
                  />
                </div>
              ) : (
                <Link href={route.href} className='w-full'>
                  {route.label}
                </Link>
              )}
            </DropdownMenuItem>
          )}
        />
        <DropdownMenuSeparator />
        <DropdownMenuItem className='flex justify-between'>
          Dark Mode
          <ToggleDarkMode />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/contact' className='w-full'>
            <Button className="w-full rounded-full text-sm">
              Hubungi Kami
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

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

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="px-5 md:px-0 py-4 min-h-[4.25rem] flex items-center justify-between">
      <div className="md:flex md:space-x-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={DomsatLogo} alt="Domsat logo" width={30} height={30} />
          <span className="text-xl font-semibold accent">Domsat</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-3">
          <NavList pathname={pathname} />
        </nav>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <ToggleDarkMode />
        <Link href='/contact'>
          <Button size="lg" className="block rounded-full md:text-base">
            Hubungi Kami
          </Button>
        </Link>
      </div>
      <Menu />
    </header>
  )
}
