---
type: Fact
title: # Fix missing profiles in status bar #2

source: hermes
session_id: local-40f125
description: # Fix missing profiles in status bar #2

source: hermes
session_id: local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000
resource: hermes://session/local-40f125c7dcf5a5200018309668af
resource: agentmemory://memory/mem_mvxm9k31_cf90395ca902
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop"]
timestamp: 2026-11-01T09:17:23.663Z
source: agentmemory
strength: 7
---
# Content

# Fix missing profiles in status bar #2

source: hermes
session_id: local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000
resource: hermes://session/local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000

# Conversation

- **Session ID:** `local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-01T08:30:40Z
- **Ended:** 2026-11-01T08:47:27Z
- **Messages:** 499
- **CWD:** `/Users/davec/Desktop`
- **Tokens:** 591195 in / 13770 out
- **Est. cost:** $-179853.0000

---

### 🤖 Assistant — 2026-10-30T04:34:30Z

<details><summary>Reasoning</summary>

Notice: pro's desktop spawns a NEW dashboard per profile, one every ~10 seconds, each v0.22.5 on mini. Six spawns by 23:30 — one per profile (ai, cc, designer, ollama, systems, worker). So the desktop IS enumerating 6 profiles of mini and creating a backend for EACH. That means the app knows all 7.

And no "profile inventory failed" lines. 

So why does the UI show only ai and cc? Because... the statusbar dropdown lists profiles from... hmm, maybe the UI only shows profiles it has *backends for that are ready*, and most spawns failed/hung?

OR maybe the user looked at the statusbar at 23:30 when only ai and cc... no.

Wait — the spawn every 10s smells like a retry loop failing to connect. Each spawn happens sequentially — that looks like the roster enumerating each connection×profile... Actually no: `ensureRegistryBackend(connectionId, profile)` is called per profile as the app dials each. A 10s cadence suggests something is timing out.

Hmm, "connection spawned dashboard" appears for each; earlier we saw 6 isolated serves on mini. So dials succeed.

Let me look at pro's desktop.log tail as a whole (last 60 lines) to see errors between 23:30 and now (current time ~23:45?). Let me check the current time and get full recent log without grep.

Also check for lines like "409" / "client_upgrade" frequency.

Actually, let's consider the guard: maybe the app UI shows only profiles that the *gateway* reports via the WS handshake `gateway.profiles` — and mini's multiplexed gateway reports... hmm.

DIFFERENT DECISIVE APPROACH: I can inspect the OLD app's dropdown rendering source in the actual repo at commit 27c02f6... which IS what the old bundle was built from. Even better: pro's repo is AT that commit! So I can read the exact source of the old app on pro: apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx at 27c02f6, and see which store feeds the profile item.

That's the cleanest: read the OLD source (on pro, or locally via git show 27c02f6:path). Let me use local git: `git show 27c02f6:apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx | grep -n "profile" -A3`.

Do it for the profile dropdown item and the projects item.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && git log -1 --format=\"%h %ad %s\" 27c02f6326 2>/dev/null; git show 27c02f6326:apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx 2>/dev/null | grep -n \"profile-switcher\\|projects\\|activeProject\\|profiles\" | head -30"
}
```

### 🤖 Assistant — 2026-10-30T04:34:35Z

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && git show 27c02f6326:apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx | sed -n 480,570p"
}
```

### 🤖 Assistant — 2026-10-30T04:34:41Z

<details><summary>Reasoning</summary>

In the old build, the statusbar renders `<ProfileSwitcher compact />` — the same component as the sidebar rail. `ProfileSwitcher` uses `$profiles` (store/profile.ts) — populated from `profiles.list` on the active gateway... or the *sidebar scope* store `profile-scope`.

So: the statusbar profile switcher = the same list as in the sidebar rail. If the sidebar shows 7 and the statusbar shows 2, that's a component difference; if both show 2, the data is 2.

Let me look at ProfileSwitcher in the old source: does it render `profiles` from `$profiles` filtered by `p.is_default` / "show only pinned"? Let me read profile-switcher.tsx at 27c02f6 for filters like `.filter(`.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && git show
