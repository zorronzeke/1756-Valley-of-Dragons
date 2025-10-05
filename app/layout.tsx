import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VoD — Valley of Dragons (State 1756)',
  description: 'Alliance hub for Whiteout Survival — rules, rosters, playbooks, and tools.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-transparent">
        {/* Layer 1: Po site-wide background */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Po.png?v=11')" }}
        />

        {/* Layer 2: Dark overlay for readability (tweak opacity as you like) */}
        <div className="fixed inset-0 z-10 bg-slate-950/75" />

        {/* Layer 3: Your app content above everything */}
        <div className="relative z-20">
          {children}
        </div>
      </body>
    </html>
  )
}
