Add or update a keyword-matched legal response in VakilConnect's AI response library.

Ask the user:
1. What topic/keyword should trigger this response? (e.g. "cybercrime", "tax", "employment")
2. Should this be a new response or an update to an existing one?
3. If new: provide the content, OR ask the `legal-researcher` agent to research it first.

Then:
1. Read `lib/legalResponses.ts`
2. Add or update the response following this structure:
```typescript
{
  summary: string,          // 3–4 sentence plain-language overview
  keyPoints: string[],      // 4–5 actionable bullet points
  relevantActs: string[],   // Indian acts with year
  disclaimer: string        // always use the standard disclaimer from CLAUDE.md
}
```
3. Also add any alias keywords that should map to this response (e.g. "cyber" → "cybercrime")
4. Show the user the new/updated entry to confirm

Important rules:
- All content must be specific to Indian law
- No legal jargon without plain-language explanation
- Always include the standard disclaimer
- keyPoints should be actionable ("You can...", "File a complaint at...", "The limitation period is...")
