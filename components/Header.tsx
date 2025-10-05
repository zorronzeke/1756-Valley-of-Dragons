import React from 'react';

export default function Header() {
  const nav = [
    {label:'Home', href:'#home'},
    {label:'Announcements', href:'#announcements'},
    {label:'Alliances', href:'#alliances'},
    {label:'NAP Rules', href:'#nap'},
    {label:'Events', href:'#events'},
    {label:'Tools', href:'#tools'},
    {label:'Join', href:'#join'},
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-sky-400/20 grid place-items-center">🐉</div>
          <span className="font-bold text-lg tracking-wide">VoD • Valley of Dragons</span>
          <span className="ml-2 text-xs text-slate-400">State 1756</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map(n => <a key={n.href} className="hover:text-sky-300 transition" href={n.href}>{n.label}</a>)}
        </nav>
        <a href="#join" className="md:inline-flex hidden px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold">Join</a>
      </div>
    </header>
  );
}
