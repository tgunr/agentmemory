---
type: Fact
title: # Free people-search sites behind Cloudflare walls

source: hermes
session_id: 2
description: # Free people-search sites behind Cloudflare walls

source: hermes
session_id: 20260923_031106_5d6d8c
resource: hermes://session/20260923_031106_5d6d8c

# Conversation

- **Session ID:** `20260923_031
resource: agentmemory://memory/mem_mudu04sz_9930d21ebbef
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-23T08:18:55.029Z
source: agentmemory
strength: 7
---
# Content

# Free people-search sites behind Cloudflare walls

source: hermes
session_id: 20260923_031106_5d6d8c
resource: hermes://session/20260923_031106_5d6d8c

# Conversation

- **Session ID:** `20260923_031106_5d6d8c`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-23T08:11:07Z
- **Messages:** 2
- **CWD:** `/Volumes/davec`
- **Tokens:** 2830 in / 1138 out

---

### 👤 User — 2026-09-23T08:11:07Z

Why are All the free people-search sites are Cloudflare-walled? Doesn't defeat the purpose of a free search?

### 🤖 Assistant — 2026-09-23T08:11:24Z

<details><summary>Reasoning</summary>

The user is asking a conversational/opinion question about why free people-search sites are Cloudflare-walled and whether that defeats the purpose. This is a discussion question, not a task. Let me think about whether I need tools — probably not really, this is a knowledge question I can answer directly.

Let me think about the actual substance:

Why are people-search sites (BeenVerified, Spokeo, Whitepages, TruePeopleSearch, FastPeopleSearch, etc.) heavily Cloudflare-walled / bot-protected?

1. **Scraping economics**: These sites aggregate public records and sell subscriptions. Their data is expensive to compile (they license from data brokers, county records, etc.). Competitors and data brokers scrape them constantly to rebuild the same datasets. So the wall is protecting their core asset — the data itself. A "free" people-search site's business is monetizing you (ads, upsells to paid reports), not giving away data to machines.

2. **Cloudflare's bot protection isn't primarily for them against bots stealing — it's also against abuse**: People-search sites get hammered by:
   - Automated scrapers (competitors, OSINT tool builders)
   - Privacy-scrubbing services (DeleteMe, Incogni, Optery, etc.) — these companies run automated opt-out submissions against these sites at scale. Ironically, the privacy industry is one of the biggest bot traffic sources to these sites.
   - Stalkers/bad actors — actually they want to make it hard for casual bulk lookups? Not really, they profit from lookups.
   - Takedown/crawl requests, researchers, journalists

3. **The "free" tier is a funnel**: Free people-search sites make money on ads and by upselling. Human eyeballs = revenue. Bots = cost with no revenue. Cloudflare free/cheap tier lets them cut infrastructure costs. Cloudflare's "bot fight mode" is essentially free, so even broke sites turn it on.

4. **Does it defeat the purpose?** The purpose of the site isn't free access — it's free-to-humans so they can show you ads and convert you to paid. The wall is perfectly aligned with that purpose: it ensures the only traffic is monetizable humans. It's not a public-API service; it's a lead-gen funnel with a paywall. So no contradiction from their perspective — but yes, it kills any legitimate bulk/programmatic use, which is why OSINT folks pivot to primary sources (county assessor/recorder sites, PACER, state DOC offender searches, FCC license search, FEC donations, voter rolls where public, etc.).

5. Also: these sites are litigation and abuse magnets (doxxing, stalking), so they have abuse teams and aggressive WAF rules. They get hit by credential-stuffing too.

Also worth noting: Cloudflare walls hit VPN users, Tor, and shared IPs hard, so "free" sites become effectively inaccessible for privacy-conscious users — a real irony since people searching for their own exposed info often use VPNs.

Practical angle if the user actually wants to look someone up: go to primary sources — county clerk/recorder, assessor parcels, state courts (many free), PACER for federal, state licensing boards, voter registration files (public in many states), obituaries, etc. And opt-out services exist for removing yourself.

The user seems to be venting/asking rhetorically. Keep it concise per my persona ("concise assistant"). A few tight paragraphs or a short list. No tools needed. Maybe offer the pivot to primary sources if they're trying to actually find someone.

Format: short, a few bullets. Not too long.

</details>

Because the wall serves their actual busin
