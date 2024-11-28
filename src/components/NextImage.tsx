import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  width: string | number;
  height: string | number;
} & ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  blurClassName,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete'
  );

  return (
    <figure
      style={{ width: '100%' }}
      className={className}
    >
      <Image
        className={clsx(
          imgClassName,
          'bg-gray-400 text-gray-400 ',
          status === 'loading' && clsx('animate-pulse', blurClassName)
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoad={() => setStatus('complete')}
        // onLoadingComplete={() => setStatus('complete')}
        // layout='responsive'
        {...rest}
      />
    </figure>
  );
}
