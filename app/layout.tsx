import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VoD — Valley of Dragons (State 1756)',
  description: 'Alliance hub for Whiteout Survival — rules, rosters, playbooks, and tools.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
