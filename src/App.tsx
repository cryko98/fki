/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyVault } from './components/KeyVault';
import { LoreSection } from './components/LoreSection';
import { DevSimulator } from './components/DevSimulator';
import { Tokenomics } from './components/Tokenomics';
import { LiveChart } from './components/LiveChart';
import { CommunityStrip } from './components/CommunityStrip';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ToastMessage } from './types';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleNotify = (title: string, description: string) => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#070e1c] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white font-sans">
      <Navbar onNotify={handleNotify} />
      <main className="flex-1">
        <Hero onNotify={handleNotify} />
        <KeyVault onNotify={handleNotify} />
        <LoreSection onNotify={handleNotify} />
        <DevSimulator onNotify={handleNotify} />
        <Tokenomics />
        <LiveChart />
        <CommunityStrip />
      </main>
      <Footer onNotify={handleNotify} />
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
