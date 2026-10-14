import { useState } from 'react';
import { TrendingUp, ArrowDownUp, ExternalLink, Zap, Calculator } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound } from '../utils/audio';

export function LiveChart() {
  const [solAmount, setSolAmount] = useState('1');
  const [showEmbed, setShowEmbed] = useState(false);

  // Approximate calculation model based on typical bonding curve metrics for fun
  const numSol = parseFloat(solAmount) || 0;
  const estimatedTokens = Math.floor(numSol * 38250000).toLocaleString();

  return (
    <section id="chart" className="py-20 lg:py-28 bg-[#060b17] border-b border-sky-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <TrendingUp className="w-4 h-4 text-sky-400" />
            <span>Trading Terminal</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Real-Time Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            LIVE CHART & EXECUTION
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Monitor real-time Solana order flow, inspect live candle action, or calculate token allocations before routing your trade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Chart Area / Embed */}
          <div className="lg:col-span-8 rounded-2xl bg-slate-900 border border-sky-500/20 overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-950/60">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-white tracking-wide">
                  DEXSCREENER CHART FEED
                </span>
                <span className="font-mono text-xs text-slate-400">
                  FKI / SOL
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    playClickSound();
                    setShowEmbed(!showEmbed);
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  {showEmbed ? 'Show Minimalist Feed' : 'Load Interactive IFrame'}
                </button>
                <a
                  href={TOKEN_CONFIG.links.dexScreener}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 bg-sky-950/60 border border-sky-500/30 rounded-lg transition-colors"
                >
                  <span>DexScreener</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Chart Container */}
            <div className="relative w-full h-[480px] bg-slate-950 flex items-center justify-center">
              {showEmbed ? (
                <iframe
                  src={`https://dexscreener.com/solana/${TOKEN_CONFIG.contractAddress}?embed=1&theme=dark&trades=0&info=0`}
                  title="DexScreener Chart"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              ) : (
                <div className="p-8 text-center max-w-md">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Live On-Chain Pair
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Token is trading on Pump.fun bonding curve with continuous automated market making. Click below to view the interactive iframe or jump directly to the live chart.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        playClickSound();
                        setShowEmbed(true);
                      }}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer"
                    >
                      Load Embed Stream
                    </button>
                    <a
                      href={TOKEN_CONFIG.links.pumpFun}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      View on Pump.fun
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom info strip */}
            <div className="p-3 border-t border-slate-800 bg-slate-950/80 font-mono text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-4">
              <div>PAIR: FKI / SOL (Pump.fun curve)</div>
              <div className="text-slate-400">RECOMMENDED SLIPPAGE: 0.5% - 1.5%</div>
            </div>
          </div>

          {/* Right Column: Swap Estimator Widget */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-sky-400/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Swap Estimator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Instant Preview
                </span>
              </div>

              {/* Input SOL */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                    <span>You Pay (SOL)</span>
                    <span className="font-mono">Solana</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      min="0.01"
                      value={solAmount}
                      onChange={(e) => setSolAmount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-base font-bold focus:outline-none focus:border-sky-400 tabular-nums"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400">
                      SOL
                    </div>
                  </div>
                  {/* Preset quick buttons */}
                  <div className="flex items-center gap-2 mt-2">
                    {['0.25', '0.5', '1', '2', '5'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          playClickSound();
                          setSolAmount(amt);
                        }}
                        className={`flex-1 py-1 rounded text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                          solAmount === amt
                            ? 'bg-sky-500 text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="p-1.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    <ArrowDownUp className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Output FKI */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                    <span>Estimated Receive</span>
                    <span className="font-mono text-amber-400 font-semibold">$FKI</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-base font-bold text-amber-300 tabular-nums">
                    ≈ {estimatedTokens}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">
                    Estimates vary along the dynamic bonding curve
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Trade Action */}
            <div className="mt-8 pt-4 border-t border-slate-800">
              <a
                href={TOKEN_CONFIG.links.pumpFun}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
              >
                <span>Execute on Pump.fun</span>
                <Zap className="w-4 h-4" />
              </a>
              <div className="text-center mt-2">
                <a
                  href={TOKEN_CONFIG.links.raydium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-slate-400 hover:text-sky-300 transition-colors"
                >
                  Or trade on Raydium (Post-Graduation)
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
