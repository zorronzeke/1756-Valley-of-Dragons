'use client';
import React from 'react';

export default function CountdownBanner() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  // Planned return to 1756
  const target = new Date('2025-10-14T00:00:00-04:00');
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);

  return (
    <div className="bg-amber-500/10 border-b border-amber-400/20">
      <div className="max-w-6xl mx-auto px-4 py-3 text-sm flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div className="text-amber-200">
          <span className="font-semibold">Heads up:</span> VoD is currently operating in <span className="font-semibold">State 1969</span> and plans to return to <span className="font-semibold">State 1756</span> on <span className="font-semibold">Oct 14, 2025</span>.
        </div>
        <div className="text-amber-300/90 font-mono">T‑minus {days}d {hours}h {minutes}m</div>
      </div>
    </div>
  );
}
