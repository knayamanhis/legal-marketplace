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

This app was built entirely using **Claude Code**, Anthropic's AI coding assistant, guided by a layered system of context and instructions:

**1. CLAUDE.md — Always-On Project Context**
The root `CLAUDE.md` file in this project loaded automatically at the start of every Claude Code session. It gave Claude persistent awareness of the Basecamp Coffee scenario, the constraints (no new budget, 3-month deadline), the brand voice, and the goals — so Claude never needed to be re-briefed between sessions.

**2. Skills — Lesson Scripts Injected on Demand**
Lessons like `/start-2-2` (Plan) and `/start-2-3` (Build & Iterate) are Skills — markdown files in `.claude/commands/` that inject a full teaching script into the conversation when invoked. When `/start-2-3` was triggered, Claude received the full lesson flow including STOP points, expected user responses, and teaching instructions. Skills made repeatable, structured lessons possible without hardcoding behavior into Claude itself.

**3. Agents — Parallel Perspectives**
During the research phase, three sub-agents were spun up simultaneously: `(ಠ_ಠ) Exec` (ROI focus), `(◠‿◠) Product Designer` (UX focus), and `(•‿•) Barista Lead` (ground-level customer reality). Each ran as an independent Claude instance with its own system prompt and tools, analyzed the loyalty program data from its perspective, and returned a synthesis. This is how the Coffee Personality Quiz concept was validated from three angles in parallel.

**4. Planning — Structured Implementation Blueprint**
Before any code was written, a `Plan` sub-agent analyzed the requirements, defined the file structure, component breakdown, mock data schemas, state management approach, and step-by-step build order. This plan was reviewed and approved before implementation began, preventing costly mid-build decisions.

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
