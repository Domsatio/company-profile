import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const SectionWrapper = ({
  className,
  children,
  ...rest
}: SectionWrapperProps) => (
  <section className={cn(["w-full", className])} {...rest}>
    {children}
  </section>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="w-full md:px-10">
        {children}
      </main>
      <SectionWrapper className="mt-10 md:px-10">
        <Footer />
      </SectionWrapper>
    </div>
  );
}