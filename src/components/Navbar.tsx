import { useState } from 'react';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { FkiLogo } from './FkiLogo';
import { playClickSound, setSoundEnabled } from '../utils/audio';

export function Navbar() {
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    setSoundEnabled(!next);
    if (!next) {
      playClickSound();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#092955]/85 border-b border-sky-400/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark & Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
          onClick={() => playClickSound()}
        >
          <FkiLogo size="sm" rounded="full" className="group-hover:rotate-6 transition-transform" />
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              FLYING KETAMINE INU
            </span>
            <span className="font-mono text-xs font-bold text-amber-300">
              {TOKEN_CONFIG.ticker}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-sky-100">
          <a
            href="#key-vault"
            onClick={() => playClickSound()}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            The Public Key
          </a>
          <a
            href="#lore"
            onClick={() => playClickSound()}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            The Lore
          </a>
          <a
            href="#flight-stats"
            onClick={() => playClickSound()}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Flight Altitude
          </a>
          <a
            href="#chart"
            onClick={() => playClickSound()}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Live Chart
          </a>
        </nav>

        {/* Zone 3: CTA Button + Sound Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleSound}
            title={muted ? 'Unmute sounds' : 'Mute sounds'}
            aria-label={muted ? 'Unmute audio cues' : 'Mute audio cues'}
            className="p-2 text-sky-200 hover:text-white rounded-lg hover:bg-sky-800/50 transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
          </button>

          <a
            href={TOKEN_CONFIG.links.pumpFun}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-md shadow-amber-400/30 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Buy on Pump.fun</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
