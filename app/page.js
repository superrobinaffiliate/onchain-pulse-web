"use client"
import { useState, useEffect } from 'react'
import VisualPulse from '../components/VisualPulse'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { TrendingUp, Globe, Layers, ArrowRight, Monitor, Activity } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <div className="relative min-h-screen bg-black text-slate-100 selection:bg-primary selection:text-black font-sans antialiased">
      <VisualPulse />
      
      {/* Deep Gradient Background Layer */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(243,156,18,0.1),transparent_70%)] pointer-events-none z-10" />

      {/* Navigation */}
      <nav className="relative z-30 flex justify-between items-center p-6 lg:px-16 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-black text-black italic text-xl">P</div>
          <span className="text-xl font-black italic tracking-tighter uppercase">OnChain Pulse</span>
        </div>
        
        <div className="hidden md:flex space-x-12">
          {['Intelligence', 'Ecosystem', 'Capital'].map((item) => (
            <span key={item} className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase cursor-pointer hover:text-primary transition-colors">
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="outline" className="hidden sm:flex border-primary/20 text-primary bg-primary/5 gap-1 animate-pulse font-mono">
            <Activity size={12} /> LIVE_NODE_01
          </Badge>
          <Button size="sm" className="rounded-full font-bold">Connect</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center max-w-6xl mx-auto">
        <div className="mb-8 scale-90">
           <Badge className="px-4 py-1 text-[10px] tracking-[0.2em] uppercase font-black bg-zinc-900 border-zinc-800 text-slate-400">
             Infrastructure Status: Operational
           </Badge>
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-[calc(-0.04em)] leading-[0.85] uppercase mb-8">
          The Ultimate <br/>
          <span className="text-primary italic drop-shadow-[0_0_30px_rgba(243,156,18,0.3)]">Crypto Hub</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed mb-12">
          The definitive nerve center for Web3 intelligence. We aggregate data, audit opportunities, and deliver the pulse of the decentralized economy.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Button size="lg" className="h-16 px-10 rounded-2xl font-black text-lg uppercase tracking-wider gap-3 group transition-all hover:scale-105 active:scale-95">
            ENTER TERMINAL <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl font-bold text-lg uppercase tracking-wider border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
            VIEW ECOSYSTEM
          </Button>
        </div>
      </section>

      {/* Grid of Elite Components */}
      <section className="relative z-20 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-24 px-6 pb-40">
        {[
          { 
            icon: <TrendingUp size={28} className="text-primary"/>, 
            title: "Market Alpha", 
            desc: "Institutional-grade analysis on trending assets and emerging protocols using advanced AI modeling." 
          },
          { 
            icon: <Monitor size={28} className="text-primary"/>, 
            title: "Web3 Mastery", 
            desc: "Your gateway to mastering the new internet economy with curated insights and high-value tools." 
          },
          { 
            icon: <Layers size={28} className="text-primary"/>, 
            title: "OnChain Integrity", 
            desc: "Only audited, high-prestige recommendations pass our rigorous proprietary pulse check system." 
          }
        ].map((item, i) => (
          <Card key={i} className="bg-zinc-950/40 border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-2xl hover:border-primary/40 transition-all duration-500 group cursor-default">
            <CardHeader className="p-10 pb-4">
              <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <CardTitle className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0">
              <p className="text-slate-500 text-lg leading-snug font-light group-hover:text-slate-300 transition-colors">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer Overlay Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </div>
  )
}
