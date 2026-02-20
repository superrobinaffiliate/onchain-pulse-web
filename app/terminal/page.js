"use client"
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { Radar, ArrowLeft, BarChart3, Lock, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Terminal() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <nav className="relative z-50 flex justify-between items-center p-8 lg:px-20 max-w-[1600px] mx-auto">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span className="text-xs font-black uppercase tracking-widest italic">Return to Hub</span>
        </Link>
        <div className="text-xl font-black italic tracking-tighter uppercase text-primary">OnChain Pulse Terminal</div>
        <div className="w-24" /> {/* Spacer */}
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-40">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Radar Visual Area (Placeholder for Three.js Radar) */}
          <div className="w-full md:w-2/3 aspect-video bg-zinc-950 border border-white/5 rounded-[3rem] relative overflow-hidden flex items-center justify-center group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,156,18,0.1),transparent_70%)]" />
             <div className="relative flex flex-col items-center gap-6">
                <Radar size={80} className="text-primary animate-pulse" />
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.5em]">Initializing Whale_Scanner_v1.0...</span>
             </div>
             
             {/* Overlay de bloqueo (Soft-Gate) */}
             <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center">
                <Lock size={48} className="text-primary mb-6" />
                <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Access Restricted</h2>
                <p className="text-zinc-400 max-w-md mb-10 text-lg">Whale movement data is exclusive to verified OnChain Pulse operators.</p>
                <button className="h-14 px-10 bg-primary text-black rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all">
                  UNLOCK WITH PARTNER ACCOUNT
                </button>
                <span className="text-zinc-600 mt-6 text-[10px] uppercase tracking-widest">Connect Bybit / OKX to gain lifetime access</span>
             </div>
          </div>

          {/* Stats Sidebar */}
          <div className="w-full md:w-1/3 space-y-6">
             <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl">
                <div className="flex items-center gap-3 text-primary mb-6">
                   <BarChart3 size={20} />
                   <span className="text-xs font-black uppercase tracking-widest">Network Load</span>
                </div>
                <div className="space-y-4">
                   {[
                     { label: 'Base Liquidity', val: 'High' },
                     { label: 'Solana Volume', val: '$1.2B' },
                     { label: 'Whales Tracked', val: '1,024' }
                   ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 text-sm font-mono uppercase tracking-tighter">
                        <span className="text-zinc-500">{stat.label}</span>
                        <span className="text-white">{stat.val}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl group">
                <div className="flex items-center gap-3 text-primary mb-4">
                   <Zap size={20} />
                   <span className="text-xs font-black uppercase tracking-widest">Latest Alert</span>
                </div>
                <p className="text-zinc-400 text-sm font-light italic leading-relaxed">Large inflow of $USDC detected in micro-cap Base sectors. Analyzing smart contracts...</p>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
