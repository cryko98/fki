import { useState } from 'react';
import { Key, Eye, EyeOff, Copy, Check, ExternalLink, ShieldCheck, Terminal, Download, ArrowRight, HelpCircle } from 'lucide-react';
import { TOKEN_CONFIG } from '../types';
import { playClickSound, playSuccessChime } from '../utils/audio';

interface KeyVaultProps {
  onNotify: (title: string, desc: string) => void;
}

export function KeyVault({ onNotify }: KeyVaultProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'import' | 'rights' | 'security'>('import');
  const [simulatedDevStatus, setSimulatedDevStatus] = useState<string | null>(null);

  const handleCopyKey = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_CONFIG.privateKey);
      setCopied(true);
      playSuccessChime();
      onNotify('Deployer Private Key Copied', 'Import this key into Phantom or Solflare to hold dev access.');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleClaimDev = () => {
    playClickSound();
    setSimulatedDevStatus('checking');
    setTimeout(() => {
      setSimulatedDevStatus('verified');
      playSuccessChime();
      onNotify('Dev Status Verified', 'You hold the private key. You are officially the dev of $FKI.');
    }, 800);
  };

  const maskedKey = '•'.repeat(48) + ' ' + TOKEN_CONFIG.privateKey.slice(-8);

  return (
    <section id="key-vault" className="py-20 lg:py-28 relative bg-[#060b17] border-b border-sky-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Key className="w-4 h-4 text-amber-400" />
            <span>The Communal Vault</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Zero Central Dev</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            THE SHARED PRIVATE KEY
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Nico rugged twice and hijacked deployers. In response, this private key is permanently published to the world.
            Anyone can import it. We are all the dev.
          </p>
        </div>

        {/* The Master Key Console */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-2xl border border-amber-400/30 shadow-2xl shadow-amber-950/20 p-6 sm:p-8 backdrop-blur-md">
          
          {/* Top Bar of Vault */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight">
                  SOLANA DEPLOYER KEYPAIR (BASE58)
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Standard 64-byte Solana secret key encoding · 88 chars
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playClickSound();
                  setRevealed(!revealed);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                {revealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{revealed ? 'Conceal Key' : 'Reveal Key'}</span>
              </button>

              <button
                onClick={handleCopyKey}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-md shadow-amber-400/20 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Key'}</span>
              </button>
            </div>
          </div>

          {/* Key Display Area */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-sm leading-relaxed break-all select-all relative group">
            <div className="text-xs text-slate-500 mb-2 uppercase font-semibold flex items-center justify-between">
              <span>Raw Keypair Payload</span>
              <span className="text-slate-400 text-[11px]">Click text to highlight</span>
            </div>
            <div className={`font-mono text-sm sm:text-base font-semibold transition-all ${revealed ? 'text-amber-300' : 'text-slate-500'}`}>
              {revealed ? TOKEN_CONFIG.privateKey : maskedKey}
            </div>
          </div>

          {/* Action Row & Dev Verification */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Publicly Broadcasted to Solana Network</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleClaimDev}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-lg transition-colors cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>
                  {simulatedDevStatus === 'checking'
                    ? 'Checking Key...'
                    : simulatedDevStatus === 'verified'
                    ? 'Verified Communal Dev'
                    : 'Claim Dev Status'}
                </span>
              </button>
            </div>
          </div>

          {/* Tabbed Guidance */}
          <div className="mt-10 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-4 mb-6 text-sm font-semibold border-b border-slate-800 pb-2">
              <button
                onClick={() => {
                  playClickSound();
                  setActiveTab('import');
                }}
                className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'import'
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                How to Import (30 Seconds)
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  setActiveTab('rights');
                }}
                className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'rights'
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                What This Means
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  setActiveTab('security');
                }}
                className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'security'
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Rug Immunity Architecture
              </button>
            </div>

            {/* Tab 1: Step by Step Guide */}
            {activeTab === 'import' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">STEP 01</div>
                  <div className="text-sm font-bold text-white mb-1">Copy The Key</div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Hit the "Copy Key" button above to get the full 88-character Base58 Solana keypair into your clipboard.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">STEP 02</div>
                  <div className="text-sm font-bold text-white mb-1">Open Your Wallet</div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Open Phantom, Solflare, or Backpack. Navigate to Accounts, select "Add / Connect Wallet", and choose "Import Private Key".
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">STEP 03</div>
                  <div className="text-sm font-bold text-white mb-1">You Are The Dev</div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Paste the key. Your wallet is now logged into the original deployer. You share identical rights with the creator.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: What this means */}
            {activeTab === 'rights' && (
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 leading-relaxed space-y-3">
                <p>
                  In conventional crypto launches, a single anonymous dev holds the secret key, silently waiting to dump marketing allocations, snipe liquidity, or farm community trust.
                </p>
                <p>
                  With <strong className="text-white">$FKI (Flying Ketamine Inu)</strong>, the deployer wallet is a communal commons. No individual can hold the project hostage, pretend to be someone they are not, or pull the rug.
                </p>
                <p className="text-amber-300 font-semibold">
                  Nico wanted centralized control. Instead, the community took everything back into collective custody.
                </p>
              </div>
            )}

            {/* Tab 3: Security & Rug Immunity */}
            {activeTab === 'security' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-emerald-400 mb-1">Mint Authority: Revoked</div>
                  <p className="text-xs text-slate-400">
                    No new tokens can ever be minted. The 1,000,000,000 supply cap is strictly unalterable on Solana.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-emerald-400 mb-1">Freeze Authority: Revoked</div>
                  <p className="text-xs text-slate-400">
                    No holder account can ever be blacklisted or frozen. Transfers are immutable.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-emerald-400 mb-1">Pump.fun Fair Curve</div>
                  <p className="text-xs text-slate-400">
                    Launched on Pump.fun bonding curve. Upon completion, liquidity is automatically burnt in Raydium.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-emerald-400 mb-1">Zero Hidden Backdoors</div>
                  <p className="text-xs text-slate-400">
                    Since the deployer key is open, everyone inspects transactions simultaneously. Maximum transparency.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
