"use client"
import { useState, useEffect } from 'react'
import VisualPulse from '../components/VisualPulse'
import { Button } from "@/components/ui/card" 
import { ArrowRight, Zap, Shield, Search } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased selection:bg-primary selection:text-black">
      {/* El Pulso - Fondo 3D */}
      <VisualPulse />
      
      {/* Gradiente de fondo sutil */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black pointer-events-none z-10" />

      {/* Nav Minimalista */}
      <nav className="relative z-50 flex justify-between items-center p-8 lg:px-20 max-w-[1600px] mx-auto">
        <div className="text-2xl font-black italic tracking-tighter uppercase text-primary">OnChain Pulse</div>
        <div className="hidden lg:flex items-center gap-16 text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase">
          <span className="hover:text-primary transition-all">Alpha</span>
          <span className="hover:text-primary transition-all">Vault</span>
          <span className="hover:text-primary transition-all">Terminal</span>
        </div>
        <button className="bg-white text-black px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary transition-all">
          Connect
        </button>
      </nav>

      {/* Hero Elevated */}
      <section className="relative z-20 flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-[11rem] font-black tracking-[-0.07em] leading-[0.8] uppercase mb-12">
          The <span className="text-primary italic">Ultimate</span> <br/>
          Crypto Hub
        </h1>

        <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl font-light leading-relaxed mb-16">
          The definitive nerve center for Web3 intelligence. We aggregate data, audit opportunities, and deliver the pulse of the decentralized economy.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="h-16 px-12 bg-primary text-black rounded-2xl font-black text-lg uppercase tracking-tighter flex items-center gap-4 hover:scale-105 transition-all shadow-[0_0_40px_rgba(243,156,18,0.2)]">
            ENTER TERMINAL <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* SECCIÓN NUEVA: Live Pulse Scanner */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 mb-40">
        <div className="w-full bg-zinc-950/50 border border-white/5 rounded-[3rem] p-12 backdrop-blur-3xl overflow-hidden relative">
          {/* Efecto de Pulso de Escaneo */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-[scan_4s_linear_infinite] z-0" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-md">
              <div className="flex items-center gap-2 text-primary mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="text-xs font-black uppercase tracking-widest">Live Pulse Stream</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">Scanning for Alpha.</h2>
              <p className="text-zinc-500 text-lg leading-snug">Our engine processes real-time on-chain liquidity to detect institutional movements before they hit the charts.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {[
                { label: 'Volume 24h', value: '.2B' },
                { label: 'Active Nodes', value: '128' },
                { label: 'Alpha Score', value: '98.2' },
                { label: 'Sec Audits', value: 'Ready' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-600 uppercase mb-1">{stat.label}</span>
                  <span className="text-2xl font-black text-white tabular-nums">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA: The Arsenal (Donde venderemos) */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 pb-60">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Elite <span className="text-primary italic">Arsenal</span></h2>
          <p className="text-zinc-500 mt-4 uppercase text-xs font-bold tracking-[0.3em]">Audited recommendation layer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Search />, title: "Precision Search", desc: "Find audited protocols with verified yield potential." },
            { icon: <Shield />, title: "Security First", desc: "Hardware and software protection for the modern whale." },
            { icon: <Zap />, title: "Instant Alpha", desc: "Direct access to gated opportunities and private rounds." }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-primary/40 transition-all duration-700 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-zinc-500 text-lg leading-snug font-light group-hover:text-zinc-300 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estilos Extra para la Animación de Escaneo */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
