import { useState } from 'react';
import { ShieldCheck, Flame, Coins, Lock, ExternalLink, RefreshCw } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound } from '../utils/audio';

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 lg:py-28 bg-[#070e1c] border-b border-sky-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Mathematical Invariants</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Zero Extortion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            TOKENOMICS & ON-CHAIN SAFETY
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Engineered to remove any single point of human failure. Even if Nico tries to interfere, Solana smart contract parameters render it technically impossible.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Total Supply (Col span 2 on md) */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-sky-400/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                  <Coins className="w-4 h-4 text-sky-400" />
                  <span>Fixed Token Supply</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                  Immutable Cap
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums mb-3">
                1,000,000,000
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                One billion $FKI minted at launch. No future inflation, no team tokens locked in hidden multisigs, and zero developer reserve.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div>TOKEN STANDARD: SPL TOKEN ON SOLANA</div>
              <a
                href={TOKEN_CONFIG.links.solscan}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Verify on Solscan</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: 0% Tax */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-sky-400/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Transaction Friction</span>
                </div>
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Pure Trading
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight tabular-nums mb-3">
                0% / 0%
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Zero tax on buys. Zero tax on sells. Zero transfer tax. No hidden marketing fee wallet leeching transaction volume.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
              FEES: 100% NATIVE SOLANA GAS ONLY
            </div>
          </div>

          {/* Card 3: Mint Authority Revoked */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-sky-400/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase mb-4">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Mint Authority</span>
              </div>
              <div className="text-2xl font-black text-white tracking-tight mb-2">
                Permanently Revoked
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The mint key address is set to null (0x0). It is cryptographically impossible for anyone, including the original deployer, to print more tokens.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400 font-semibold">
              VERIFIED REVOKED
            </div>
          </div>

          {/* Card 4: Freeze Authority Revoked */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-sky-400/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Freeze Authority</span>
              </div>
              <div className="text-2xl font-black text-white tracking-tight mb-2">
                Permanently Revoked
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your wallet cannot be blacklisted. Token balances cannot be frozen or seized. Complete self-sovereignty.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400 font-semibold">
              VERIFIED REVOKED
            </div>
          </div>

          {/* Card 5: Liquidity Lock & Bonding */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-sky-400/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase mb-4">
                <RefreshCw className="w-4 h-4 text-sky-400" />
                <span>Fair Launch Curve</span>
              </div>
              <div className="text-2xl font-black text-white tracking-tight mb-2">
                Pump.fun to Raydium
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tokens launched through the transparent bonding curve. Upon graduation, all pool liquidity is automatically burnt and deposited into Raydium DEX.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-sky-400 font-semibold">
              AUTOMATIC LIQUIDITY BURN
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
