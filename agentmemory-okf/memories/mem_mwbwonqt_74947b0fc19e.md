---
type: Fact
title: # Use GitKraken with many submodules

source: hermes
session_id: local-77c044f4c
description: # Use GitKraken with many submodules

source: hermes
session_id: local-77c044f4c3782604d9dcf5e39dcc6af54e081f45da5588cfde967b1a980c170b
resource: hermes://session/local-77c044f4c3782604d9dcf5e39dcc6af
resource: agentmemory://memory/mem_mwbwonqt_74947b0fc19e
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Factor"]
timestamp: 2026-11-11T09:17:50.870Z
source: agentmemory
strength: 7
---
# Content

# Use GitKraken with many submodules

source: hermes
session_id: local-77c044f4c3782604d9dcf5e39dcc6af54e081f45da5588cfde967b1a980c170b
resource: hermes://session/local-77c044f4c3782604d9dcf5e39dcc6af54e081f45da5588cfde967b1a980c170b

# Conversation

- **Session ID:** `local-77c044f4c3782604d9dcf5e39dcc6af54e081f45da5588cfde967b1a980c170b`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-10T03:38:01Z
- **Ended:** 2026-11-10T10:19:35Z
- **Messages:** 60
- **CWD:** `/Users/davec/Factor`
- **Tokens:** 46639 in / 23449 out
- **Est. cost:** $-25199.0000

---

### 👤 User — 2026-11-10T03:38:37Z

How do I use gitkraken on a repo with many many submodules?

### 🤖 Assistant — 2026-11-10T03:38:42Z

<details><summary>Reasoning</summary>

The user asks a general how-to question: "How do I use gitkraken on a repo with many many submodules?"

Let me check the current directory — /Users/davec/Work/spotlights/DXF. Hmm, "DXF" — maybe a CAD project. The question is about GitKraken with many submodules. This might be a general question, but could also relate to their actual repo. Let me check whether there's a repo in play with many submodules — that'd make the answer concrete.

Let me quickly check for .gitmodules in cwd and nearby.

Keep it brief. Do a quick check first.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal\nprint(terminal(\"pwd; ls -a | head -30; echo ---; git rev-parse --show-toplevel 2>&1; echo ---; find . -maxdepth 2 -name '.gitmodules' 2>/dev/null | head\", timeout=30)[\"output\"])\n"
}
```

### 👤 User — 2026-11-10T03:41:40Z

How do I use gitkraken on a repo with many many submodules?

### 🤖 Assistant — 2026-11-10T03:42:10Z

<details><summary>Reasoning</summary>

The user asks a general how-to question. No tools needed really, but maybe check skills? It's a git question. Let me answer concisely and practically.

Given the context (Factor repo with submodules? Actually Factor doesn't have many submodules). But they're asking generally.

Let me give a practical answer about GitKraken with many submodules. Key points:

1. GitKraken auto-detects submodules; left panel "Submodules" section shows them.
2. Performance: many submodules makes GitKraken sluggish because it opens each submodule as a repo, runs status on each. Tips:
   - Set "Preferences > General > Submodules" — there's option "Initialize submodules on clone" and "Update submodules" behavior.
   - Turn off auto-refresh/auto-fetch for submodules.
   - Use "Fetch" sparingly; disable "auto-fetch" in Preferences > Git.
   - Close unused repos / use tabs.
   - Use "Submodules" pane → right-click → Update all / Init.
3. Better approach: manage subs via CLI and use GitKraken just for viewing. `git submodule update --init --recursive --jobs 8`.
4. shallow submodules: `git submodule update --init --depth 1` and set `submodule.<name>.shallow = true`.
5. `.gitmodules` with `ignore = dirty` / `ignore = all` to reduce status noise. GitKraken respects `ignore` in .gitmodules? GitKraken respects it partially.
6. Use `git config submodule.recurse false` so normal operations don't recurse.
7. GitKraken setting: Preferences → General → "Submodule status" ... Actually there is a "Show submodule changes" thing.
8. GitKraken free version limits private repos, but submodule support works.
9. Nested submodules — GitKraken only shows one level deep reliably; nested are shown but you have to open the submodule as a repo.
10. Practical alternative: use `gitk`/lazygit/tig for submodule-heavy repos, or per-submodule GitKraken tabs.

Also: GitKraken has "Submodules" in the left sidebar with badges; double-click opens the submodule as its own repo in a tab.

Performance tips specific: 
- Preferences → Git → uncheck "Automatically fetch" / "Auto-refresh".
- Set `git config --global fetch.recurseSubmodules false` (default on-demand).
- Use the "Lazy" loading - GitKraken loads repo tabs lazily.
- Disable file watching (Preferences → General → "Watch files"?)

Actually GitKraken has a known option: Preferences → General → "Refresh repository on file changes" — disable for big repos.

Also mention that GitKraken struggles with >~50 submodules; recommend Git CLI +
