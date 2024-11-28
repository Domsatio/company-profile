import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span className={clsx('transition-colors accent-highlight', className)}>
      {children}
    </span>
  );
}
