import * as React from 'react';
import TOCLink from '@/components/links/TOCLink';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { TableOfContentsIcon } from 'lucide-react';

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

type TableOfContentsProps = {
  toc?: HeadingScrollSpy;
  activeSection: string | null;
  minLevel: number;
};

export const TOCDrawer = ({ toc, activeSection, minLevel }: TableOfContentsProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <Drawer>
      <DrawerTrigger className='fixed bottom-4 right-20 z-50 block lg:hidden' asChild>
        <Button
          className={cn(
            "fixed w-12 h-12 rounded-full transition-opacity duration-200",
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <TableOfContentsIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Daftar Isi</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 flex flex-col space-y-2 overflow-auto max-h-[calc(80vh)] text-sm">
          <TableOfContents toc={toc} minLevel={minLevel} activeSection={activeSection} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default function TableOfContents({
  toc,
  activeSection,
  minLevel,
}: TableOfContentsProps) {
  //#region  //*=========== Scroll into view ===========
  const lastPosition = React.useRef<number>(0);

  React.useEffect(() => {
    const container = document.getElementById('toc-container');
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [activeSection]);
  //#endregion  //*======== Scroll into view ===========

  return (
    <div
      id='toc-container'
      className='max-h-[calc(100vh-9rem-113px)] overflow-auto lg:border lg:px-6 lg:rounded-xl lg:py-5'
    >
      <div className='flex flex-col space-y-2'>
        {toc
          ? toc.map(({ id, level, text }) => (
            <TOCLink
              id={id}
              key={id}
              activeSection={activeSection}
              level={level}
              minLevel={minLevel}
              text={text}
            />
          ))
          : null}
      </div>
    </div>
  );
}
