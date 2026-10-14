import { useState } from 'react';

interface FkiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  rounded?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
}

export function FkiLogo({ className = '', size = 'md', rounded = 'xl' }: FkiLogoProps) {
  const [imgSrc, setImgSrc] = useState('/fkilogo.jpg');
  const [fallbackTried, setFallbackTried] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    hero: 'w-full max-w-md aspect-square'
  }[size];

  const roundedClasses = {
    full: 'rounded-full',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    none: 'rounded-none'
  }[rounded];

  const handleImageError = () => {
    if (!fallbackTried) {
      setFallbackTried(true);
      // Fallback to the generated low-poly Shiba hero asset if /fkilogo.jpg isn't loaded yet
      setImgSrc('/src/assets/images/fki_hero_flying_1791981980677.jpg');
    }
  };

  return (
    <div className={`relative overflow-hidden inline-flex items-center justify-center shrink-0 border border-sky-400/30 bg-slate-900 shadow-md ${sizeClasses} ${roundedClasses} ${className}`}>
      <img
        src={imgSrc}
        alt="Flying Ketamine Inu ($FKI) Logo"
        onError={handleImageError}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover select-none"
      />
    </div>
  );
}
