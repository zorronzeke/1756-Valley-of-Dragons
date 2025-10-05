'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      <div className="absolute inset-0 -z-10 bg-cover bg-center"
     style={{ backgroundImage: "url('/Po.png')" }} />
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl/tight md:text-5xl/tight font-extrabold">
            Valley of Dragons
            <span className="block text-sky-300">Whiteout Survival • Alliance VoD</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-prose">
            A home for our warriors, planners, and panda enthusiasts. Find rules, rosters, event playbooks, and tools to level up your gameplay.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#announcements" className="px-4 py-2 rounded-xl bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400">Latest Updates</a>
            <a href="#tools" className="px-4 py-2 rounded-xl border border-slate-700 hover:border-slate-500">Tools</a>
            <a href="#join" className="px-4 py-2 rounded-xl border border-sky-500 text-sky-300 hover:bg-sky-500/10">Apply</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 border border-slate-800 shadow-2xl p-6">
            <div className="absolute inset-0 rounded-2xl bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-15" />
            <div className="relative grid grid-cols-3 gap-3 h-full">
              {['Foundry Plan','NAP 4','Rosters','SvS','Championship','Bear Rally'].map((t,i)=>(
                <div key={i} className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 flex items-center justify-center text-center text-sm">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
