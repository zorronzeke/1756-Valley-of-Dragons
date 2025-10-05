# VoD — Valley of Dragons (State 1756) Website

Next.js + Tailwind starter for your alliance hub.

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev

# 3) Build for production
npm run build && npm start
```

## Deploy to Vercel
1. Create a new project at https://vercel.com/new
2. Import this repo (GitHub/GitLab/Bitbucket) or drag-and-drop the folder.
3. Use default Next.js settings and deploy.

## Content
- Edit data in `/data/*.json` for announcements, alliances, tools.
- Update NAP link in `app/page.tsx` to your published Google Doc.
- Swap the countdown date in `components/CountdownBanner.tsx` when plans change.

## Notes
- This starter uses the App Router and dark UI with Tailwind.
- Add a form handler (Formspree/Google Forms/custom API route) to enable submissions.
- For officer editing without code, consider Notion + API or a headless CMS later.
