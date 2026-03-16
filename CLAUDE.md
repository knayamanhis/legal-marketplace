# VakilConnect — Project Context

## What This Is

VakilConnect is a legal marketplace web app for India, targeting upper and middle-class citizens in Tier 1 cities (Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata). It helps users understand their legal rights, find verified advocates, and take the first step in their legal journey — without fear or friction.

---

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS — navy (`#1e3a5f`) and gold (`#e6b800`) are the primary brand colors
- **Auth:** Client-side localStorage only (no backend). Key: `lm_user`. Shape: `{ name: string, email: string }`
- **Data:** All mock data lives in `lib/mockData.ts`
- **AI Responses:** Keyword-matched static responses in `lib/legalResponses.ts`
- **Deployment:** Vercel — auto-deploys on every push to GitHub (`master` branch)
- **Repo:** `github.com/knayamanhis/legal-marketplace` (private)

---

## File Structure

```
app/
  page.tsx          — public home page
  auth/page.tsx     — login / signup
  dashboard/page.tsx — protected: query → AI response → lawyer unlock
components/
  home/             — HeroSection, CaseTypesSection, NewsSection, FindLawyerTeaser, TestimonialsSection, PostTestimony
  dashboard/        — QueryForm, AIResponseCard, PaywallCard, LawyersList
  layout/           — Navbar, Footer
  ui/               — Button, Card, Badge
lib/
  mockData.ts       — all lawyers, case types, testimonials, news items
  legalResponses.ts — keyword → LegalResponse map
  auth.ts           — localStorage helpers
hooks/
  useAuth.ts        — React auth hook
types/
  index.ts          — all TypeScript interfaces
```

---

## Data Schemas

### Lawyer
```typescript
{ id, name, specialization: string[], city, experience: number, socialScore: number, phone, linkedin, fee, verified: boolean }
```

### CaseType
```typescript
{ id, title, icon, description, commonDocuments: string[], relevantActs: string[] }
```

### LegalResponse
```typescript
{ summary, keyPoints: string[], relevantActs: string[], disclaimer }
```

---

## Constraints

- No backend or database — everything is client-side for the MVP
- No real payments — the ₹20 paywall is a UI mock (instant unlock on click)
- No real LLM calls — AI responses are pre-authored, keyword-matched static content
- Cannot change the navy/gold brand palette
- All legal content must be specific to Indian law (acts, courts, procedures)
- Always add the standard disclaimer to legal responses: "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation."

---

## Brand Voice

- Professional, trustworthy, warm
- Speaks to educated urban Indians who are unfamiliar with legal processes
- Never use legal jargon without explaining it
- Always reassuring — legal help should feel accessible, not intimidating
- Use: "verified advocate", "your rights", "we're here to help"
- Avoid: aggressive CTAs, fear-based messaging, overpromising outcomes

---

## Available Skills

- `/add-lawyer` — add a new lawyer to mockData.ts
- `/add-case` — add a new case type to mockData.ts
- `/update-responses` — add or update a keyword response in legalResponses.ts
- `/deploy` — commit, push to GitHub, and deploy to Vercel

## Available Agents

- `legal-researcher` — research Indian law for a topic, return structured response
- `ux-reviewer` — review a page/component for UX and conversion improvements
