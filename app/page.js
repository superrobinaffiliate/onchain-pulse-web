"use client"
import { useState, useEffect } from 'react'
import VisualPulse from '../components/VisualPulse'
import Footer from '../components/Footer'
import { ArrowRight, BarChart3, Search, Shield, Zap, Radar, ShieldAlert, Map } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased selection:bg-primary selection:text-black">
      <VisualPulse />
      <div className="fixed inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black pointer-events-none z-10" />

      <nav className="relative z-50 flex justify-between items-center p-8 lg:px-20 max-w-[1600px] mx-auto">
        <div className="text-2xl font-black italic tracking-tighter uppercase text-primary">OnChain Pulse</div>
        <div className="hidden lg:flex items-center gap-16 text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase">
          <span className="hover:text-primary transition-all cursor-pointer">Terminal</span>
          <span className="hover:text-primary transition-all cursor-pointer">Vault</span>
          <span className="hover:text-primary transition-all cursor-pointer">Ecosystem</span>
        </div>
        <button className="bg-white text-black px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary transition-all">
          Connect
        </button>
      </nav>

      <section className="relative z-20 flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-[11rem] font-black tracking-[-0.07em] leading-[0.8] uppercase mb-12">
          The <span className="text-primary italic">Ultimate</span> <br/>
          Crypto Hub
        </h1>
        <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl font-light leading-relaxed mb-16">
          The definitive nerve center for Web3 intelligence. We aggregate data, audit opportunities, and deliver the pulse of the decentralized economy.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/terminal">
            <button className="h-16 px-12 bg-primary text-black rounded-2xl font-black text-lg uppercase tracking-tighter flex items-center gap-4 hover:scale-105 transition-all shadow-[0_0_40px_rgba(243,156,18,0.2)]">
              ACCESS TERMINAL <ArrowRight size={24} />
            </button>
          </Link>
        </div>
      </section>

      {/* PRODUCT GRID - NUEVA SECCIÓN DE VALOR */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 pb-60">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic">Proprietary <span className="text-primary">Intelligence</span></h2>
          <p className="text-zinc-500 mt-4 uppercase text-xs font-bold tracking-[0.4em]">Next-gen tools for the 1%</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Whale Radar - ACTIVO */}
          <Link href="/terminal" className="block group">
            <div className="p-12 h-full bg-zinc-950/40 border border-primary/20 rounded-[3rem] hover:border-primary/60 transition-all duration-700 backdrop-blur-3xl relative overflow-hidden shadow-[0_0_50px_rgba(243,156,18,0.05)]">
               <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
               </div>
               <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform shadow-[inset_0_0_20px_rgba(243,156,18,0.1)]">
                 <Radar size={32} />
               </div>
               <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">Whale Radar</h3>
               <p className="text-zinc-500 text-lg leading-relaxed font-light mb-8 italic">Institutional-grade liquidity tracking. Map whale rotation before the pump.</p>
               <span className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 Launch Terminal <ArrowRight size={14} />
               </span>
            </div>
          </Link>

          {/* Rug-Guard Audit - COMING SOON */}
          <div className="p-12 h-full bg-zinc-950/20 border border-white/5 rounded-[3rem] opacity-60 backdrop-blur-sm relative group grayscale hover:grayscale-0 transition-all duration-700 cursor-not-allowed">
             <div className="absolute top-6 right-8">
               <span className="text-[10px] font-black text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-widest">Coming Soon</span>
             </div>
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-zinc-500">
               <ShieldAlert size={32} />
             </div>
             <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-zinc-400">Rug-Guard Audit</h3>
             <p className="text-zinc-600 text-lg leading-relaxed font-light mb-8">AI-powered smart contract analyzer. De-risk your on-chain positions instantly.</p>
          </div>

          {/* Airdrop Architect - COMING SOON */}
          <div className="p-12 h-full bg-zinc-950/20 border border-white/5 rounded-[3rem] opacity-60 backdrop-blur-sm relative group grayscale hover:grayscale-0 transition-all duration-700 cursor-not-allowed">
             <div className="absolute top-6 right-8">
               <span className="text-[10px] font-black text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-widest">Coming Soon</span>
             </div>
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-zinc-500">
               <Map size={32} />
             </div>
             <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-zinc-400">Airdrop Architect</h3>
             <p className="text-zinc-600 text-lg leading-relaxed font-light mb-8">Personalized roadmap generator. Maximize yield from elite 2026 protocols.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
