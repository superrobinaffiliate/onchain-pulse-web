"use client"
import { useState, useEffect } from 'react'
import VisualPulse from '../components/VisualPulse'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Globe, Layers, ArrowRight, Activity, Terminal } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <div className="relative min-h-screen bg-black text-slate-100 font-sans antialiased selection:bg-primary selection:text-black">
      <VisualPulse />
      
      {/* Glow Superior */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] pointer-events-none z-0" />

      {/* Nav Pro */}
      <nav className="relative z-50 flex justify-between items-center p-6 lg:px-20 max-w-[1600px] mx-auto border-b border-white/5 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(243,156,18,0.4)]">
            <Terminal size={24} className="text-black" />
          </div>
          <span className="text-2xl font-black italic tracking-tighter uppercase">OnChain Pulse</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase">
          {['Intelligence', 'Ecosystem', 'Capital'].map((item) => (
            <span key={item} className="cursor-pointer hover:text-primary transition-all hover:tracking-[0.5em]">
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Badge variant="outline" className="hidden md:flex border-primary/30 text-primary bg-primary/5 px-4 py-1.5 gap-2 animate-pulse font-mono font-bold">
            <div className="w-2 h-2 bg-primary rounded-full" /> NODE_ALPHA_01
          </Badge>
          <Button className="rounded-xl font-black px-8 hover:scale-105 transition-all">CONNECT</Button>
        </div>
      </nav>

      {/* Hero Pro */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-40 pb-32 px-6 text-center max-w-7xl mx-auto">
        <div className="mb-10">
           <Badge className="px-6 py-2 text-[10px] tracking-[0.3em] uppercase font-black bg-white/5 border-white/10 text-slate-400 backdrop-blur-md">
             Global Access Protocol Enabled
           </Badge>
        </div>

        <h1 className="text-7xl md:text-[10rem] font-black tracking-[-0.06em] leading-[0.8] uppercase mb-10">
          The <span className="text-primary italic drop-shadow-[0_0_50px_rgba(243,156,18,0.5)]">Ultimate</span> <br/>
          Crypto Hub
        </h1>

        <p className="text-xl md:text-3xl text-slate-400 max-w-4xl font-extralight leading-relaxed mb-16 px-4">
          Nerve center for Web3 intelligence. We aggregate liquid data, audit hyper-growth opportunities, and deliver the pulse of the decentralized economy.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
          <Button size="lg" className="h-20 px-16 rounded-2xl font-black text-xl uppercase tracking-widest gap-4 shadow-[0_20px_40px_rgba(243,156,18,0.2)] hover:shadow-[0_20px_60px_rgba(243,156,18,0.4)] transition-all">
            ENTER TERMINAL <ArrowRight size={28} />
          </Button>
          <Button size="lg" variant="outline" className="h-20 px-16 rounded-2xl font-bold text-xl uppercase tracking-widest border-white/10 bg-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all">
            EXPLORE
          </Button>
        </div>
      </section>

      {/* Grid de Elite */}
      <section className="relative z-10 grid md:grid-cols-3 gap-10 max-w-[1400px] mx-auto px-6 pb-60">
        {[
          { 
            icon: <TrendingUp size={32} className="text-primary"/>, 
            title: "Market Alpha", 
            desc: "Institutional analysis on trending assets using proprietary AI modeling." 
          },
          { 
            icon: <Globe size={32} className="text-primary"/>, 
            title: "Web3 Mastery", 
            desc: "Master the new internet economy with curated high-yield insights." 
          },
          { 
            icon: <Layers size={32} className="text-primary"/>, 
            title: "OnChain Integrity", 
            desc: "Only audited, high-prestige recommendations pass our pulse check." 
          }
        ].map((item, i) => (
          <Card key={i} className="bg-zinc-950/20 border-white/5 rounded-[3rem] p-4 backdrop-blur-3xl hover:border-primary/40 transition-all duration-700 group shadow-2xl">
            <CardHeader className="p-10 pb-6">
              <div className="w-16 h-16 bg-zinc-900/50 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-700">
                {item.icon}
              </div>
              <CardTitle className="text-3xl font-black uppercase tracking-tighter text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0">
              <p className="text-slate-500 text-xl leading-snug font-light group-hover:text-slate-200 transition-colors duration-700">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
    </div>
  )
}
