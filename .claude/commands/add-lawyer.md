Add a new lawyer to the VakilConnect lawyer directory.

Ask the user for the following details (or accept them if already provided):
- Full name (include "Adv." prefix)
- Specialization areas (e.g. Property, Divorce, Criminal, Civil, Consumer, Corporate, Family, Women Rights, Real Estate, Defense)
- City (must be an Indian Tier 1 city: Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata)
- Years of experience
- Social score (1–100, representing community trust based on reviews)
- Phone number (Indian format: +91 XXXXX XXXXX)
- LinkedIn URL
- Hourly fee (in ₹)
- Verified status (true/false)

Then:
1. Read `lib/mockData.ts`
2. Generate a unique id (next number after the last entry)
3. Add the new lawyer object to the LAWYERS array following the exact schema in CLAUDE.md
4. Confirm the addition by showing the user the new entry

Schema reminder:
```typescript
{
  id: string,
  name: string,
  specialization: string[],
  city: string,
  experience: number,
  socialScore: number,
  phone: string,
  linkedin: string,
  fee: string,        // format: "₹X,XXX/hr"
  verified: boolean
}
```
