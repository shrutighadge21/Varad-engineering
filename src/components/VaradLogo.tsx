import React from 'react';
import Image from 'next/image';

interface VaradLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  theme?: 'light' | 'dark' | 'auto';
  variant?: 'full' | 'symbol' | 'horizontal';
  showText?: boolean;
  priority?: boolean;
}

export default function VaradLogo({
  className = '',
  size = 'md',
  priority = true
}: VaradLogoProps) {
  // Dimensions for the exact transparent logo PNG
  const sizeMap = {
    sm: { height: 38, width: 45 },
    md: { height: 48, width: 57 },
    lg: { height: 60, width: 71 },
    xl: { height: 80, width: 95 },
    hero: { height: 96, width: 114 }
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center justify-center flex-shrink-0 select-none ${className}`}>
      <Image
        src="/images/varad-logo-original.png"
        alt="Varad Engineering Logo"
        width={dim.width}
        height={dim.height}
        priority={priority}
        className="h-auto w-auto object-contain max-h-[52px]"
      />
    </div>
  );
}
