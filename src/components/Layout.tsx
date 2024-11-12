import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
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
