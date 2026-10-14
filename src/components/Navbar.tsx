import { useState } from 'react';
import { Volume2, VolumeX, Key, ArrowUpRight } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { FkiLogo } from './FkiLogo';
import { playClickSound, setSoundEnabled } from '../utils/audio';

interface NavbarProps {
  onNotify?: (title: string, desc: string) => void;
}

export function Navbar({}: NavbarProps) {
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#070e1c]/80 border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
          onClick={() => playClickSound()}
        >
          <FkiLogo size="sm" rounded="xl" className="group-hover:scale-105 transition-transform" />
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              FLYING KETAMINE INU
            </span>
            <span className="font-mono text-xs font-semibold text-amber-400">
              {TOKEN_CONFIG.ticker}
            </span>
          </div>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#key-vault"
            onClick={() => playClickSound()}
            className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
          >
            The Vault
          </a>
          <a
            href="#lore"
            onClick={() => playClickSound()}
            className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
          >
            The Lore
          </a>
          <a
            href="#anarchy"
            onClick={() => playClickSound()}
            className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
          >
            Dev Terminal
          </a>
          <a
            href="#tokenomics"
            onClick={() => playClickSound()}
            className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
          >
            Tokenomics
          </a>
          <a
            href="#chart"
            onClick={() => playClickSound()}
            className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
          >
            Live Chart
          </a>
        </nav>

        {/* Zone 3: 1 Primary action + Audio toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleSound}
            title={muted ? 'Unmute sounds' : 'Mute sounds'}
            aria-label={muted ? 'Unmute audio cues' : 'Mute audio cues'}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
          </button>

          <a
            href={TOKEN_CONFIG.links.pumpFun}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-lg shadow-amber-400/20 transition-all hover:shadow-amber-400/30 whitespace-nowrap shrink-0"
          >
            <span>Buy on Pump.fun</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
