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
      <body className="relative">
        {/* SITE-WIDE BACKGROUND — Po */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/Po.png?v=9')" }}
        />
        {/* READABILITY OVERLAY (tweak opacity as you like) */}
        <div className="fixed inset-0 -z-5 bg-slate-950/75" />

        {children}
      </body>
    </html>
  )
}
