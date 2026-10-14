import { useState } from 'react';
import { Terminal, Send, Check, Copy, Share2, Sparkles, Shield, AlertTriangle } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound, playSuccessChime } from '../utils/audio';

interface DevSimulatorProps {
  onNotify: (title: string, desc: string) => void;
}

export function DevSimulator({ onNotify }: DevSimulatorProps) {
  const [handle, setHandle] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SYSTEM INITIALIZED: Solana Communal Authority Module',
    'READING CONFIG: $FKI (Flying Ketamine Inu)',
    'DEPLOYER KEY: Broadcasted (Base58 64-byte payload)',
    'Ready for communal dev verification.'
  ]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);

  const tweetPresets = [
    `Nico tried to rug twice, so the dev gave EVERYONE the private key to $FKI (Flying Ketamine Inu). We are all the dev now.\n\nCA: ${TOKEN_CONFIG.contractAddress}\n\nSolana runner mode active.`,
    `Remember Flying Ketamine Horse running to $25M+? Now Flying Ketamine Inu ($FKI) has public deployer keys. Total decentralization.\n\nCA: ${TOKEN_CONFIG.contractAddress}`,
    `You are the dev. I am the dev. Nico is crying. $FKI on Solana.\n\nCA: ${TOKEN_CONFIG.contractAddress}`
  ];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const username = handle.trim() || 'Anonymous Anon';
    playClickSound();
    setIsVerifying(true);

    setTerminalLogs(prev => [
      ...prev,
      `> Connecting to Solana cluster for @${username}...`,
      `> Inspecting keypair: 3ZLSYQ9g...`,
      `> Status: PRIVILEGE LEVEL 0 (ROOT DEV)`,
      `> Welcome, Dev @${username}. The keys belong to you.`
    ]);

    setTimeout(() => {
      setIsVerifying(false);
      playSuccessChime();
      onNotify('Dev Access Confirmed', `@${username} is officially an authorized deployer of $FKI.`);
    }, 600);
  };

  const handleShareTweet = (text: string) => {
    playClickSound();
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyTweet = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      playSuccessChime();
      onNotify('Post Copied', 'Community tweet copied to clipboard.');
    } catch {
      // Fallback
    }
  };

  return (
    <section id="anarchy" className="py-20 lg:py-28 bg-[#060b17] border-b border-sky-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Interactive Anarchy Engine</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Communal Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            DEV TERMINAL & AUTHORITY CONSOLE
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Test your dev credentials, inspect communal powers, and broadcast anti-Nico transmissions directly to Solana Twitter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Terminal Console */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-sky-500/30 shadow-2xl font-mono text-xs">
            <div>
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-semibold text-slate-300 text-[11px]">fki-deployer-cli v1.0.0 (solana-mainnet)</span>
                </div>
                <span className="text-[10px] text-sky-400 font-bold uppercase">Open Access</span>
              </div>

              {/* Logs Window */}
              <div className="space-y-1.5 h-64 overflow-y-auto p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-slate-300 leading-relaxed">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-slate-600 select-none">$</span>
                    <span className={log.includes('ROOT DEV') || log.includes('Welcome') ? 'text-amber-400 font-bold' : log.includes('SYSTEM') ? 'text-sky-400' : 'text-slate-300'}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Form */}
            <form onSubmit={handleVerify} className="mt-4 pt-4 border-t border-slate-800">
              <div className="text-[11px] text-slate-400 mb-2 uppercase font-semibold">
                Verify Your Handle as Communal Dev
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your X handle or wallet address..."
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="px-4 py-2 font-bold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  {isVerifying ? 'Verifying...' : 'Verify Rights'}
                </button>
              </div>
            </form>
          </div>

          {/* Social Transmission / Anti-Nico Broadcast */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-900/90 border border-sky-400/20 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-sky-400" />
                  <span className="text-sm font-bold text-white tracking-tight uppercase">
                    Anti-Nico Transmissions
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-mono font-semibold">
                  1-Click Raid
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-normal">
                Choose a pre-written community message and broadcast it to X (Twitter) to rally the original Flying Ketamine Horse holders.
              </p>

              {/* Preset Selector */}
              <div className="space-y-2 mb-4">
                {tweetPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playClickSound();
                      setSelectedPresetIndex(idx);
                    }}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                      selectedPresetIndex === idx
                        ? 'bg-sky-500/10 border-sky-400 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[10px] text-sky-400 font-bold uppercase mb-1">
                      Transmission 0{idx + 1}
                    </div>
                    <div className="line-clamp-2">{preset}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar for selected transmission */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <button
                onClick={() => handleCopyTweet(tweetPresets[selectedPresetIndex])}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Text</span>
              </button>
              <button
                onClick={() => handleShareTweet(tweetPresets[selectedPresetIndex])}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post on X</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
