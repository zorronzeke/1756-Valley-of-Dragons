import React from 'react';
import Header from '@/components/Header';
import CountdownBanner from '@/components/CountdownBanner';
import Hero from '@/components/Hero';
import { Section } from '@/components/Section';
import announcements from '@/data/announcements.json';
import alliances from '@/data/alliances.json';
import tools from '@/data/tools.json';
import DiscordWidget from '@/components/DiscordWidget'; // ← ADD THIS

export default function Page() {
  return (
    <div>
      <Header />

      {/* (Optional) remove this marker when you're done verifying deploys */}
      {/* <div style={{position:'fixed',top:8,left:8,zIndex:99999,background:'#000',color:'#0ff',padding:'6px 10px',fontWeight:800,letterSpacing:'0.5px'}}>
        BUILD MARKER v12
      </div> */}

      <CountdownBanner />
      <Hero />

      {/* ... Announcements / Alliances / NAP / Events / Tools unchanged ... */}

      <Section id="join" title="Join VoD">
        <p className="text-slate-100/95 max-w-prose">
          Interested in transferring to State 1756 or applying to VoD? Fill out the form and hop into our Discord.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <form className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5">
            <label className="block text-sm">In-game Name
              <input className="mt-1 w-full bg-black/20 backdrop-blur-sm border border-white/15 rounded-xl p-2" placeholder="Po the Simp" />
            </label>
            <label className="block text-sm mt-3">State & Power
              <input className="mt-1 w-full bg-black/20 backdrop-blur-sm border border-white/15 rounded-xl p-2" placeholder="#1756 • 660M" />
            </label>
            <label className="block text-sm mt-3">Why VoD?
              <textarea className="mt-1 w-full bg-black/20 backdrop-blur-sm border border-white/15 rounded-xl p-2" rows={3} placeholder="Tell us about you" />
            </label>
            <button type="button" className="mt-4 w-full px-4 py-2 rounded-xl bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400">
              Submit (demo)
            </button>
            <p className="text-xs text-slate-300 mt-2">
              Replace with Formspree/Google Forms/Next.js API route.
            </p>
          </form>

          {/* RIGHT COLUMN: replace placeholder with working Discord card */}
          <DiscordWidget
            invite="https://discord.gg/BgygHP6wjs"
            serverId={process.env.NEXT_PUBLIC_DISCORD_WIDGET_ID} // optional, remove if not using
          />
        </div>
      </Section>

      {/* ... footer unchanged ... */}
    </div>
  );
}
