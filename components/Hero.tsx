'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* No background or gradient here — Po comes from layout.tsx */}

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl/tight md:text-5xl/tight font-extrabold">
            Valley of Dragons
            <span className="block text-sky-300">Whiteout Survival • Alliance VoD</span>
          </h1>
          <p className="mt-4 text-slate-100/95 max-w-prose">
            A home for our warriors, planners, and panda enthusiasts. Find rules, rosters, event playbooks, and tools to level up your gameplay.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#announcements" className="px-4 py-2 rounded-xl bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400">Latest Updates</a>
            <a href="#tools" className="px-4 py-2 rounded-xl border border-slate-300/40 hover:border-slate-300/70">Tools</a>
            <a href="#join" className="px-4 py-2 rounded-xl border border-sky-400 text-sky-200 hover:bg-sky-400/10">Apply</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
