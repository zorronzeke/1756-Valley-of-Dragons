import React from 'react';
import Header from '@/components/Header';
import CountdownBanner from '@/components/CountdownBanner';
import Hero from '@/components/Hero';
import { Section } from '@/components/Section';
import announcements from '@/data/announcements.json';
import alliances from '@/data/alliances.json';
import tools from '@/data/tools.json';

export default function Page() {
  return (
    <div>
      <Header />
      <div style={{position:'fixed',top:8,left:8,zIndex:99999,background:'#000',color:'#0ff',padding:'6px 10px',fontWeight:800,letterSpacing:'0.5px'}}>
  BUILD MARKER v12
</div>

      <CountdownBanner />

      <Hero />

      <Section id="announcements" title="Announcements">
        <div className="grid md:grid-cols-2 gap-5">
          {announcements.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5"
            >
              <div className="text-xs text-slate-300/90">{a.date}</div>
              <h3 className="mt-1 font-semibold text-lg">{a.title}</h3>
              <p className="mt-2 text-slate-100/95">{a.text}</p>
              <a
                href="#"
                className="mt-3 inline-block text-sky-300 hover:text-sky-200 text-sm"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="alliances" title="Alliances">
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/10 backdrop-blur-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-black/20 backdrop-blur-sm">
              <tr>
                <th className="text-left p-3">Tag</th>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Power</th>
                <th className="text-left p-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {alliances.map((r, idx) => (
                <tr key={idx} className="border-t border-white/10">
                  <td className="p-3 font-mono">{r.tag}</td>
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.power}</td>
                  <td className="p-3 text-slate-100/90">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="nap" title="NAP Rules (1756 — Old)">
        <div className="text-slate-100/95 max-w-prose">
          <p>
            This page mirrors the published Google Doc for 1756 rules. For now, treat it as
            historical/old until leadership updates the new version.
          </p>
          <p className="mt-2">
            <a
              className="text-sky-300 hover:text-sky-200"
              href="https://docs.google.com/document/d/e/2PACX-1vRoZ9BmAn9uODwywgOUL7fPbW7rF5xVrIPaQ8v-8vvmqyXFk5-Yhoar1IiQY5dcMPWQjDDY6F2lp8Cf/pub"
              target="_blank"
            >
              Open the authoritative doc →
            </a>
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5 prose prose-invert max-w-none">
          <h3>Highlights</h3>
          <ul>
            <li>NAP 4 alliances & academies; DBZ removed (2025-06-23).</li>
            <li>Rules: No attacks between NAP, no unauthorized scouting, no poaching.</li>
            <li>Progressive discipline: debuffs + restitution and escalation.</li>
            <li>BIA (kill event) rules + changes effective 2025-04-10.</li>
            <li>Fortress/Stronghold allocation by SvS Prep ranking (updates 2025-06-10).</li>
            <li>Sunfire Castle rotation: VoD → AOW → BCE → OPS.</li>
          </ul>
        </div>
      </Section>

      <Section id="events" title="Events">
        <div className="grid md:grid-cols-3 gap-5">
          {['SvS','Foundry Battle','Alliance Championship'].map((e) => (
            <div
              key={e}
              className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5"
            >
              <h3 className="font-semibold">{e}</h3>
              <p className="mt-2 text-slate-100/90 text-sm">
                Add dates, captains, and rally plans. You can embed a public Google Calendar here.
              </p>
              <a href="#" className="mt-3 inline-block text-sky-300 hover:text-sky-200 text-sm">
                Open playbook →
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="tools" title="Tools">
        <div className="grid md:grid-cols-3 gap-5">
          {tools.map((t) => (
            <a
              key={t.name}
              href={t.href}
              className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5 block hover:border-white/20"
              target="_blank"
            >
              <div className="font-semibold">{t.name}</div>
              <div className="text-slate-100/90 text-sm mt-1">{t.desc}</div>
            </a>
          ))}
        </div>
      </Section>

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

          <div className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5">
            <h3 className="font-semibold">Discord</h3>
            <p className="text-slate-100/90 text-sm mt-2">
              Embed your Discord widget or invite here so applicants can chat with officers.
            </p>
            <div className="mt-4 aspect-video rounded-xl border border-white/10 grid place-items-center text-slate-200/80 text-sm">
              Discord Widget Placeholder
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-300">© {new Date().getFullYear()} VoD • Valley of Dragons — Community site.</div>
          <div className="text-sm text-slate-300">Not affiliated with Century Games.</div>
        </div>
      </footer>
    </div>
  );
}
