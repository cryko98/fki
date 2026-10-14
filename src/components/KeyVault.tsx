import { useState } from 'react';
import { Key, Eye, EyeOff, Copy, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound, playSuccessChime } from '../utils/audio';

interface KeyVaultProps {
  onNotify: (title: string, desc: string) => void;
}

export function KeyVault({ onNotify }: KeyVaultProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyKey = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_CONFIG.privateKey);
      setCopied(true);
      playSuccessChime();
      onNotify('Deployer Private Key Copied', 'Import this key into Phantom or Solflare to hold communal access.');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const maskedKey = '•'.repeat(48) + ' ' + TOKEN_CONFIG.privateKey.slice(-8);

  return (
    <section id="key-vault" className="py-20 lg:py-28 relative bg-[#071d3d] border-b border-sky-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 font-mono">
            <Key className="w-4 h-4 text-amber-400" />
            <span>The Anti-Nico Retaliation</span>
            <span aria-hidden="true" className="text-sky-400/40">/</span>
            <span>All Holders Empowered</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase text-balance">
            THE SHARED PRIVATE KEY
          </h2>
          <p className="mt-4 text-sky-100 text-base sm:text-lg leading-relaxed">
            Nico was not a dev. He was someone who was trusted with deployer access and abused it to farm and rug.
            To put an end to the madness once and for all, the creator released the private key to the entire internet.
          </p>
        </div>

        {/* Master Key Card (Bright Meme Framing) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0e3b79] to-[#08244d] border-3 border-amber-400/50 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-400/25">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border-2 border-amber-400/50 flex items-center justify-center text-amber-300">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-black text-white tracking-tight">
                  SOLANA DEPLOYER KEYPAIR (BASE58)
                </div>
                <div className="text-xs text-sky-200 font-mono">
                  Full 64-byte Solana secret key · 88 characters
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playClickSound();
                  setRevealed(!revealed);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-sky-100 hover:text-white bg-sky-900/80 hover:bg-sky-800 rounded-xl transition-colors cursor-pointer border border-sky-400/30"
              >
                {revealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{revealed ? 'Conceal' : 'Reveal Key'}</span>
              </button>

              <button
                onClick={handleCopyKey}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-lg shadow-amber-400/25 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Key' : 'Copy Key'}</span>
              </button>
            </div>
          </div>

          {/* Key Box */}
          <div className="mt-6 p-5 rounded-2xl bg-slate-950/90 border-2 border-sky-400/30 font-mono text-sm sm:text-base leading-relaxed break-all select-all">
            <div className="text-xs text-sky-300 mb-2 font-bold uppercase tracking-wider flex items-center justify-between">
              <span>Deployer Secret Key String</span>
              <span className="text-amber-300 text-xs">Public to all</span>
            </div>
            <div className={`font-mono font-bold transition-all ${revealed ? 'text-amber-300' : 'text-slate-400'}`}>
              {revealed ? TOKEN_CONFIG.privateKey : maskedKey}
            </div>
          </div>

          {/* Meme Callout */}
          <div className="mt-6 p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong>Zero Single Point of Failure:</strong> Because this key belongs to the whole community, no rogue actor can blackmail holders or hijack the project again.
            </span>
          </div>

          {/* 3 Simple Steps to Import */}
          <div className="mt-10 pt-8 border-t border-sky-400/20">
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">
              How to Import in 30 Seconds
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-sky-950/50 border border-sky-400/30">
                <div className="text-xs font-mono font-bold text-amber-400 mb-1">STEP 1</div>
                <div className="text-sm font-bold text-white mb-1">Hit Copy Key</div>
                <p className="text-xs text-sky-200 leading-normal">
                  Click the button above to copy the full 88-character Solana private key string into your clipboard.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-950/50 border border-sky-400/30">
                <div className="text-xs font-mono font-bold text-amber-400 mb-1">STEP 2</div>
                <div className="text-sm font-bold text-white mb-1">Open Phantom / Solflare</div>
                <p className="text-xs text-sky-200 leading-normal">
                  Go to Accounts &gt; Add / Connect Wallet &gt; select "Import Private Key".
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-950/50 border border-sky-400/30">
                <div className="text-xs font-mono font-bold text-amber-400 mb-1">STEP 3</div>
                <div className="text-sm font-bold text-white mb-1">Communal Custody</div>
                <p className="text-xs text-sky-200 leading-normal">
                  Paste the key. You now hold identical custody rights with the original creator. We are all the dev!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
