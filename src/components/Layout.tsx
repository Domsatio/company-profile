import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import BackToTop from "./BackToTop";

interface SectionWrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const SectionWrapper = ({
  className,
  children,
  ...rest
}: SectionWrapperProps) => (
  <section className={cn(["px-5 md:px-0 py-10 md:py-20 gap-4 md:gap-8", className])} {...rest}>
    {children}
  </section>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mx-auto max-w-3xl xl:max-w-5xl">
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}