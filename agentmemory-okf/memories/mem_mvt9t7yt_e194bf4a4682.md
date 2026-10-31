---
type: Fact
title: # Find uncensored bottles on Kilo

source: hermes
session_id: local-62f7e4da81c7
description: # Find uncensored bottles on Kilo

source: hermes
session_id: local-62f7e4da81c7f51bea7914b959f8cd75566c6624dcb518a00dab360e6e04e58e
resource: hermes://session/local-62f7e4da81c7f51bea7914b959f8cd7556
resource: agentmemory://memory/mem_mvt9t7yt_e194bf4a4682
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-10-29T08:17:41.341Z
source: agentmemory
strength: 7
---
# Content

# Find uncensored bottles on Kilo

source: hermes
session_id: local-62f7e4da81c7f51bea7914b959f8cd75566c6624dcb518a00dab360e6e04e58e
resource: hermes://session/local-62f7e4da81c7f51bea7914b959f8cd75566c6624dcb518a00dab360e6e04e58e

# Conversation

- **Session ID:** `local-62f7e4da81c7f51bea7914b959f8cd75566c6624dcb518a00dab360e6e04e58e`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-26T12:32:23Z
- **Ended:** 2026-10-27T15:35:29Z
- **Messages:** 211
- **CWD:** `/Users/davec`
- **Tokens:** 161184 in / 26697 out
- **Est. cost:** $-22895.0000

---

### 👤 User — 2026-10-26T12:34:15Z

Are there any uncensored bottles on Kilo?

### 👤 User — 2026-10-26T12:34:15Z

Are there any uncensored bottles on Kilo?

### 🤖 Assistant — 2026-10-26T12:34:23Z

<details><summary>Reasoning</summary>

The user asks: "Are there any uncensored bottles on Kilo?" Hmm, "Kilo" — likely Kilo Code, a provider (kilocode) which is the current provider. "bottles" — probably a typo/autocorrect for "models"? "uncensored bottles" — weird. Possibly they mean "uncensored models" available on Kilo (kilocode provider). Or "bottles" could be a voice-to-text garble.

Hmm, maybe they mean "uncensored models" — models without content restrictions. Kilo Code provides a gateway with many models. Let me check what's available. I should ask clarification? Better: reasonably infer "uncensored models" and check Kilo's model list.

I have skills: local-model-providers, model-selection-routing, provider-catalogs, nous-free-models. Let me load model-selection-routing / provider-catalogs to see how to enumerate Kilo models.

Actually the ambiguity of "bottles" — I'd guess it's a garbled "models". Could also be "bottles" as in nothing. Let me investigate Kilo's model list and search for uncensored/abliterated models.

Let me load the provider-catalogs skill.

</details>

**Tool call: skill_view**

```json
{
  "name": "provider-catalogs"
}
```

**Tool call: skill_view**

```json
{
  "name": "model-selection-routing"
}
```

### 🤖 Assistant — 2026-10-26T12:34:28Z

<details><summary>Reasoning</summary>

The question: "uncensored bottles on Kilo" — probably "uncensored models". Let me fetch the Kilo catalog and grep for uncensored/abliterated/dolphin/venice etc.

Let me fetch https://api.kilo.ai/api/gateway/v1/models and grep.

</details>

**Tool call: execute_code**

```json
{
  "code": "import json, urllib.request, re\nreq = urllib.request.Request(\"https://api.kilo.ai/api/gateway/v1/models\", headers={\"User-Agent\":\"curl/8\"})\nd = json.load(urllib.request.urlopen(req, timeout=60))\ndata = d.get(\"data\", d)\nprint(len(data))\npat = re.compile(r\"uncensor|abliterat|dolphin|venice|unfiltered|nsfw|erotic|roleplay|rp-|wizard|lexi|mythomax|noromaid|midnight|rose|amoral|goliath|lumimaid|airoboros|chronos|euryale|magnum|tiefighter|psyfighter|openhermes\", re.I)\nhits=[m for m in data if pat.search(json.dumps(m))]\nfor h in hits:\n    print(\"-\", h.get(\"id\"), \"|\", h.get(\"name\"), \"| free:\", h.get(\"isFree\"), \"|\", (h.get(\"description\") or \"\")[:160])\n"
}
```

### 🤖 Assistant — 2026-10-26T12:34:35Z

<details><summary>Reasoning</summary>

The regex matched too broadly (matched "rose" in prose etc.). Let me do a targeted pass: grep for "uncensor" in name/description explicitly, plus known uncensored-oriented families, and print pricing. Also confirm "bottles" = models (assume). Let me do a cleaner pass.

</details>

**Tool call: execute_code**

```json
{
  "code": "import json, urllib.request, re\nreq = urllib.request.Request(\"https://api.kilo.ai/api/gateway/v1/models\", headers={\"User-Agent\":\"curl/8\"})\ndata = json.load(urllib.request.urlopen(req, timeout=60))[\"data\"]\ndef price(m):\n    p=m.get(\"pricing\") or {}\n    return f'in ${p.get(\"prompt\")} / out ${p.get(\"completion\")}'\nunc=[m for m in data if re.search(r\"uncensor\", (m.get(\"name\",\"\")+\" \"+ (m.get(\"description\") or \"\")), re.I)]\nprint(\"=== explicitly 'uncensored' in listing ===\")\nfor m in unc: print(m[\"id\"],\"|\",m[\"name\"],\"|\",price(m),\"| ctx\",m.get(\"context_length\"),\"| free\",m.get(\"isFree\"))\nprint()\nprint(\"=== TheDrummer / Sao10K / cognitivecomputations / anthracite / mancer / u
