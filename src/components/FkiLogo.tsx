import { useState } from 'react';

interface FkiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  rounded?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
}

export function FkiLogo({ className = '', size = 'md', rounded = 'xl' }: FkiLogoProps) {
  const [loadError, setLoadError] = useState(false);

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
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

  return (
    <div className={`relative overflow-hidden inline-flex items-center justify-center shrink-0 border-2 border-white/30 bg-gradient-to-b from-sky-400 to-blue-600 shadow-xl ${sizeClasses} ${roundedClasses} ${className}`}>
      {!loadError ? (
        <img
          src="/fkilogo.jpg"
          alt="Flying Ketamine Inu ($FKI)"
          onError={() => setLoadError(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none"
        />
      ) : (
        /* Fallback SVG when fkilogo.jpg is being loaded */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-blue-600 text-white p-2 select-none">
          <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 drop-shadow-md" fill="none">
            {/* Geometric Wing Left */}
            <path d="M 50 45 L 15 25 L 30 50 L 50 50 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <path d="M 15 25 L 5 20 L 20 40 Z" fill="#CBD5E1" />
            {/* Geometric Wing Right */}
            <path d="M 50 45 L 85 25 L 70 50 L 50 50 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <path d="M 85 25 L 95 20 L 80 40 Z" fill="#CBD5E1" />
            {/* Doge Head / Body */}
            <polygon points="50,25 35,45 65,45" fill="#F59E0B" />
            <polygon points="35,45 28,30 38,35" fill="#D97706" />
            <polygon points="65,45 72,30 62,35" fill="#D97706" />
            {/* Face details */}
            <polygon points="50,45 42,60 58,60" fill="#FEF3C7" />
            <circle cx="43" cy="48" r="2.5" fill="#1E293B" />
            <circle cx="57" cy="48" r="2.5" fill="#1E293B" />
            <polygon points="50,53 47,56 53,56" fill="#1E293B" />
            {/* Silly Tongue */}
            <path d="M 48 57 C 48 64 52 64 52 57 Z" fill="#F43F5E" />
            {/* Body */}
            <polygon points="42,60 58,60 55,80 45,80" fill="#F59E0B" />
            {/* Syringe emblem */}
            <rect x="52" y="65" width="18" height="4" rx="1" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" transform="rotate(-15 52 65)" />
            <rect x="54" y="66" width="7" height="2" fill="#FACC15" transform="rotate(-15 52 65)" />
          </svg>
          <span className="font-mono text-[10px] font-bold tracking-wider text-amber-300">
            $FKI
          </span>
        </div>
      )}
    </div>
  );
}
