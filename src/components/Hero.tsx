import { useState } from 'react';
import { Copy, Check, ExternalLink, Zap, Key, Wind, ShieldCheck } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { FkiLogo } from './FkiLogo';
import { playClickSound, playSuccessChime } from '../utils/audio';

interface HeroProps {
  onNotify: (title: string, desc: string) => void;
}

export function Hero({ onNotify }: HeroProps) {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
      setCopiedCA(true);
      playSuccessChime();
      onNotify('Contract Address Copied', 'Paste into Phantom, Jupiter, or Raydium to swap.');
      setTimeout(() => setCopiedCA(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-14 lg:pb-24 sky-bg border-b border-sky-400/20">
      
      {/* Drifting Clouds in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sun Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/20 rounded-full blur-[90px]" />
        
        {/* Animated Background Clouds */}
        <div className="cloud-drift-1 absolute top-12 -left-20 w-[420px] h-[130px] rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="cloud-drift-2 absolute top-44 -right-16 w-[500px] h-[160px] rounded-full bg-white/15 blur-2xl pointer-events-none" />
        <div className="cloud-drift-1 absolute bottom-8 left-1/4 w-[600px] h-[180px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Marquee Banner / Sky Kicker */}
        <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-amber-300 mb-6 font-mono">
          <Wind className="w-4 h-4 text-sky-200 animate-pulse" />
          <span>Ascended Flight on Solana</span>
          <span aria-hidden="true" className="text-sky-300/60">/</span>
          <span>From the Creator of Flying Ketamine Horse ($25M+)</span>
          <span aria-hidden="true" className="text-sky-300/60">/</span>
          <span className="text-white">$FKI</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Meme Headlines, Premise, Quick Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.04] mb-6 uppercase text-balance drop-shadow-md">
              FLYING KETAMINE INU
            </h1>

            <p className="text-lg sm:text-xl text-sky-100 font-medium leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
              The low-poly winged Shiba has taken flight in the Solana stratosphere.
              After someone trusted with deployer access (Nico) farmed and rugged, the creator gave the private key directly to the entire community.
              No single owner. Everyone holds the keys.
            </p>

            {/* Contract Address Box (Clean Meme Card) */}
            <div className="p-4 rounded-2xl bg-[#082852]/85 border-2 border-sky-300/40 shadow-2xl mb-8 max-w-2xl backdrop-blur-md">
              <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-sky-200 font-semibold">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <ShieldCheck className="w-4 h-4" />
                  OFFICIAL SOLANA CONTRACT ADDRESS
                </span>
                <span className="text-sky-300">Pump.fun</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 px-3 py-2.5 rounded-xl bg-slate-950/90 border border-sky-400/30 font-mono text-xs sm:text-sm text-amber-300 font-bold truncate select-all">
                  {TOKEN_CONFIG.contractAddress}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyCA}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-400/20"
                  >
                    {copiedCA ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-700" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy CA</span>
                      </>
                    )}
                  </button>
                  <a
                    href={TOKEN_CONFIG.links.dexScreener}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    className="p-2.5 text-sky-200 hover:text-white bg-sky-900/60 hover:bg-sky-800/80 rounded-xl border border-sky-400/30 transition-colors"
                    title="View on DexScreener"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={TOKEN_CONFIG.links.pumpFun}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-2xl shadow-xl shadow-amber-400/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Trade on Pump.fun</span>
                <Zap className="w-4 h-4" />
              </a>

              <a
                href="#key-vault"
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-black uppercase tracking-wider text-white bg-sky-900/80 hover:bg-sky-800/80 border-2 border-sky-300/40 rounded-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
              >
                <Key className="w-4 h-4 text-amber-300" />
                <span>Get Communal Key</span>
              </a>
            </div>

          </div>

          {/* Right Column: Flying Ketamine Inu Mascot in the Clouds */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md float-animation">
              
              {/* Outer Cloud Halo */}
              <div className="absolute -inset-4 bg-gradient-to-t from-sky-300/30 via-white/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Main Mascot Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#1a62be] to-[#0c3670] border-4 border-white/40 p-4 shadow-2xl overflow-hidden group">
                
                {/* Mascot Frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600 border-2 border-white/30 shadow-inner flex items-center justify-center">
                  <FkiLogo size="hero" rounded="none" className="border-0 shadow-none bg-transparent" />
                  
                  {/* Floating Flight Speed Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm border border-white/20 text-[11px] font-mono font-bold text-amber-300 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-sky-300" />
                    <span>Flight: 30,000 FT</span>
                  </div>

                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm border border-white/20 text-[11px] font-mono font-bold text-emerald-300">
                    Rug Proof
                  </div>

                  {/* Scrim Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex items-end justify-between">
                    <div>
                      <div className="font-black text-white text-xl tracking-tight leading-tight">
                        FLYING KETAMINE INU
                      </div>
                      <div className="text-xs text-amber-300 font-mono font-semibold">
                        Ticker: $FKI · Solana
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs font-bold text-sky-200">
                      $25M+ Pedigree
                    </div>
                  </div>
                </div>

                {/* Meme Flight Stats under mascot */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-sky-400/30">
                    <div className="text-sky-300 text-[10px] uppercase font-bold">Supply</div>
                    <div className="text-white font-extrabold tabular-nums">1.00B</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-sky-400/30">
                    <div className="text-sky-300 text-[10px] uppercase font-bold">Tax</div>
                    <div className="text-emerald-300 font-extrabold">0% / 0%</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-sky-400/30">
                    <div className="text-sky-300 text-[10px] uppercase font-bold">Deployer</div>
                    <div className="text-amber-300 font-extrabold">Public</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof Row */}
        <div className="mt-16 pt-8 border-t border-sky-400/25 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-400/20">
            <div className="text-xs text-sky-200 uppercase font-mono font-bold mb-1">Predecessor Run</div>
            <div className="text-xl font-black text-amber-300 tracking-tight">FK Horse ($25M+)</div>
            <div className="text-xs text-sky-100 mt-0.5">Proven legendary runner lore</div>
          </div>
          <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-400/20">
            <div className="text-xs text-sky-200 uppercase font-mono font-bold mb-1">Deployer Custody</div>
            <div className="text-xl font-black text-white tracking-tight">Shared Keypair</div>
            <div className="text-xs text-sky-100 mt-0.5">Nico completely bypassed</div>
          </div>
          <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-400/20">
            <div className="text-xs text-sky-200 uppercase font-mono font-bold mb-1">Smart Contract</div>
            <div className="text-xl font-black text-emerald-300 tracking-tight">Authorities Revoked</div>
            <div className="text-xs text-sky-100 mt-0.5">Mint & Freeze cannot be altered</div>
          </div>
          <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-400/20">
            <div className="text-xs text-sky-200 uppercase font-mono font-bold mb-1">Blockchain</div>
            <div className="text-xl font-black text-sky-300 tracking-tight">Solana High-Speed</div>
            <div className="text-xs text-sky-100 mt-0.5">Lightning-fast meme transactions</div>
          </div>
        </div>

      </div>
    </section>
  );
}
