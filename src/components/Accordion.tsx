import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionProps extends React.ComponentPropsWithoutRef<"ul"> {
  children: React.ReactNode;
  value?: any;
  onChange?: (value: any) => void;
}

const AccordionContext = createContext<
  { selected: any; setSelected: (value: any) => void } | undefined
>(undefined);

export function Accordion({
  children,
  value,
  onChange,
  ...props
}: AccordionProps) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

type AccordionItemProps = {
  children: React.ReactNode;
  value: any;
  trigger: React.ReactNode;
  customTriggerIcon?: (open: boolean) => React.ReactNode;
  activeClassName?: string;
} & React.ComponentPropsWithoutRef<"li">;

export function AccordionItem({
  children,
  value,
  trigger,
  className,
  activeClassName,
  customTriggerIcon,
  ...props
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordianItem must be used within an Accordian");
  }
  const { selected, setSelected } = context;
  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li
      className={cn([
        "border-b bg-white",
        className,
        open && activeClassName,
      ])}
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        {customTriggerIcon ? (
          customTriggerIcon(open)
        ) : (
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
