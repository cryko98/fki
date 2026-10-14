import { useState } from 'react';
import { Copy, Check, Flame, Wind, ShieldAlert, Award } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound, playSuccessChime } from '../utils/audio';
import { FkiLogo } from './FkiLogo';

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
    <section id="lore" className="py-20 lg:py-28 relative sky-bg border-b border-sky-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 font-mono">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>The Origin Story</span>
            <span aria-hidden="true" className="text-sky-300/40">/</span>
            <span>Unfiltered Community Lore</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight text-balance">
            THE FLYING KETAMINE MANIFESTO
          </h2>
          <p className="mt-4 text-sky-100 text-base sm:text-lg leading-relaxed">
            From a $25M+ runner to a rogue individual abusing wallet access, to the ultimate communal flight.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: The Manifesto Document */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0a2f64]/90 border-3 border-sky-300/35 shadow-2xl backdrop-blur-md">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-sky-400/20">
                <div className="flex items-center gap-3">
                  <FkiLogo size="sm" rounded="full" />
                  <div>
                    <div className="text-xs text-sky-300 font-mono font-bold uppercase">Chronicle of $FKI</div>
                    <div className="text-sm font-extrabold text-white">The Creator Drops the Keys</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyLore}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-400/20"
                >
                  {copiedLore ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLore ? 'Copied' : 'Copy Manifesto'}</span>
                </button>
              </div>

              {/* Exact Lore Text */}
              <div className="space-y-6 text-sky-50 text-base sm:text-lg leading-relaxed font-medium">
                <p className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight leading-snug uppercase">
                  "I'M GIVING EVERYONE THE PRIVATE KEY."
                </p>

                <p className="border-l-4 border-amber-400 pl-4 py-1 text-white font-semibold">
                  Almost a year ago, I gave this space <strong className="text-amber-300">Flying Ketamine Horse</strong>, a <span className="text-emerald-300 font-black">$25M+ runner</span>.
                </p>

                <p className="text-sky-100">
                  Unfortunately, I made the mistake of trusting Nico with my deployer. Since then, I've watched him farm, rug projects, and even pretend to be me on fake accounts.
                </p>

                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-400/30 text-rose-200 text-sm sm:text-base">
                  <strong>The Reality:</strong> Nico was never a dev; he was just an individual who was given access to the deployer wallet and abused that trust to farm and rug.
                </div>

                <p className="text-sky-100">
                  After watching <strong className="text-white">Flying Ketamine Inu</strong> get rugged twice, I've had enough.
                </p>

                <p className="text-white font-bold text-lg">
                  So I'm launching it myself. But this time, there's a twist.
                </p>

                <p className="p-5 rounded-2xl bg-gradient-to-r from-amber-400/20 to-sky-400/20 border-2 border-amber-400/50 text-white font-black text-lg sm:text-xl">
                  As a final fuck you to Nico, I'm giving the entire community the private key.
                </p>

                <p className="text-sky-100">
                  Not one dev. Not one person in control. <span className="text-amber-300 font-black tracking-wide uppercase">EVERYONE</span>.
                </p>

                <p className="text-white">
                  We all get to be the dev of something that once ran to <strong className="text-emerald-300 font-extrabold">$25M+</strong> & <strong className="text-amber-300 font-extrabold">$FKI</strong>.
                </p>

                <p className="text-xl sm:text-2xl font-black text-white pt-2">
                  Let's see what happens when the entire community holds the keys.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Key Flight Milestones & Meme Lore Cards */}
          <div className="lg:col-span-4 space-y-5">
            
            <div className="p-6 rounded-3xl bg-[#092650]/90 border-2 border-sky-400/30 shadow-xl">
              <div className="text-xs font-mono font-bold uppercase text-amber-300 mb-2">
                Lore Highlight 01
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                The $25M+ Horse Ancestry
              </h3>
              <p className="text-xs text-sky-200 leading-relaxed">
                Flying Ketamine Horse captivated the crypto space with a legendary $25M+ market cap run. The same creative lineage is now unleashed as Flying Ketamine Inu.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#092650]/90 border-2 border-sky-400/30 shadow-xl">
              <div className="text-xs font-mono font-bold uppercase text-amber-300 mb-2">
                Lore Highlight 02
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Deployer Trust Broken
              </h3>
              <p className="text-xs text-sky-200 leading-relaxed">
                Nico was trusted with wallet access, but chose to farm the community. By distributing the secret key publicly, the community stripped away any leverage.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#092650]/90 border-2 border-sky-400/30 shadow-xl">
              <div className="text-xs font-mono font-bold uppercase text-amber-300 mb-2">
                Lore Highlight 03
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Communal Ascendance
              </h3>
              <p className="text-xs text-sky-200 leading-relaxed">
                When everyone owns the deployer key, no one can rug. The flight path of $FKI is 100% determined by community velocity.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
