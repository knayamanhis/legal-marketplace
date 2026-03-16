Add a new case type to the VakilConnect case directory.

Ask the user for the following details (or accept them if already provided):
- Case type title (e.g. "Cybercrime", "Tax Dispute")
- Emoji icon that represents it
- One-sentence description (plain language, no jargon)
- Common documents needed (list of 3–5 document names)
- Relevant Indian acts (list of 1–3 act names with year)

Then:
1. Read `lib/mockData.ts`
2. Generate a unique id (lowercase, hyphenated version of the title e.g. "tax-dispute")
3. Add the new case type object to the CASE_TYPES array following the exact schema in CLAUDE.md
4. Show the user the new entry to confirm

Schema reminder:
```typescript
{
  id: string,
  title: string,
  icon: string,           // emoji
  description: string,    // one sentence, plain language
  commonDocuments: string[],
  relevantActs: string[]  // format: "Act Name, Year"
}
```

Important: Keep descriptions accessible to non-lawyers. Avoid legal jargon.
