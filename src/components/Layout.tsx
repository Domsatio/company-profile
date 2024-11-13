import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noNavPaths = ["/sign-in", "/register", "/404", "/forgot-password"];

  const isNoNavPath = noNavPaths.some(path => pathname.startsWith(path));

  if (isNoNavPath) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      {children}
      <SectionWrapper className="min-h-min lg:px-20">
        <Footer />
      </SectionWrapper>
    </div>
  );
}

interface SectionWrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const SectionWrapper = ({
  className,
  children,
  ...rest
}: SectionWrapperProps) => (
  <section className={cn(["min-h-[550px] w-full", className])} {...rest}>
    {children}
  </section>
);
