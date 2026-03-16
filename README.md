# VakilConnect — Legal Marketplace for India

India's trusted legal marketplace that connects upper and middle-class citizens in Tier 1 cities with verified advocates, delivers AI-powered legal guidance, and makes the legal system less intimidating — all in one place.

---

## Problem Statement

Navigating the Indian legal system is overwhelming for the average citizen. Most people don't know which lawyer to trust, can't afford a consultation just to understand their basic rights, and have no way to evaluate a lawyer's credibility beyond word-of-mouth. The result: people either overpay, get misled, or give up on legitimate legal claims entirely. VakilConnect solves this by giving users instant AI-powered legal guidance for free, and connecting them with verified, socially-scored lawyers for a nominal fee — removing the fear and friction from the first step of the legal journey.

---

## Features

- **Hero Landing Page** — clear value proposition with CTAs to post a query or find a lawyer
- **Common Legal Matters** — 8 case type cards (Property, Divorce, Criminal, Consumer, Civil, Landlord-Tenant, Inheritance, Workplace Harassment) with relevant acts and documentation guides
- **Find a Lawyer Teaser** — browse lawyer profiles with specializations and social trust scores; contact details locked behind a query
- **Recent Legal News** — 5 curated legal developments with category tags and source attribution
- **Testimonials** — real user reviews with star ratings, case types, and cities
- **Post a Testimony** — submit your own review, stored locally in the browser
- **Auth (Sign Up / Log In)** — lightweight client-side authentication using localStorage
- **AI Legal Query (Dashboard)** — describe your issue in plain language and receive an AI-generated summary, key legal points, and relevant Indian acts
- **Lawyer Unlock (₹20 Paywall)** — pay a nominal fee to unlock a curated, filtered list of verified lawyers relevant to your specific case type
- **Lawyer Profiles** — name, city, experience, specialization, social trust score (color-coded), direct phone number, LinkedIn, and fee

---

## Tech Stack

- **Framework** — Next.js 16 with App Router
- **Language** — TypeScript
- **Styling** — Tailwind CSS with custom navy and gold palette
- **Auth** — Client-side localStorage (no backend required for MVP)
- **Data** — Mock data for lawyers, testimonials, case types, and legal news
- **AI Responses** — Keyword-matched static legal response library (maps query topics to curated Indian law summaries)
- **Hosting** — Vercel (auto-deploys on every GitHub push)
- **Version Control** — GitHub (private repository)

---

## Architecture & Flow

### How This App Was Built — The Claude Code Flow

This app was built entirely using **Claude Code**. Here is the exact sequence of what happened.

---

**Step 1 — The Brief (`legal App.txt`)**
The process started with a plain text document describing the product vision: a legal marketplace for India, the user journey, pain points, and desired features. This was passed directly to Claude Code as context — no formal spec, no wireframes, just a conversation transcript and a set of requirements at the bottom.

**Step 2 — Planning Agent**
Before any code was written, Claude Code invoked a `Plan` sub-agent. This is a specialised Claude instance whose only job is architecture. It received the full brief, analysed requirements, and returned a detailed implementation plan covering:
- Exact folder and file structure
- All mock data schemas (Lawyer, CaseType, Testimonial, NewsItem, LegalResponse)
- Component breakdown and responsibilities
- Page routing (`/`, `/auth`, `/dashboard`)
- State management approach (localStorage auth, local useState for dashboard)
- Step-by-step build order to avoid broken states mid-build

The plan was reviewed and approved before a single file was written.

**Step 3 — Scaffolding**
Claude Code ran `npx create-next-app@latest` to scaffold the Next.js project, then created all required directories (`components/`, `lib/`, `hooks/`, `types/`, `app/auth/`, `app/dashboard/`).

**Step 4 — Build (All Files Written by Claude)**
Following the approved plan in order, Claude Code wrote every file from scratch:
- `types/index.ts` — all TypeScript interfaces
- `lib/mockData.ts` — 10 lawyers, 8 case types, 6 testimonials, 5 news items
- `lib/legalResponses.ts` — 6 keyword-matched legal response objects covering property, divorce, criminal, consumer, landlord, and inheritance law
- `lib/auth.ts` + `hooks/useAuth.ts` — client-side auth using localStorage
- All UI components (Button, Card, Badge), layout (Navbar, Footer), home sections, and dashboard components
- All pages (`app/page.tsx`, `app/auth/page.tsx`, `app/dashboard/page.tsx`, `app/layout.tsx`)

**Step 5 — Build Verification**
`npm run build` was run to confirm zero TypeScript errors and successful compilation before any deployment.

**Step 6 — GitHub**
Claude Code used the GitHub CLI (`gh`) to initialise a git repo, commit all files, create a private GitHub repository, and push the code — all in one sequence without the user touching the terminal.

**Step 7 — Deployment**
Claude Code ran `vercel --prod --yes` to deploy directly to Vercel. The build completed on Vercel's servers and the app went live at `https://legal-marketplace-five.vercel.app`.

---

**Step 8 — Project Infrastructure (Added After Launch)**
Once the app was live, Claude Code set up the project's ongoing maintenance infrastructure:

- **`CLAUDE.md`** — written and added to the project root. This file now loads automatically at the start of every future Claude Code session, giving Claude persistent awareness of the tech stack, data schemas, brand constraints, and brand voice — without needing to re-brief it each time.

- **Skills** (`.claude/commands/`) — four slash commands created for repeatable tasks:
  - `/add-lawyer` — enforces correct schema when adding new lawyers to `mockData.ts`
  - `/add-case` — adds new case types with documents and Indian acts
  - `/update-responses` — adds or updates keyword → legal response mappings
  - `/deploy` — stages, commits, pushes, and confirms the live Vercel URL

- **Agents** (`.claude/agents/`) — two specialised sub-agents defined for ongoing work:
  - `legal-researcher` — researches Indian law for a given topic and returns a correctly structured `LegalResponse` object ready to add to `legalResponses.ts`
  - `ux-reviewer` — reviews any page or component for trust, clarity, friction, and mobile readiness, specifically for the Indian urban legal user

These are not used yet — they exist so that future work on this project is consistent, structured, and doesn't require Claude to guess at schemas, brand rules, or content standards.

---

### Application Flow — When a User Visits the Site

```
User visits legal-marketplace-five.vercel.app
        ↓
Vercel serves the Next.js app from its global CDN
        ↓
Browser downloads HTML + JS bundle
        ↓
React hydrates — page becomes interactive (client-side)
        ↓
Public home page renders (Server Component — no auth needed)
  → HeroSection, CaseTypesSection, FindLawyerTeaser,
    TestimonialsSection, NewsSection, PostTestimony
```

---

### Auth Flow — When a User Signs Up

```
User fills sign up form on /auth
        ↓
useAuth hook calls setUser() — writes { name, email } to localStorage
        ↓
State updates → isLoggedIn becomes true
        ↓
router.push("/dashboard") → user lands on dashboard
        ↓
Navbar re-renders with user avatar + logout button
        ↓
On next visit: useEffect reads localStorage on mount → auto-restores session
```

No server call is made. Auth is entirely client-side for this MVP.

---

### Query & AI Response Flow — When a User Posts a Legal Query

```
User types query in Dashboard → clicks "Get Legal Guidance"
        ↓
handleQuery() called in app/dashboard/page.tsx
        ↓
getLegalResponse(query) called from lib/legalResponses.ts
  → query lowercased → scanned for keywords (property, divorce, criminal...)
  → matched keyword returns curated LegalResponse object
  → fallback returns default response if no keyword matched
        ↓
1.2s simulated delay (UX: shows "Analysing..." state)
        ↓
AIResponseCard renders: summary + key points + relevant Indian acts + disclaimer
        ↓
PaywallCard renders below: "Pay ₹20 to unlock lawyers"
```

Note: In the MVP, there is no real LLM call — responses are pre-authored legal summaries mapped to keywords. The architecture is designed so this layer can be replaced with a real API call (e.g. Claude API or Gemini) without changing any other component.

---

### Lawyer Unlock Flow — After the ₹20 Payment

```
User clicks "Pay ₹20 & Unlock Lawyers"
        ↓
onUnlock() called in PaywallCard → triggers handleUnlock() in dashboard
        ↓
Query string scanned for topic keywords
        ↓
LAWYERS array filtered by matching specialization tags
  → e.g. "divorce" query → filters lawyers with ["Divorce", "Family"] specialization
  → fallback: show all 10 lawyers if no match
        ↓
Filtered lawyers sorted by socialScore descending
        ↓
LawyersList component renders: name, verified badge, specializations,
social score bar (green/yellow/red), phone number, LinkedIn, fee
```

---

### Client vs Server

| Layer | Runs On | Examples |
|---|---|---|
| Server (Vercel) | Cloud | Serving HTML/JS, static page generation |
| Client (Browser) | User's device | Auth state, query logic, lawyer filtering, all UI interactions |

This app is almost entirely client-side after the initial page load. Vercel's job is to serve the files — everything else happens in the browser.
