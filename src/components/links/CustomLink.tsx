import { cn } from '@/lib/utils';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={cn(
        'animated-underline custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'border-b border-dotted border-[#0e1111] hover:border-[#0e1111]/0',
        'dark:border-gray-200 dark:hover:border-gray-200/0',
        className
      )}
    >
      <span className='accent'>
        {children}
      </span>
    </UnstyledLink>
  );
}
