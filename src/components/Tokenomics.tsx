import { ShieldCheck, Flame, Coins, Lock, ExternalLink, RefreshCw } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound } from '../utils/audio';

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 lg:py-28 bg-[#071c3a] border-b border-sky-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Immutable On-Chain Rules</span>
            <span aria-hidden="true" className="text-sky-400/40">/</span>
            <span>Zero Rug Vector</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight text-balance">
            TOKENOMICS & FAIR LAUNCH
          </h2>
          <p className="mt-4 text-sky-100 text-base sm:text-lg leading-relaxed">
            Engineered so that even if an untrusted actor tries to interfere, Solana smart contract rules make rugging technically impossible.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Total Supply */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-[#0a2e5e]/90 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-300 uppercase">
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span>Total Hardcap Supply</span>
                </div>
                <span className="text-xs font-mono text-emerald-300 font-bold uppercase">
                  Fixed Forever
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums mb-3">
                1,000,000,000
              </div>
              <p className="text-sm text-sky-100 leading-relaxed max-w-xl">
                Exactly one billion $FKI created at genesis. Zero team allocation reserved to dump, and zero hidden wallets.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-sky-400/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-sky-200">
              <div>CHAIN: SOLANA SPL TOKEN</div>
              <a
                href={TOKEN_CONFIG.links.solscan}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-bold transition-colors"
              >
                <span>Verify Contract on Solscan</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: 0% Tax */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2e5e]/90 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-300 uppercase">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Trading Tax</span>
                </div>
                <span className="text-xs font-mono text-amber-300 font-bold uppercase">
                  Zero Friction
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-amber-300 font-mono tracking-tight tabular-nums mb-3">
                0% / 0%
              </div>
              <p className="text-sm text-sky-100 leading-relaxed">
                Zero buy tax, zero sell tax, zero transfer tax. Pure peer-to-peer memecoin trading with minimal gas.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-sky-400/20 text-xs font-mono text-sky-200">
              TRANSACTIONS: 100% COMMUNITY VOLUMES
            </div>
          </div>

          {/* Card 3: Mint Authority Revoked */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2e5e]/90 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-300 uppercase mb-4">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Mint Authority</span>
              </div>
              <div className="text-2xl font-black text-white tracking-tight mb-2">
                Permanently Revoked
              </div>
              <p className="text-xs text-sky-100 leading-relaxed">
                Mint address set to null. No one can ever print another token. Supply is mathematically sealed.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-400/20 text-xs font-mono text-emerald-300 font-bold">
              REVOKED ON SOLANA
            </div>
          </div>

          {/* Card 4: Freeze Authority Revoked */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2e5e]/90 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-300 uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Freeze Authority</span>
              </div>
              <div className="text-2xl font-black text-white tracking-tight mb-2">
                Permanently Revoked
              </div>
              <p className="text-xs text-sky-100 leading-relaxed">
                Wallets cannot be blacklisted or tokens frozen. Completely free market circulation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-400/20 text-xs font-mono text-emerald-300 font-bold">
              REVOKED ON SOLANA
            </div>
          </div>

          {/* Card 5: Fair Bonding Curve */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2e5e]/90 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-300 uppercase mb-4">
                <RefreshCw className="w-4 h-4 text-sky-300" />
                <span>Bonding Curve</span>
              </div>
              <div className="text-2xl font-black text-white tracking-tight mb-2">
                Pump.fun to Raydium
              </div>
              <p className="text-xs text-sky-100 leading-relaxed">
                Fair price discovery on Pump.fun. Once the curve completes, liquidity is deposited and burned in Raydium.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-400/20 text-xs font-mono text-sky-300 font-bold">
              AUTOMATIC LIQUIDITY BURN
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
