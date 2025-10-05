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
        {/* SITE-WIDE BACKGROUND: Po at full strength */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Po.png?v=15')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 1
          }}
        />
        {/* APP CONTENT ABOVE BACKGROUND */}
        <div className="relative z-20">
          {children}
        </div>
      </body>
    </html>
  )
}
