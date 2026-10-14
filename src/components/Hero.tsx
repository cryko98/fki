import { useState } from 'react';
import { Copy, Check, ExternalLink, Key, ShieldCheck, Zap } from 'lucide-react';
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
      onNotify('Contract Address Copied', 'Paste into Phantom, Raydium, or Jupiter to swap.');
      setTimeout(() => setCopiedCA(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-sky-500/15">
      {/* Background Cloud Atmosphere & Lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center mix-blend-screen"
        style={{ backgroundImage: `url('/src/assets/images/fki_sky_clouds_banner_1791981980612.jpg')` }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Lore Premise, Contract Address */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
              <span>Solana Fair Launch</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>100% Communal Deployer</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-amber-400">$FKI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6 text-balance">
              FLYING KETAMINE INU
            </h1>

            {/* Subtitle / Core Hook */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Almost a year ago, Flying Ketamine Horse ran to $25M+. After rogue dev Nico rugged twice, the deployer private key was given to everyone.
              No single dev in control. We are all the dev.
            </p>

            {/* Interactive Contract Address Bar */}
            <div className="p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-sky-400/25 shadow-xl shadow-sky-950/40 mb-8 max-w-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-slate-400">
                <span className="text-sky-300 font-semibold tracking-wide">SOLANA CONTRACT ADDRESS</span>
                <span className="text-slate-400">Pump.fun Bonding Curve</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs sm:text-sm text-amber-300 font-medium truncate select-all">
                  {TOKEN_CONFIG.contractAddress}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyCA}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedCA ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
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
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors"
                    title="View on DexScreener"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={TOKEN_CONFIG.links.pumpFun}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
              >
                <span>Instant Trade on Pump.fun</span>
                <Zap className="w-4 h-4" />
              </a>

              <a
                href="#key-vault"
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-slate-800/90 hover:bg-slate-700/90 border border-sky-400/30 rounded-xl transition-colors cursor-pointer"
              >
                <Key className="w-4 h-4 text-sky-400" />
                <span>Access Communal Key</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Low-Poly Shiba Showcase with sky framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer sky glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500 to-amber-400 rounded-3xl opacity-30 blur-xl" />

              <div className="relative rounded-2xl bg-[#09152a] border border-sky-400/30 p-4 shadow-2xl overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-500/15">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs text-slate-300 font-semibold tracking-wide uppercase">
                      Ascended Low-Poly Inu
                    </span>
                  </div>
                  <span className="font-mono text-xs text-sky-400 font-bold">
                    $25M+ Pedigree
                  </span>
                </div>

                {/* Main 3D Artwork frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-b from-sky-400 to-blue-600 border border-sky-300/30">
                  <img
                    src="/fkilogo.jpg"
                    alt="Flying Ketamine Inu ($FKI)"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/src/assets/images/fki_hero_flying_1791981980677.jpg';
                    }}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle lower scrim */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between">
                    <div>
                      <div className="font-extrabold text-white text-lg tracking-tight">
                        FLYING KETAMINE INU
                      </div>
                      <div className="text-xs text-slate-300 font-mono">
                        Ticker: $FKI · Solana
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs font-bold text-amber-300">
                      Zero Rug Risk
                    </div>
                  </div>
                </div>

                {/* Micro info strip */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center pt-1 font-mono text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase">Supply</div>
                    <div className="text-white font-bold tabular-nums">1.00B</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase">Tax</div>
                    <div className="text-emerald-400 font-bold">0% / 0%</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase">Keys</div>
                    <div className="text-sky-400 font-bold">Shared</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Reality Strip (Full-width row below hero split) */}
        <div className="mt-16 pt-8 border-t border-sky-500/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xs text-slate-400 uppercase font-mono mb-1">Original Token</div>
            <div className="text-xl font-bold text-white tracking-tight">FK Horse ($25M+)</div>
            <div className="text-xs text-slate-400 mt-0.5">Proven legendary runner history</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-mono mb-1">Deployer Status</div>
            <div className="text-xl font-bold text-amber-400 tracking-tight">100% Public Key</div>
            <div className="text-xs text-slate-400 mt-0.5">No centralized controller</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-mono mb-1">Contract Safety</div>
            <div className="text-xl font-bold text-emerald-400 tracking-tight">Authorities Revoked</div>
            <div className="text-xs text-slate-400 mt-0.5">Mint & Freeze permanently killed</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-mono mb-1">Trading Chain</div>
            <div className="text-xl font-bold text-sky-400 tracking-tight">Solana High-Speed</div>
            <div className="text-xs text-slate-400 mt-0.5">Sub-second decentralized execution</div>
          </div>
        </div>

      </div>
    </section>
  );
}
