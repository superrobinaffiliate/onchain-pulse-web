"use client"
import { Twitter, Instagram, Youtube, PlayCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-50 border-t border-white/5 bg-black py-20 px-8 lg:px-20">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="text-2xl font-black italic tracking-tighter uppercase text-primary mb-6">OnChain Pulse</div>
          <p className="text-zinc-500 text-sm leading-relaxed font-light">
            The definitive nerve center for Web3 intelligence. Precision data for the decentralized economy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Intelligence</span>
            <span className="text-zinc-600 text-sm hover:text-primary cursor-not-allowed transition-all">Alpha Terminal</span>
            <span className="text-zinc-600 text-sm hover:text-primary cursor-not-allowed transition-all">Risk Audit</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Network</span>
            <div className="flex gap-6 text-zinc-500 mt-2">
              <Twitter size={20} className="hover:text-primary cursor-pointer transition-all" />
              <Instagram size={20} className="hover:text-primary cursor-pointer transition-all" />
              <Youtube size={20} className="hover:text-primary cursor-pointer transition-all" />
              <PlayCircle size={20} className="hover:text-primary cursor-pointer transition-all" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">© 2026 ONCHAIN PULSE LABS. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8 text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
          <span className="cursor-not-allowed">Terms</span>
          <span className="cursor-not-allowed">Privacy</span>
        </div>
      </div>
    </footer>
  )
}
