import clsx from 'clsx';
import * as React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';

type TooltipTextProps = {
  tipChildren?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TippyProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

export default function Tooltip({
  tipChildren,
  children,
  className,
  spanClassName,
  withUnderline = false,
  offset = [0, 10], // Provide a tuple for the offset
  ...rest
}: TooltipTextProps) {
  return (
    <Tippy
      content={
        <div
          className={clsx(
            className,
            'inline-block rounded-md bg-white p-2 text-gray-600 shadow-md dark:bg-dark dark:text-gray-200',
            'border dark:border-gray-600'
          )}
        >
          {tipChildren}
        </div>
      }
      interactive
      offset={offset} // Pass the offset as a tuple here
      {...rest}
    >
      {withUnderline ? (
        <span
          className={clsx(spanClassName, 'underline')}
          style={{ textDecorationStyle: 'dotted' }}
        >
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </Tippy>
  );
}
