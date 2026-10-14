import { ArrowUpRight } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound } from '../utils/audio';

export function CommunityStrip() {
  const links = [
    {
      title: 'Pump.fun',
      subtitle: 'Official Token Page',
      url: TOKEN_CONFIG.links.pumpFun,
      highlight: true
    },
    {
      title: 'DexScreener',
      subtitle: 'Live Chart & Trades',
      url: TOKEN_CONFIG.links.dexScreener,
      highlight: false
    },
    {
      title: 'Solscan',
      subtitle: 'Verified SPL Token',
      url: TOKEN_CONFIG.links.solscan,
      highlight: false
    },
    {
      title: 'X (Twitter)',
      subtitle: 'Community Raids',
      url: TOKEN_CONFIG.links.twitter,
      highlight: false
    },
    {
      title: 'Raydium',
      subtitle: 'DEX Liquidity Pool',
      url: TOKEN_CONFIG.links.raydium,
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-[#071d3d] border-b border-sky-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase text-amber-300 font-bold mb-1">
              Decentralized Flock
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              COMMUNITY FLIGHT CHANNELS
            </h3>
          </div>
          <div className="text-xs font-mono text-sky-200">
            NETWORK: SOLANA MAINNET
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
              className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between group cursor-pointer ${
                item.highlight
                  ? 'bg-amber-400/15 border-amber-400 hover:bg-amber-400/25 shadow-lg shadow-amber-400/15'
                  : 'bg-[#092955] border-sky-400/30 hover:border-amber-400 hover:bg-[#0d366e]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-sky-200 uppercase font-black">
                  Link 0{idx + 1}
                </span>
                <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${item.highlight ? 'text-amber-400' : 'text-sky-300 group-hover:text-amber-300'}`} />
              </div>
              <div>
                <div className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </div>
                <div className="text-xs text-sky-200 mt-0.5">
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
