"use client"
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { Radar, ArrowLeft, BarChart3, Lock, Zap, ExternalLink, ShieldCheck, Activity, Wifi } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null

export default function Terminal() {
  const [mounted, setMounted] = useState(false)
  const [signals, setSignals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setMounted(true)
    if (supabase) {
      fetchSignals()
      const interval = setInterval(fetchSignals, 30000)
      return () => clearInterval(interval)
    } else {
      setLoading(false)
      setError("Missing Connection Keys")
    }
  }, [])

  async function fetchSignals() {
    try {
      const { data, error } = await supabase
        .from('whale_radar')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10) // Traemos más señales para llenar la pantalla
      
      if (error) throw error
      if (data) setSignals(data)
    } catch (e) {
      console.error("Error fetching signals", e)
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return <div className="min-h-screen bg-black" />

  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono antialiased selection:bg-primary selection:text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="z-50 flex justify-between items-center px-8 py-4 border-b border-white/5 bg-[#0a0a0a]">
        <Link href="/" className="flex items-center gap-3 text-zinc-500 hover:text-primary transition-all group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exit to Hub</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 rounded-full border border-green-500/20">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">System Online</span>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Area */}
      <main className="flex-1 max-w-[1920px] mx-auto w-full p-6 lg:p-10 flex flex-col gap-8">
        
        {/* HUD / Stats Header (New Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Network Status', val: 'OPERATIONAL', icon: Wifi, col: 'text-green-400' },
            { label: 'Solana Vol (24h)', val: '$2.84B', icon: Activity, col: 'text-purple-400' },
            { label: 'Base Vol (24h)', val: '$912M', icon: Activity, col: 'text-blue-400' },
            { label: 'Active Whales', val: '1,402', icon: Radar, col: 'text-primary' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 p-5 rounded-xl flex items-center justify-between group hover:border-white/10 transition-colors">
              <div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-1">{stat.label}</div>
                <div className={`text-xl font-black tracking-tight ${stat.col}`}>{stat.val}</div>
              </div>
              <stat.icon size={24} className="text-zinc-800 group-hover:text-zinc-600 transition-colors" />
            </div>
          ))}
        </div>

        {/* Signals Section */}
        <div className="flex flex-col gap-6">
           <div className="flex items-end justify-between border-b border-white/5 pb-4">
              <div>
                <h1 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Whale Radar <span className="text-primary">v2.0</span></h1>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Real-time liquidity tracking engine</p>
              </div>
              <div className="hidden md:flex gap-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                <span>Filter: All</span>
                <span>Sort: Volume</span>
                <span>Mode: Live</span>
              </div>
           </div>

           <div className="space-y-3">
              {loading ? (
                [1,2,3,4].map(i => (
                  <div key={i} className="h-28 bg-[#0a0a0a] border border-white/5 rounded-xl animate-pulse" />
                ))
              ) : signals.length > 0 ? (
                signals.map((signal) => (
                  <div key={signal.id} className="group relative bg-[#0a0a0a] hover:bg-[#0f0f0f] border border-white/5 hover:border-primary/30 rounded-xl p-6 transition-all flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    
                    {/* Token Info */}
                    <div className="flex items-center gap-5 w-full md:w-1/4">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-xl font-black border bg-black ${signal.chain === 'solana' ? 'border-purple-900/30 text-purple-400' : 'border-blue-900/30 text-blue-400'}`}>
                        {signal.token_symbol?.[0] || '?'}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white tracking-tight">{signal.token_name}</h3>
                          <span className={`text-[9px] font-black px-1.5 py-0.5 rounded border uppercase ${signal.chain === 'solana' ? 'border-purple-500/20 text-purple-400 bg-purple-500/5' : 'border-blue-500/20 text-blue-400 bg-blue-500/5'}`}>{signal.chain}</span>
                        </div>
                        <span className="text-xs font-bold text-zinc-500">{signal.token_symbol}</span>
                      </div>
                    </div>

                    {/* Data Points */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 border-l border-white/5 pl-0 md:pl-12 w-full">
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Inflow (USD)</div>
                        <div className="text-lg font-mono font-bold text-green-400">+${Number(signal.accumulation_amount_usd).toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Whale Address</div>
                        <div className="text-sm font-mono text-zinc-400 flex items-center gap-2">
                          {signal.whale_address_masked}
                          <ExternalLink size={10} className="opacity-50" />
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Confidence</div>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${signal.confidence_score}%` }} />
                          </div>
                          <span className="text-xs font-bold text-primary">{signal.confidence_score}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                      <a 
                        href="https://t.me/solana_trojanbot?start=r-robinhodl69" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 px-8 bg-white text-black rounded-lg font-black text-[10px] uppercase tracking-[0.15em] hover:bg-primary transition-all flex items-center justify-center gap-2"
                      >
                        <Zap size={14} className="fill-black" />
                        Snipe on TG
                      </a>
                      <a 
                        href="https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-onchainpuls"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="h-12 w-12 md:w-auto md:px-6 bg-zinc-900 text-zinc-400 border border-white/10 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:text-white hover:border-white/30 transition-all flex items-center justify-center"
                        title="Trade on CEX"
                      >
                        <ShieldCheck size={16} />
                        <span className="hidden md:inline ml-2">CEX</span>
                      </a>
                    </div>

                  </div>
                ))
              ) : (
                 <div className="p-20 text-center border border-dashed border-white/10 rounded-2xl bg-[#0a0a0a]">
                    <Radar className="mx-auto text-zinc-700 mb-6 animate-spin-slow" size={64} />
                    <h3 className="text-lg font-bold text-zinc-300 mb-2">Scanning Mempool...</h3>
                    <p className="text-zinc-600 font-mono text-xs">Waiting for high-value transactions.</p>
                 </div>
              )}
           </div>
        </div>
      </main>
    </div>
  )
}
