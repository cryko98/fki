import { useState } from 'react';
import { Copy, Check, ShieldAlert, Award, Flame, Users, ArrowRight } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound, playSuccessChime } from '../utils/audio';

interface LoreSectionProps {
  onNotify: (title: string, desc: string) => void;
}

export function LoreSection({ onNotify }: LoreSectionProps) {
  const [copiedLore, setCopiedLore] = useState(false);

  const fullLoreText = `${TOKEN_CONFIG.lore.title}\n\n${TOKEN_CONFIG.lore.paragraphs.join('\n\n')}\n\nprivate key:\n${TOKEN_CONFIG.privateKey}\n\nca:\n${TOKEN_CONFIG.contractAddress}`;

  const handleCopyLore = async () => {
    try {
      await navigator.clipboard.writeText(fullLoreText);
      setCopiedLore(true);
      playSuccessChime();
      onNotify('Manifesto Copied', 'Full Flying Ketamine Inu lore copied to clipboard for sharing.');
      setTimeout(() => setCopiedLore(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="lore" className="py-20 lg:py-28 relative bg-[#070e1c] border-b border-sky-500/15 overflow-hidden">
      
      {/* Decorative background sky motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>The Genesis & Retaliation</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Unfiltered History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            THE MANIFESTO AGAINST NICO
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            The raw, true backstory behind the launch of Flying Ketamine Inu and why the deployer keys belong to every holder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Manifesto Document */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-sky-400/25 shadow-xl relative backdrop-blur-md">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 font-mono text-xs font-bold">
                    01
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Official Release Note</div>
                    <div className="text-sm font-bold text-white tracking-tight">The Original Deployer Speaks</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyLore}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedLore ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLore ? 'Copied' : 'Share Lore'}</span>
                </button>
              </div>

              {/* Manifesto Content */}
              <div className="space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                <p className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight leading-snug">
                  "I'M GIVING EVERYONE THE PRIVATE KEY."
                </p>

                <p className="border-l-2 border-sky-400 pl-4 py-0.5 text-slate-200">
                  Almost a year ago, I gave this space <strong className="text-white">Flying Ketamine Horse</strong>, a <span className="text-emerald-400 font-bold">$25M+ runner</span>.
                </p>

                <p className="text-slate-300">
                  Unfortunately, I made the mistake of trusting Nico with my deployer. Since then, I've watched him farm, rug projects, and even pretend to be me on fake accounts.
                </p>

                <p className="text-slate-300">
                  After watching <strong className="text-white">Flying Ketamine Inu</strong> get rugged twice, I've had enough.
                </p>

                <p className="text-slate-200 font-medium">
                  So I'm launching it myself. But this time, there's a twist.
                </p>

                <p className="p-4 rounded-xl bg-slate-950/80 border border-amber-400/30 text-amber-300 font-semibold text-base sm:text-lg">
                  As a final fuck you to Nico, I'm giving the entire community the private key.
                </p>

                <p className="text-slate-300">
                  Not one dev. Not one person in control. <span className="text-white font-extrabold uppercase tracking-wide">EVERYONE</span>.
                </p>

                <p className="text-slate-200">
                  We all get to be the dev of something that once ran to <strong className="text-emerald-400">$25M+</strong> & <strong className="text-amber-400">$FKI</strong>.
                </p>

                <p className="text-xl font-bold text-white pt-2">
                  Let's see what happens when the entire community holds the keys.
                </p>
              </div>

              {/* Lore Verification Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <div>AUTHENTICITY: DEPLOYER CERTIFIED</div>
                <div className="text-sky-400 font-semibold">TICKER: $FKI · CHAIN: SOLANA</div>
              </div>

            </div>
          </div>

          {/* Right Column: Timeline & Proof Artifact */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Card */}
            <div className="rounded-2xl overflow-hidden border border-sky-400/25 bg-slate-900 shadow-xl">
              <div className="relative aspect-[4/3] w-full bg-slate-950">
                <img
                  src="/src/assets/images/fki_doge_community_1791981979128.jpg"
                  alt="Community Taking Flight Together"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-5">
                  <div>
                    <div className="text-xs uppercase font-mono text-sky-400 font-semibold">Communal Ascension</div>
                    <div className="text-lg font-bold text-white">United Under One Shared Deployer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Breakdown */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 font-semibold">
                Chronological Events
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-white">Flying Ketamine Horse Launches</div>
                    <div className="text-slate-400 mt-0.5">Legendary run surging past $25,000,000 Market Cap.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-white">Nico Rogue Deployer Hijack</div>
                    <div className="text-slate-400 mt-0.5">Rogue actor Nico farms community and rugs FKI twice.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-white">The Nuclear Solution</div>
                    <div className="text-slate-400 mt-0.5">Original creator drops the entire private key to the world.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <div className="font-bold text-white">$FKI Communal Takeover</div>
                    <div className="text-slate-400 mt-0.5">100% decentralized memecoin flight begins on Solana.</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
