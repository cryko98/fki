import { ExternalLink, Users, ArrowUpRight } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound } from '../utils/audio';

export function CommunityStrip() {
  const links = [
    {
      title: 'Pump.fun',
      subtitle: 'Official Bonding Curve',
      url: TOKEN_CONFIG.links.pumpFun,
      highlight: true
    },
    {
      title: 'DexScreener',
      subtitle: 'Real-Time Pair Analytics',
      url: TOKEN_CONFIG.links.dexScreener,
      highlight: false
    },
    {
      title: 'Solscan',
      subtitle: 'Verified Solana Token',
      url: TOKEN_CONFIG.links.solscan,
      highlight: false
    },
    {
      title: 'X (Twitter)',
      subtitle: 'Community Raids & Intel',
      url: TOKEN_CONFIG.links.twitter,
      highlight: false
    },
    {
      title: 'Raydium',
      subtitle: 'DEX Automated Pool',
      url: TOKEN_CONFIG.links.raydium,
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-[#070e1c] border-b border-sky-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase text-sky-400 font-semibold mb-1">
              Decentralized Ecosystem
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              COMMUNITY HUBS & TRACKERS
            </h3>
          </div>
          <div className="text-xs font-mono text-slate-400">
            CHAIN: SOLANA MAINNET-BETA
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between group cursor-pointer ${
                item.highlight
                  ? 'bg-amber-400/10 border-amber-400/40 hover:border-amber-400 hover:bg-amber-400/20 shadow-lg shadow-amber-950/20'
                  : 'bg-slate-900/80 border-slate-800 hover:border-sky-400/50 hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                  Track 0{idx + 1}
                </span>
                <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${item.highlight ? 'text-amber-400' : 'text-slate-400 group-hover:text-sky-400'}`} />
              </div>
              <div>
                <div className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
