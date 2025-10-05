'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* BACKGROUND — Po full-bleed */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/Po.png?v=1')" }} // v=1 busts cache
      />

      {/* READABILITY OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-900/80" />

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl/tight md:text-5xl/tight font-extrabold drop-shadow">
            Valley of Dragons
            <span className="block text-sky-300">Whiteout Survival • Alliance VoD</span>
          </h1>
          <p className="mt-4 text-slate-100/90 max-w-prose drop-shadow">
            A home for our warriors, planners, and panda enthusiasts. Find rules, rosters, event playbooks, and tools to level up your gameplay.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#announcements"
              className="px-4 py-2 rounded-xl bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400"
            >
              Latest Updates
            </a>
            <a
              href="#tools"
              className="px-4 py-2 rounded-xl border border-slate-200/30 hover:border-slate-200/60 backdrop-blur"
            >
              Tools
            </a>
            <a
              href="#join"
              className="px-4 py-2 rounded-xl border border-sky-400 text-sky-200 hover:bg-sky-400/10"
            >
              Apply
            </a>
          </div>
        </motion.div>

        {/* Right side card — optional, you can delete this whole block if you just want Po */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 border border-slate-800 shadow-2xl p-6">
            <div className="absolute inset-0 rounded-2xl bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
            <div className="relative grid grid-cols-3 gap-3 h-full">
              {['Foundry Plan','NAP 4','Rosters','SvS','Championship','Bear Rally'].map((t,i)=>(
                <div
                  key={i}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 flex items-center justify-center text-center text-sm"
                >
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
