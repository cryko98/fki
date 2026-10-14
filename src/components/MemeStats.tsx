import { useState } from 'react';
import { Wind, Send, Copy, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound, playSuccessChime } from '../utils/audio';

interface MemeStatsProps {
  onNotify: (title: string, desc: string) => void;
}

export function MemeStats({ onNotify }: MemeStatsProps) {
  const [altitude, setAltitude] = useState(25000000);
  const [boostedCount, setBoostedCount] = useState(0);

  const handleBoost = () => {
    playSuccessChime();
    setAltitude((prev) => prev + 1000000);
    setBoostedCount((prev) => prev + 1);
    onNotify('Flight Boost Activated', 'Flying Ketamine Inu gained +1,000,000 FT in meme altitude!');
  };

  const tweetText = `Nico was not a dev, just someone who abused wallet access. So the creator gave the private key to EVERYONE. We are all flying with $FKI (Flying Ketamine Inu) on Solana!\n\nCA: ${TOKEN_CONFIG.contractAddress}`;

  const handleShareTweet = () => {
    playClickSound();
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyTweet = async () => {
    try {
      await navigator.clipboard.writeText(tweetText);
      playSuccessChime();
      onNotify('Meme Raid Tweet Copied', 'Paste into X (Twitter) to rally the community.');
    } catch {
      // Fallback
    }
  };

  return (
    <section id="flight-stats" className="py-20 lg:py-28 relative bg-[#061833] border-b border-sky-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 font-mono">
            <Wind className="w-4 h-4 text-sky-300" />
            <span>Flight Velocity Meter</span>
            <span aria-hidden="true" className="text-sky-400/40">/</span>
            <span>Uncapped Sky Limit</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight text-balance">
            FLIGHT ALTITUDE & MEME RADAR
          </h2>
          <p className="mt-4 text-sky-100 text-base sm:text-lg leading-relaxed">
            Flying Ketamine Inu is ascending beyond centralized control. Boost the communal altitude and rally the community.
          </p>
        </div>

        {/* 4 Big Meme Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-3xl bg-[#0a2f64]/80 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-sky-300 mb-2">Current Altitude</div>
              <div className="text-3xl font-black text-amber-300 font-mono tabular-nums">
                {altitude.toLocaleString()} FT
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-400/20 text-xs text-sky-100 font-medium">
              Ascending with every community buy
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0a2f64]/80 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-sky-300 mb-2">Nico's Control</div>
              <div className="text-3xl font-black text-rose-400 font-mono">
                0.00%
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-400/20 text-xs text-sky-100 font-medium">
              Deployer key permanently public
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0a2f64]/80 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-sky-300 mb-2">Community Custody</div>
              <div className="text-3xl font-black text-emerald-300 font-mono">
                100%
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-400/20 text-xs text-sky-100 font-medium">
              Every holder is an equal dev
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0a2f64]/80 border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-sky-300 mb-2">Predecessor Benchmark</div>
              <div className="text-3xl font-black text-sky-300 font-mono">
                $25M+
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-400/20 text-xs text-sky-100 font-medium">
              Flying Ketamine Horse market cap
            </div>
          </div>

        </div>

        {/* Interactive Flight Boost & Community Raid Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-[#0c3975] to-[#08244c] border-3 border-amber-400/40 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-300 mb-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Interactive Flight Engine</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                Boost Flying Inu's Wings
              </h3>
              <p className="text-sm text-sky-100 leading-relaxed mb-6">
                Send a gust of updraft to Flying Ketamine Inu. Every boost increments the community flight meter into the higher atmosphere.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleBoost}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-2xl shadow-xl shadow-amber-400/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Wind className="w-4 h-4" />
                <span>Boost Wings (+1M FT)</span>
              </button>
              <div className="text-xs font-mono text-sky-200">
                Boosts: <strong className="text-white">{boostedCount}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#092b5a] border-2 border-sky-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-sky-300 mb-2">
                <Send className="w-4 h-4 text-sky-400" />
                <span>Community Transmission</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                Spread The Anti-Nico Lore
              </h3>
              <p className="text-sm text-sky-100 leading-relaxed mb-6">
                Tell Solana CT the real story: Nico was just someone who got access to the dev wallet, and now the entire community holds the keys to $FKI!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyTweet}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-sky-100 bg-sky-950 hover:bg-sky-900 border border-sky-400/30 rounded-xl transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Message</span>
              </button>
              <button
                onClick={handleShareTweet}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-black uppercase text-slate-950 bg-sky-300 hover:bg-sky-200 rounded-xl transition-colors cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Post on X</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
