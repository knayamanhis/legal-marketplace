import { LegalResponse } from "@/types";

const RESPONSES: Record<string, LegalResponse> = {
  property: {
    summary:
      "Property disputes in India are governed primarily by the Transfer of Property Act, 1882 and the Registration Act, 1908. If you are involved in a title dispute, ownership conflict, or encroachment issue, you have the right to approach the Civil Court for a declaration of title or injunction. It is important to gather all original documents including the sale deed, mutation records, and encumbrance certificate before consulting a lawyer.",
    keyPoints: [
      "Verify the chain of title documents going back at least 30 years",
      "A registered sale deed is the strongest proof of ownership",
      "You can file for an injunction to prevent the other party from selling or modifying the property",
      "Boundary disputes require a court-appointed survey commissioner",
      "Limitation period for property suits is generally 12 years from dispossession",
    ],
    relevantActs: ["Transfer of Property Act, 1882", "Registration Act, 1908", "Specific Relief Act, 1963", "Limitation Act, 1963"],
    disclaimer:
      "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation.",
  },

  divorce: {
    summary:
      "Divorce in India can be filed as a mutual consent divorce (faster, typically 6–18 months) or a contested divorce on specific grounds such as cruelty, desertion, or adultery. Under the Hindu Marriage Act, 1955, both spouses have equal rights to seek divorce. Maintenance, child custody, and division of matrimonial assets are decided by the family court based on each spouse's financial circumstances and the best interests of the child.",
    keyPoints: [
      "Mutual consent divorce requires 6-month cooling-off period (can be waived by court)",
      "Contested divorce grounds include cruelty, desertion (2 years), adultery, and mental disorder",
      "Interim maintenance can be claimed from the date of filing",
      "Child custody is decided on the principle of 'best interest of the child'",
      "Streedhan (wife's gifts and jewelry) must be returned regardless of divorce outcome",
    ],
    relevantActs: ["Hindu Marriage Act, 1955", "Special Marriage Act, 1954", "Hindu Adoption and Maintenance Act, 1956", "Protection of Women from Domestic Violence Act, 2005"],
    disclaimer:
      "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation.",
  },

  criminal: {
    summary:
      "If you are facing criminal charges or have been named in an FIR, you have the right to legal representation at every stage of the proceedings. Under the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, you can apply for anticipatory bail if arrest is imminent, or regular bail after arrest. The burden of proof lies entirely on the prosecution — you are presumed innocent until proven guilty.",
    keyPoints: [
      "You have the right to remain silent and cannot be compelled to testify against yourself",
      "Apply for anticipatory bail before arrest if you anticipate being arrested",
      "Police cannot detain you for more than 24 hours without producing you before a magistrate",
      "You are entitled to a copy of the FIR free of cost",
      "Bail applications must be decided within 7 days under the BNSS, 2023",
    ],
    relevantActs: ["Bharatiya Nyaya Sanhita (BNS), 2023", "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023", "Indian Evidence Act, 1872"],
    disclaimer:
      "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation.",
  },

  consumer: {
    summary:
      "The Consumer Protection Act, 2019 gives you strong rights against defective goods, deficient services, unfair trade practices, and misleading advertisements. You can file a complaint with the District Consumer Disputes Redressal Commission for claims up to ₹1 crore. The process is simple, and you do not need a lawyer for smaller claims. E-commerce platforms are now directly liable as sellers under the 2019 Act.",
    keyPoints: [
      "File complaint within 2 years of the cause of action",
      "District Commission handles claims up to ₹1 crore; State Commission up to ₹10 crore",
      "You can claim refund, replacement, compensation, and punitive damages",
      "E-commerce platforms are now liable for misleading advertisements",
      "Mediation is mandatory for eligible complaints before adjudication",
    ],
    relevantActs: ["Consumer Protection Act, 2019", "Consumer Protection (E-Commerce) Rules, 2020"],
    disclaimer:
      "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation.",
  },

  landlord: {
    summary:
      "Landlord-tenant disputes in India are governed by state-specific Rent Control Acts as well as the Transfer of Property Act, 1882. Landlords cannot evict tenants without a valid court order, even if the tenant has stopped paying rent. Tenants have the right to peaceful enjoyment of the premises and cannot be evicted by force, lockout, or cutting utilities. Rent agreements registered with the sub-registrar carry more legal weight than unregistered ones.",
    keyPoints: [
      "Landlord cannot forcibly evict — must obtain court order through proper eviction proceedings",
      "Non-payment of rent is grounds for eviction but requires 15-day notice first",
      "Registered rent agreements are strongly recommended for legal protection",
      "Security deposit disputes can be taken to the Rent Authority or Civil Court",
      "Tenant can claim damages for unlawful eviction including compensation for losses",
    ],
    relevantActs: ["Transfer of Property Act, 1882", "Delhi Rent Control Act, 1958 (state-specific)", "Model Tenancy Act, 2021"],
    disclaimer:
      "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation.",
  },

  inheritance: {
    summary:
      "Inheritance and succession in India are governed by personal laws based on religion. Under the Hindu Succession Act, 1956 (as amended in 2005), daughters have equal coparcenary rights in ancestral property as sons. A Will must be in writing, signed by the testator, and attested by two witnesses to be valid. Disputes over Wills or intestate succession are settled by the Civil Court through succession certificates or letters of administration.",
    keyPoints: [
      "Daughters have equal rights to ancestral property under the 2005 amendment",
      "A registered Will is not mandatory but strongly recommended to avoid disputes",
      "Obtain a Succession Certificate from the Civil Court for movable assets",
      "Obtain Letters of Administration for property when there is no Will",
      "A Will can be challenged within 12 years on grounds of fraud, coercion, or incapacity",
    ],
    relevantActs: ["Hindu Succession Act, 1956", "Indian Succession Act, 1925", "Registration Act, 1908"],
    disclaimer:
      "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation.",
  },

  default: {
    summary:
      "Based on your query, it appears you may be dealing with a personal legal matter. Indian law provides robust protections for individuals across a wide range of civil, criminal, family, and property matters. The key first step is to identify the specific nature of your issue so the right area of law and the right advocate can be matched to your case. Please provide more details about your situation for a more tailored response.",
    keyPoints: [
      "Identify whether your issue is civil, criminal, family, or property-related",
      "Preserve all relevant documents, communications, and evidence from the start",
      "There are time limits (limitation periods) for filing most legal actions — act promptly",
      "Free legal aid is available at District Legal Services Authorities (DLSA) for eligible individuals",
      "Most disputes can be resolved through negotiation, mediation, or Lok Adalat before going to court",
    ],
    relevantActs: ["Constitution of India", "Legal Services Authorities Act, 1987"],
    disclaimer:
      "This is general legal information and not legal advice. Please consult a qualified advocate for advice specific to your situation.",
  },
};

// Also map rent/will/eviction as aliases
RESPONSES["rent"] = RESPONSES["landlord"];
RESPONSES["eviction"] = RESPONSES["landlord"];
RESPONSES["tenant"] = RESPONSES["landlord"];
RESPONSES["will"] = RESPONSES["inheritance"];
RESPONSES["succession"] = RESPONSES["inheritance"];
RESPONSES["bail"] = RESPONSES["criminal"];
RESPONSES["fir"] = RESPONSES["criminal"];
RESPONSES["divorce"] = RESPONSES["divorce"];
RESPONSES["marriage"] = RESPONSES["divorce"];
RESPONSES["custody"] = RESPONSES["divorce"];

export function getLegalResponse(query: string): LegalResponse {
  const lower = query.toLowerCase();
  const keywords = Object.keys(RESPONSES);
  for (const keyword of keywords) {
    if (lower.includes(keyword)) {
      return RESPONSES[keyword];
    }
  }
  return RESPONSES["default"];
}
