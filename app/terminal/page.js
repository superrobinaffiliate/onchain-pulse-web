"use client"
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { Radar, ArrowLeft, BarChart3, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

// Inicializar cliente Supabase solo si existen las variables
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
        .limit(5)
      
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
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-primary selection:text-black">
      <nav className="relative z-50 flex justify-between items-center p-6 lg:px-12 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0">
        <Link href="/" className="flex items-center gap-3 text-zinc-400 hover:text-primary transition-all group">
          <div className="p-2 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">Hub v2.2 (Unlocked)</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
          <div className="text-sm font-black italic tracking-tighter uppercase text-white">Live Terminal</div>
        </div>
      </nav>

      <main className="max-w-[1800px] mx-auto p-4 lg:p-8 pb-40">
        {/* Debug Info (Visible only if error) */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 font-mono text-xs">
            SYSTEM ALERT: {error}. Check Vercel ENV Variables.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Signal Feed */}
          <div className="lg:col-span-3 space-y-6">
             <div className="flex items-center justify-between">
                <h1 className="text-2xl font-black uppercase tracking-tight italic">Active Whale Radar</h1>
                <div className="flex gap-2 text-xs font-mono text-zinc-500">
                  <span>SCANNING: SOL / BASE</span>
                  <span className="animate-pulse">●</span>
                </div>
             </div>

             <div className="grid gap-4">
                {loading ? (
                  [1,2,3].map(i => (
                    <div key={i} className="h-24 bg-zinc-900/50 rounded-2xl animate-pulse" />
                  ))
                ) : signals.length > 0 ? (
                  signals.map((signal) => (
                    <div key={signal.id} className="group relative bg-zinc-900/40 border border-white/5 hover:border-primary/50 rounded-3xl p-6 transition-all hover:bg-zinc-900/80 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black border ${signal.chain === 'solana' ? 'border-purple-500/30 bg-purple-500/10 text-purple-400' : 'border-blue-500/30 bg-blue-500/10 text-blue-400'}`}>
                          {signal.token_symbol?.[0] || '?'}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-bold text-white tracking-tight">{signal.token_name}</h3>
                            <span className="text-[10px] font-black bg-white/10 px-2 py-0.5 rounded text-zinc-400 uppercase">{signal.token_symbol}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                            <span className="flex items-center gap-1">
                              Whale: <span className="text-zinc-300">{signal.whale_address_masked}</span>
                            </span>
                            <span className="text-primary font-bold">In: ${Number(signal.accumulation_amount_usd).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 w-full md:w-auto relative z-10">
                        <a 
                          href="https://t.me/solana_trojanbot?start=r-robinhodl69" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 md:flex-none h-12 px-6 bg-primary text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(243,156,18,0.3)]"
                        >
                          <Zap size={14} className="fill-black" />
                          Snipe on TG
                        </a>
                        <a 
                          href="https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-onchainpuls"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex-1 md:flex-none h-12 px-6 bg-zinc-800 text-white border border-white/10 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-700 transition-all flex items-center justify-center gap-2"
                        >
                          <ShieldCheck size={14} />
                          Trade on CEX
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                   <div className="p-12 text-center border border-dashed border-white/10 rounded-3xl">
                      <Radar className="mx-auto text-zinc-600 mb-4" size={48} />
                      <p className="text-zinc-500 font-mono text-sm">Scanning mempool for accumulation...</p>
                   </div>
                )}
             </div>
          </div>

          <div className="space-y-4">
             <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-3xl sticky top-24">
                <div className="flex items-center gap-3 text-zinc-400 mb-6">
                   <BarChart3 size={16} />
                   <span className="text-[10px] font-black uppercase tracking-widest">Market Pulse</span>
                </div>
                <div className="space-y-1">
                   {[
                     { label: 'SOL Volume', val: '$2.4B', col: 'text-purple-400' },
                     { label: 'BASE Volume', val: '$890M', col: 'text-blue-400' },
                     { label: 'Alpha Signals', val: signals.length || '0', col: 'text-primary' }
                   ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
                        <span className="text-zinc-500 text-xs font-mono uppercase">{stat.label}</span>
                        <span className={`font-bold font-mono text-sm ${stat.col}`}>{stat.val}</span>
                     </div>
                   ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-[10px] text-zinc-600 leading-relaxed mb-4">
                    Data is sourced from on-chain liquidity pools. Copy-trading involves risk. Use our verified tools for execution.
                  </p>
                  <a 
                    href="https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-onchainpuls"
                    target="_blank"
                    className="block w-full py-3 bg-white/5 hover:bg-white/10 text-zinc-300 text-center rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors border border-white/5"
                  >
                    Create Pro Account
                  </a>
                </div>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
