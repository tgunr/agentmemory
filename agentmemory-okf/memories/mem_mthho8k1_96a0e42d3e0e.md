---
type: Fact
title: # SuperGrok: No API Key Included

source: grok
session_id: 7619d57f-13ae-4e5f-b6
description: # SuperGrok: No API Key Included

source: grok
session_id: 7619d57f-13ae-4e5f-b6f3-d62178579424
resource: grok://conversation/7619d57f-13ae-4e5f-b6f3-d62178579424

# Conversation

- **Session ID:** `7
resource: agentmemory://memory/mem_mthho8k1_96a0e42d3e0e
tags: ["okf", "okf-grok", "grok", "grok://conversation/7619d57f-13ae-4e5f-b6f3-d62178579424"]
timestamp: 2026-08-31T17:05:07.042Z
source: agentmemory
strength: 7
---
# Content

# SuperGrok: No API Key Included

source: grok
session_id: 7619d57f-13ae-4e5f-b6f3-d62178579424
resource: grok://conversation/7619d57f-13ae-4e5f-b6f3-d62178579424

# Conversation

- **Session ID:** `7619d57f-13ae-4e5f-b6f3-d62178579424`
- **Source:** grok
- **Model:** grok-3
- **Started:** 2026-07-29T19:15:26Z
- **Messages:** 4

---

### 👤 User — 2026-07-29T19:15:35Z

Can I use my Super Grok with an API key?

---

### 🤖 Assistant — 2026-07-29T19:15:35Z

**No.** Your SuperGrok subscription does **not** include or grant a usable API key for the official xAI developer API.<grok:render card_id="932ce0" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">0</argument></grok:render>

### Key distinctions
- **SuperGrok** is a consumer subscription (higher chat limits, Grok Build, image/video features, etc. on grok.com and the apps). It is billed separately from the developer API.
- The **xAI API** (console.x.ai → API Keys, endpoint `https://api.x.ai/v1`) is a distinct pay-per-token product. You create an API key there under the same xAI account if you want, but usage is billed separately via prepaid credits or invoiced spending. SuperGrok does not bundle free or included API credits.<grok:render card_id="5ca979" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">4</argument></grok:render>

### What you *can* do with SuperGrok
Some third-party tools (Hermes Agent, OpenClaw, T3code, Warp, and certain custom harnesses) support **OAuth login** with your SuperGrok (or X Premium+) subscription. In those cases you sign in via browser, no traditional API key is required, and usage counts against your SuperGrok limits instead of pay-per-token billing. This is not the full official developer API.<grok:render card_id="cc139f" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">3</argument></grok:render>

### How to get a real API key
1. Go to [console.x.ai](https://console.x.ai).
2. Sign in with the same account you use for SuperGrok.
3. Create an API key.
4. Add a payment method / prepaid credits (required for actual usage).

In short: SuperGrok gives you the best chat/Build experience; a separate API key + pay-as-you-go billing is needed for programmatic/SDK access.

---

### 👤 User — 2026-07-29T19:16:41Z

So how do I hook in my Hermes into SuperGrok?

---

### 🤖 Assistant — 2026-07-29T19:16:41Z

**Here’s the straightforward way to connect Hermes Agent to your SuperGrok subscription** (no API key needed).

### 1. Make sure Hermes is installed and up to date
If you don’t have it yet:

```bash
# Linux / macOS / WSL2
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Then update if needed:
```bash
hermes update
hermes --version   # should be v0.14.0 or newer
```

### 2. Select the SuperGrok OAuth provider
Run:
```bash
hermes model
```

In the interactive picker, choose:  
**xAI Grok OAuth (SuperGrok / X Premium+)**  
(or the shorter “xAI Grok OAuth (SuperGrok Subscription)” label, depending on the version).

Hermes will open your browser (or print a verification URL + code) pointing to `accounts.x.ai`.

### 3. Complete the browser login
- Sign in with the same account that has your SuperGrok subscription.
- Approve the access request.
- Tokens are automatically saved to `~/.hermes/auth.json` and refresh in the background.

Alternative one-liner if you want to skip the model picker:
```bash
hermes auth add xai-oauth
```

### 4. Start using it
```bash
hermes          # or hermes --tui
```

You can also set it as the permanent default:
```bash
hermes config set model.provider xai-oauth
hermes config set model.default grok-4.3   # or whatever current Grok model you prefer
```

### Notes
- Usage counts against your SuperGrok limits (not pay-per-token API billing).
- Works with Grok chat, reasoning, Imagine (images/video), TTS, etc.
- If you’re running Hermes on a remote/headless machine, use SSH port forwarding for the OAuth callback (port 56121) or the `--no-browser` / `--manual-paste` options.

That’s it — once the OAuth succeeds you’re fully hooked up.

--
