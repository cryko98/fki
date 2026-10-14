import { useState } from 'react';
import { TrendingUp, ArrowDownUp, ExternalLink, Zap, Calculator } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound } from '../utils/audio';

export function LiveChart() {
  const [solAmount, setSolAmount] = useState('1');
  const [showEmbed, setShowEmbed] = useState(false);

  const numSol = parseFloat(solAmount) || 0;
  const estimatedTokens = Math.floor(numSol * 38250000).toLocaleString();

  return (
    <section id="chart" className="py-20 lg:py-28 bg-[#061833] border-b border-sky-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 font-mono">
            <TrendingUp className="w-4 h-4 text-sky-300" />
            <span>Real-Time Execution</span>
            <span aria-hidden="true" className="text-sky-400/40">/</span>
            <span>Solana Order Flow</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight text-balance">
            LIVE CHART & SWAP ESTIMATOR
          </h2>
          <p className="mt-4 text-sky-100 text-base sm:text-lg leading-relaxed">
            Track real-time transactions on Pump.fun or estimate your $FKI allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Chart Area / Embed */}
          <div className="lg:col-span-8 rounded-3xl bg-[#092955] border-2 border-sky-400/30 overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b border-sky-400/20 flex flex-wrap items-center justify-between gap-4 bg-[#072044]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-white tracking-wide">
                  DEXSCREENER CHART FEED
                </span>
                <span className="font-mono text-xs text-amber-300">
                  FKI / SOL
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    playClickSound();
                    setShowEmbed(!showEmbed);
                  }}
                  className="px-3.5 py-1.5 text-xs font-bold text-sky-100 hover:text-white bg-sky-900/80 hover:bg-sky-800 rounded-xl transition-colors cursor-pointer border border-sky-400/30"
                >
                  {showEmbed ? 'Show Minimal Feed' : 'Load Interactive Chart'}
                </button>
                <a
                  href={TOKEN_CONFIG.links.dexScreener}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm"
                >
                  <span>DexScreener</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Chart Container */}
            <div className="relative w-full h-[460px] bg-slate-950 flex items-center justify-center">
              {showEmbed ? (
                <iframe
                  src={`https://dexscreener.com/solana/${TOKEN_CONFIG.contractAddress}?embed=1&theme=dark&trades=0&info=0`}
                  title="DexScreener Chart"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              ) : (
                <div className="p-8 text-center max-w-md">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border-2 border-sky-400/30 text-amber-300 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-2">
                    Live $FKI Trading Pair
                  </h3>
                  <p className="text-xs text-sky-200 leading-relaxed mb-6">
                    Token is trading actively on the Solana bonding curve. Click below to load the live candlestick chart or swap directly on Pump.fun.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        playClickSound();
                        setShowEmbed(true);
                      }}
                      className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Load Live Chart
                    </button>
                    <a
                      href={TOKEN_CONFIG.links.pumpFun}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-sky-900 hover:bg-sky-800 rounded-xl border border-sky-400/40 transition-colors"
                    >
                      View on Pump.fun
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="p-3.5 border-t border-sky-400/20 bg-[#072044] font-mono text-[11px] text-sky-200 flex flex-wrap items-center justify-between gap-4">
              <div>PAIR: FKI / SOL</div>
              <div className="text-amber-300 font-semibold">RECOMMENDED SLIPPAGE: 0.5% - 2.0%</div>
            </div>
          </div>

          {/* Right Column: Swap Estimator */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#0a2e5e] border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-sky-400/20">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-300" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    Swap Estimator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-sky-200">
                  Instant Output
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-sky-200 mb-1.5 font-bold">
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
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/90 border-2 border-sky-400/30 text-white font-mono text-base font-black focus:outline-none focus:border-amber-400 tabular-nums"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-sky-300">
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
                        className={`flex-1 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                          solAmount === amt
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-sky-950 text-sky-200 hover:text-white hover:bg-sky-900'
                        }`}
                      >
                        {amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="p-2 rounded-full bg-sky-900 text-sky-200 border border-sky-400/30">
                    <ArrowDownUp className="w-4 h-4" />
                  </div>
                </div>

                {/* Output FKI */}
                <div>
                  <div className="flex items-center justify-between text-xs text-sky-200 mb-1.5 font-bold">
                    <span>Estimated Receive</span>
                    <span className="font-mono text-amber-300 font-black">$FKI</span>
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-slate-950/90 border-2 border-sky-400/30 font-mono text-base font-black text-amber-300 tabular-nums">
                    ≈ {estimatedTokens}
                  </div>
                </div>
              </div>
            </div>

            {/* Execute Action */}
            <div className="mt-8 pt-4 border-t border-sky-400/20">
              <a
                href={TOKEN_CONFIG.links.pumpFun}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-2xl shadow-xl shadow-amber-400/25 transition-all cursor-pointer"
              >
                <span>Execute on Pump.fun</span>
                <Zap className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
