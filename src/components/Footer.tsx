import { Key, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { TOKEN_CONFIG } from '../types';
import { FkiLogo } from './FkiLogo';
import { playClickSound, playSuccessChime } from '../utils/audio';

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
    <footer className="py-12 bg-[#050811] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <FkiLogo size="sm" rounded="lg" />
            <div>
              <div className="text-white font-black text-sm tracking-tight">
                FLYING KETAMINE INU ($FKI)
              </div>
              <div className="font-mono text-[11px] text-slate-400">
                Solana Communal Deployer Experiment
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">CA:</span>
            <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-amber-300 select-all truncate max-w-xs">
              {TOKEN_CONFIG.contractAddress}
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
              title="Copy CA"
            >
              {copiedCA ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Disclaimer & Legal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] leading-relaxed text-slate-400">
          <p className="max-w-3xl">
            Disclaimer: Flying Ketamine Inu ($FKI) is a community-driven cryptocurrency meme token launched on the Solana blockchain.
            The original deployer private key has been released publicly to the community.
            This project has no centralized corporate leadership or formal roadmap. Cryptocurrency assets are subject to market volatility.
          </p>

          <div className="whitespace-nowrap font-mono shrink-0">
            &copy; 2026 $FKI Community. All keys shared.
          </div>
        </div>

      </div>
    </footer>
  );
}
