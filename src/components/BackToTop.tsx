"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-5 md:bottom-10 md:right-10 w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer transition-opacity duration-200",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
      asChild
    >
      <ChevronUp />
    </Button>
  );
}