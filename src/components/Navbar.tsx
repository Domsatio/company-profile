import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { AlignJustify } from "lucide-react";
import { useSession } from "next-auth/react";
// import { ProfileMenu } from "../ProfileMenu";
import { NavRoutes } from "@/constants/NavRoutes";
import { usePathname, useSearchParams } from "next/navigation";
import LogoDomsat from "../../public/assets/images/logodomsat.png";
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
          "relative w-full inline-block text-sm font-medium md:text-lg text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 after:bottom-0 after:right-[50%]",
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
          <span>{item.label}</span>
        )}
      </Link>
    )}
  />
);

type NavSheetProps = {
  isOpen: boolean;
  handler: (data: boolean) => void;
  pathname: string;
};

const NavSheet = ({ isOpen, handler, pathname }: NavSheetProps) => (
  <Sheet defaultOpen={false}>
    <SheetTrigger className="lg:hidden" asChild>
      <Button variant="outline">
        <AlignJustify size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <SheetDescription className="flex flex-col gap-5">
        <NavList pathname={pathname} isUseSheetClose={true} />
      </SheetDescription>
    </SheetContent>
  </Sheet>
);

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  //   const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  useEffect(() => {
    setIsScrollingUp(false);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;

        if (position < 20) {
          setIsScrollingUp(false);
        } else if (position < currentPosition) {
          setIsScrollingUp(true);
        } else {
          setIsScrollingUp(false);
        }
        setCurrentPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [currentPosition]);

  return (
    <div
      //   className={`fixed left-0 right-0 max-w-full flex justify-center rounded-none transition-all duration-300 z-50 ${isScrollingUp || currentPosition < 68 ? "top-0" : "top-[-100px]"
      //     }`}
      className="w-full flex justify-center md:py-4"
    >
      <header className="container md:px-4 py-4">
        <nav className="flex items-center justify-between md:px-8 lg:px-14">
          <div className="md:flex md:space-x-5 lg:space-x-8">
            <div className="flex items-center md:space-x-2">
              <Image src={LogoDomsat} alt="Domsat" width={60} height={60} />
              <span className="text-xl font-semibold">Domsat</span>
            </div>
            <div className="hidden md:flex items-center md:px-6 xl:px-8 space-x-6 xl:space-x-8 border-l-2 border-black">
              <NavList pathname={pathname} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <NavSheet
              isOpen={isNavOpen}
              handler={setIsNavOpen}
              pathname={pathname}
            />
            <Button
              size="sm"
              className="bg-black text-white rounded-full px-4 md:px-6 h-8 md:h-10 md:text-lg mr-3 md:mr-0"
            >
              Let's Talk
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
