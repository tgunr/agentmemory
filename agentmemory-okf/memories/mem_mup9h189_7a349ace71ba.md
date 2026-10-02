---
type: Fact
title: # Show projects in TUI status bar

source: hermes
session_id: 20260930_150722_b0
description: # Show projects in TUI status bar

source: hermes
session_id: 20260930_150722_b0edbe
resource: hermes://session/20260930_150722_b0edbe

# Conversation

- **Session ID:** `20260930_150722_b0edbe`
- **S
resource: agentmemory://memory/mem_mup9h189_7a349ace71ba
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-10-01T08:17:25.715Z
source: agentmemory
strength: 7
---
# Content

# Show projects in TUI status bar

source: hermes
session_id: 20260930_150722_b0edbe
resource: hermes://session/20260930_150722_b0edbe

# Conversation

- **Session ID:** `20260930_150722_b0edbe`
- **Source:** tui
- **Model:** qwen3:4b-128k
- **Started:** 2026-09-30T20:07:22Z
- **Ended:** 2026-09-30T20:19:20Z
- **Messages:** 18
- **CWD:** `/Users/davec`
- **Tokens:** 56503 in / 1352 out

---

### 👤 User — 2026-09-30T11:12:39Z

locate the session on adding projects to the status bar and finish the task and commit the changes.

### 🤖 Assistant — 2026-09-30T11:13:14Z

<details><summary>Reasoning</summary>

Found it: `@session:default/20260929_150528_e8d109` — "Add projects to bottom bar", from September 29, 2026 (yesterday). The final assistant message says the work was done:

- `apps/desktop/src/app/chat/sidebar/project-dropdown-switcher.tsx` — new ProjectSwitcher component
- `apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx` — registered project-switcher status-bar item
- `apps/desktop/src/i18n/types.ts` — added toggleProject
- `apps/desktop/src/i18n/en.ts` — added projectSwitcher block + toggleProject copy

But it says: "I couldn't run a TypeScript build here because the workspace doesn't have node_modules/tsc available, and pnpm/corepack failed to fetch. If you want, the next concrete step is: build/run the desktop app and confirm the widget appears in the bottom bar."

The user now wants: "locate the session ... finish the task and commit the changes."

So the remaining task: verify the changes are complete, run typecheck/build, and commit the changes in ~/.hermes/hermes-agent repo.

Wait — there's a subtlety from the session search result: the session's first message references ANOTHER session ("it was a session concerning changing the bottom bar to add projects alongside the gateway and profile" — that bookend_start suggests this session 20260929_150528 was itself asking about locating a previous session). The actual work might have been done in that session. But the final message in this session shows the work was completed (the "Done. The project widget is now wired into the status bar." message). So this session contains the completed work.

Let me look at the git status in ~/.hermes/hermes-agent to see the current state of the changes. Also let me check the session for any messages after 142576 (bookend_end is empty, messages_after: 0) — so that was the last message in the session. Good.

Plan:
1. Check git status in ~/.hermes/hermes-agent.
2. Verify the files exist with the described changes.
3. Run typecheck/build if possible (the previous session couldn't due to missing node_modules; maybe I can install or find tsc elsewhere).
4. Commit the changes.

Note: the user wants me to finish the task AND commit. The repo is ~/.hermes/hermes-agent — a submodule worktree, checkout usually `main` (tracks tg/main). Per memory: "checkout usually `main` (tracks tg/main → origin-block pre-commit hook does NOT fire; commits OK)". So committing is fine.

Let me start by checking git status.

</details>

Found it — @session:default/20260929_150528_e8d109 "Add projects to bottom bar" (Sep 29). The widget was written into 4 desktop files, but the session ended before a TypeScript check could run ("workspace doesn't have node_modules/tsc"). Remaining work: verify/build, then commit. Let me check the current state of the repo.

### 🤖 Assistant — 2026-09-30T11:13:22Z

<details><summary>Reasoning</summary>

The diff looks good. Notes:

1. `package.json` modification adds `"packageManager": "pnpm@12.8.1+sha512..."` — this was likely added during the previous session when trying to get pnpm/corepack working (it "failed to fetch" per the session). This is a side-effect artifact from that session's attempt to install pnpm, not part of the feature. Hmm — should I include it in the commit? It might actually be unrelated. Let me think: the session said "pnpm/corepack failed to fetch". Adding packageManager field is a common corepack thing. It's a modification to the root package.json that isn't needed for the feature. I should probably exclude it from the commit (leave it 
