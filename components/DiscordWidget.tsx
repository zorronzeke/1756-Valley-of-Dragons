'use client';
import React from 'react';

type Props = {
  invite: string;        // your invite URL
  serverId?: string;     // optional Discord Server ID for the embedded widget
};

export default function DiscordWidget({ invite, serverId }: Props) {
  const hasWidget = !!serverId;
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5">
      <h3 className="font-semibold">Discord</h3>
      <p className="text-slate-100/90 text-sm mt-2">
        Join our server to chat with officers, ask questions, and see announcements in real time.
      </p>

      <div className="mt-4 flex flex-col gap-4">
        {hasWidget ? (
          <iframe
            title="VoD Discord Widget"
            src={`https://discord.com/widget?id=${serverId}&theme=dark`}
            width="100%"
            height="350"
            allowTransparency={true}
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-xl border border-white/10"
          />
        ) : (
          <div className="rounded-xl border border-white/10 p-4 text-slate-300/90 text-sm">
            Discord server widget isn’t enabled yet. You can still join using the button below.
            <div className="mt-2 text-xs text-slate-400">
              (To enable later: <b>Server Settings → Widget</b> and copy the <b>Server ID</b>.)
            </div>
          </div>
        )}

        <a
          href={invite}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-slate-900 font-semibold"
        >
          Join VoD on Discord
        </a>
      </div>
    </div>
  );
}
