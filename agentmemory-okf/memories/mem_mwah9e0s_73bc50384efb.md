---
type: Fact
title: # Add missing Kilo API key to settings.json

source: hermes
session_id: local-f5
description: # Add missing Kilo API key to settings.json

source: hermes
session_id: local-f54c1db39bd5376aacf6824ac99e3f179b978a827dd316745b803dfce16cd5ca
resource: hermes://session/local-f54c1db39bd5376aacf6824a
resource: agentmemory://memory/mem_mwah9e0s_73bc50384efb
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Work/spotlights/DXF"]
timestamp: 2026-11-10T09:18:18.009Z
source: agentmemory
strength: 7
---
# Content

# Add missing Kilo API key to settings.json

source: hermes
session_id: local-f54c1db39bd5376aacf6824ac99e3f179b978a827dd316745b803dfce16cd5ca
resource: hermes://session/local-f54c1db39bd5376aacf6824ac99e3f179b978a827dd316745b803dfce16cd5ca

# Conversation

- **Session ID:** `local-f54c1db39bd5376aacf6824ac99e3f179b978a827dd316745b803dfce16cd5ca`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-10T03:12:28Z
- **Messages:** 242
- **CWD:** `/Users/davec/Work/spotlights/DXF`
- **Tokens:** 170947 in / 72426 out
- **Est. cost:** $-22522.0000

---

### 👤 User — 2026-11-10T03:12:28Z

/Users/davec/.config/zed/settings.json the kilo api key is missing

### 🤖 Assistant — 2026-11-10T03:12:33Z

<details><summary>Reasoning</summary>

The user says the kilo API key is missing in /Users/davec/.config/zed/settings.json. Let me look at the file.

Let me read the file and check for API keys elsewhere.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.config/zed/settings.json"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/.config/zed/ 2>/dev/null; echo \"---\"; grep -rn \"kilo\" /Users/davec/.hermes/.env /Users/davec/.env 2>/dev/null | sed 's/=.\\{6\\}.*/=<redacted>/'"
}
```

### 🤖 Assistant — 2026-11-10T03:12:40Z

<details><summary>Reasoning</summary>

Need to find the kilo API key. Check env vars, hermes config, keychain, etc.

Note: settings.json is not valid JSON strictly — trailing comma at line 175-176 is allowed in JSONC (Zed uses JSON5-ish). Fine.

Kilo API key — check ~/.hermes/config.yaml providers, dotenv, keychain, shell rc.

</details>

**Tool call: terminal**

```json
{
  "command": "grep -rn -i \"kilo\" /Users/davec/.hermes/config.yaml 2>/dev/null | grep -iE \"key|token\" | sed -E 's/(sk-[A-Za-z0-9_-]{4})[A-Za-z0-9_-]+/\\1…/g'; echo \"=== env files ===\"; for f in /Users/davec/.hermes/.env /Users/davec/.env /Users/davec/.config/kilo/.env /Users/davec/.zshrc /Users/davec/.zprofile; do [ -f \"$f\" ] && grep -in -i kilo \"$f\" | sed -E 's/(\\=[A-Za-z0-9_\\-]{0,6})[A-Za-z0-9_\\-]+/\\1…/' && echo \"  ^ in $f\"; done; echo \"=== keychain ===\"; security find-generic-password -s kilo -g 2>&1 | head -5"
}
```

### 🤖 Assistant — 2026-11-10T03:12:48Z

<details><summary>Reasoning</summary>

The .hermes/.env has KILO_API_KEY and KILOCODE_API_KEY. Let me view the actual values (masked by *** — the grep output shows *** because Hermes redacts secrets in tool output). I need the value to write into zed settings. But the tool redacts. I can copy it programmatically without printing: use a shell command that extracts and injects into settings.json.

Zed's language_models openai_compatible config: api_key field. Also `edit_predictions` open_ai_compatible_api needs api_key? Let's check Zed docs — for edit_predictions open_ai_compatible_api, fields: model, api_url, api_key... Actually Zed's edit prediction provider config includes `api_key` env var? Let me check quickly. In Zed, `edit_predictions` provider settings for `open_ai_compatible_api`: `{ api_url, model, api_key, prompt, max_output_tokens }`? There's a `api_key` field supported.

Also agent_servers kilo type registry — that requires the Kilo agent server, separate.

Also the "Kilo" provider under language_models.openai_compatible supports `api_key`.

Best approach: add `"api_key": "..."` to both the Kilo provider and edit_predictions, pulling from env file without printing the key. Should I check whether Zed supports env var interpolation `${KILO_API_KEY}`? Zed settings support environment variable substitution? Zed does not support env var interpolation in settings.json (I believe it doesn't for arbitrary settings). Safer to inline the key. User preference: single-user Mac, cleartext secrets in local files OK.

Let me verify which key is appropriate. There are two: KILO_API_KEY and KILOCODE_API_KEY. Kilo gateway api.kilo.ai typically uses a Kilo Code API key. Let me check lengths/prefixes without revealing fully, and test which one works against the gateway endpoint.

Let me do a probe.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && set -a && . /Users/davec/.hermes/.env 2>/dev/null && set +a\nfor v in KILO_API_KEY KILOCODE
