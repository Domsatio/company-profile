'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { AlignJustify } from "lucide-react";
import { NavRoutes } from "@/constants/NavRoutes";
import { usePathname } from "next/navigation";
import DomsatLogo from "../../public/assets/images/Domsat.svg";
import ListComponent from "./ListComponent";
import { cn } from "@/lib/utils";

type NavListProps = {
  onClick?: () => void;
  pathname: string;
  isUseSheetClose?: boolean;
};

const NavList = ({
  onClick,
  pathname,
  isUseSheetClose = false,
}: NavListProps) => (
  <ListComponent
    data={NavRoutes}
    renderItem={(item) => (
      <Link
        href={item.href}
        key={item.label}
        onClick={onClick}
        className={cn(
          "",
          pathname === item.href
            ? "before:w-[50%] after:w-[50%]"
            : "after:duration-500 hover:after:w-[50%] before:duration-500 hover:before:w-[50%]"
        )}
      >
        {isUseSheetClose ? (
          <SheetPrimitive.Close className="w-full text-start">
            {item.label}
          </SheetPrimitive.Close>
        ) : (
          <Button variant='ghost' className="hover:bg-gray-200 rounded-full">
            {item.label}
          </Button>
        )}
      </Link>
    )}
  />
);

const NavSheet = ({ pathname }: {
  pathname: string;
}) => (
  <Sheet defaultOpen={false}>
    <SheetTrigger className="md:hidden" asChild>
      <Button variant="outline" size='lg' className="rounded-full">
        <AlignJustify size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-5 mt-5">
        <NavList pathname={pathname} isUseSheetClose={true} />
      </div>
    </SheetContent>
  </Sheet>
);

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full md:px-10 py-4">
      <div className="flex items-center justify-between">
        <div className="md:flex md:space-x-8">
          <Link href="/" className="flex items-center md:space-x-3">
            <Image src={DomsatLogo} alt="Domsat logo" width={30} height={30} />
            <span className="text-xl font-semibold">Domsat</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-3">
            <NavList pathname={pathname} />
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <NavSheet pathname={pathname} />
          <Button size='lg' className="rounded-full md:text-base">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </header>
  );
}
