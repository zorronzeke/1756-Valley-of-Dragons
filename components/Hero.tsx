'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* BACKGROUND — Po full-bleed */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/Po.png?v=5')" }} // cache-bust
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
            <a href="#announcements" className="px-4 py-2 rounded-xl bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400">Latest Updates</a>
            <a href="#tools" className="px-4 py-2 rounded-xl border border-slate-200/30 hover:border-slate-200/60 backdrop-blur">Tools</a>
            <a href="#join" className="px-4 py-2 rounded-xl border border-sky-400 text-sky-200 hover:bg-sky-400/10">Apply</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
