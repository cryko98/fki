import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { TOKEN_CONFIG } from '../types';
import { FkiLogo } from './FkiLogo';
import { playSuccessChime } from '../utils/audio';

interface FooterProps {
  onNotify: (title: string, desc: string) => void;
}

export function Footer({ onNotify }: FooterProps) {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
      setCopiedCA(true);
      playSuccessChime();
      onNotify('CA Copied', 'Solana contract address copied to clipboard.');
      setTimeout(() => setCopiedCA(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <footer className="py-12 bg-[#040e1e] border-t border-sky-400/20 text-sky-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-sky-400/15">
          <div className="flex items-center gap-3">
            <FkiLogo size="sm" rounded="full" />
            <div>
              <div className="text-white font-black text-sm uppercase tracking-tight">
                FLYING KETAMINE INU ($FKI)
              </div>
              <div className="font-mono text-[11px] text-amber-300">
                Solana Communal Key Experiment
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-sky-300 hidden sm:inline">CA:</span>
            <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-sky-400/30 font-mono text-[11px] text-amber-300 select-all truncate max-w-xs font-bold">
              {TOKEN_CONFIG.contractAddress}
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 text-sky-200 hover:text-white bg-sky-900 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer border border-sky-400/30"
              title="Copy CA"
            >
              {copiedCA ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] leading-relaxed text-sky-300/80">
          <p className="max-w-3xl">
            Disclaimer: Flying Ketamine Inu ($FKI) is a community-driven cryptocurrency meme token on the Solana blockchain.
            The deployer private key has been released publicly to the community.
            This project has no centralized corporate leadership. Cryptocurrency trading involves substantial market risk.
          </p>

          <div className="whitespace-nowrap font-mono shrink-0 text-amber-300 font-bold">
            &copy; 2026 $FKI Community. All keys public.
          </div>
        </div>

      </div>
    </footer>
  );
}
