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

This app was built entirely using **Claude Code**, guided by a project-specific system of context files, skills, and agents defined in the `.claude/` folder.

**1. CLAUDE.md — Always-On Project Context**
The `CLAUDE.md` file at the root of this project loads automatically into every Claude Code session. It gives Claude persistent awareness of what VakilConnect is, the tech stack, brand colors, data schemas, constraints (no backend, no real payments, Indian law only), brand voice guidelines, and available skills and agents. Without it, Claude would need to be re-briefed every session. With it, every conversation starts fully informed.

**2. Skills — Repeatable Tasks via `/commands`**
Skills live in `.claude/commands/` as markdown files. Each one is a prompt template triggered by a slash command:
- `/add-lawyer` — guides Claude to collect lawyer details and add a correctly-typed entry to `lib/mockData.ts`
- `/add-case` — adds a new case type with documents and relevant Indian acts
- `/update-responses` — adds or updates a keyword → legal response mapping in `lib/legalResponses.ts`, optionally calling the `legal-researcher` agent first
- `/deploy` — runs `git add`, `git commit`, `git push`, and confirms the live Vercel URL

Skills enforce consistency. Without `/add-lawyer`, a developer might add a lawyer with the wrong schema, missing fields, or wrong fee format. The skill makes the right way the easy way.

**3. Agents — Specialised Sub-tasks**
Agents live in `.claude/agents/` and are spun up as independent Claude instances with a focused role:
- `legal-researcher` — given a legal topic, researches Indian law and returns a structured `LegalResponse` object (summary, key points, relevant acts, disclaimer) ready to drop into `legalResponses.ts`. Ensures all AI responses are accurate, India-specific, and follow the correct schema.
- `ux-reviewer` — reviews any page or component against trust, clarity, friction, emotional tone, and mobile readiness criteria, with the Indian urban legal user in mind. Returns actionable findings without touching code.

**4. Planning — Structured Blueprint Before Any Code**
Before a single file was written, a `Plan` agent was invoked. It received the full brief from `legal App.txt`, analyzed requirements, and produced a detailed implementation plan covering: file structure, component breakdown, mock data schemas, routing, state management approach, and step-by-step build order. The plan was reviewed and approved before Claude wrote any code — preventing mid-build architectural decisions and ensuring the entire app was coherent from the start.

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
