import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export default function TOCLink({
  id,
  level,
  minLevel,
  text,
  activeSection,
}: TOCLinkProps) {
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={clsx(
        'font-normal hover:text-foreground focus:outline-none',
        {
          'text-foreground': activeSection === id,
          'text-foreground/50': activeSection !== id
        }
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  );
}
