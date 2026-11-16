---
type: Fact
title: # Find Books library storage location

source: hermes
session_id: local-3c5638a5
description: # Find Books library storage location

source: hermes
session_id: local-3c5638a551616541af36776d3aeea5523a156e6598162a09661369ba607ddaf9
resource: hermes://session/local-3c5638a551616541af36776d3aeea5
resource: agentmemory://memory/mem_mwhmfc7r_af09245afcc7
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-15T09:17:16.896Z
source: agentmemory
strength: 7
---
# Content

# Find Books library storage location

source: hermes
session_id: local-3c5638a551616541af36776d3aeea5523a156e6598162a09661369ba607ddaf9
resource: hermes://session/local-3c5638a551616541af36776d3aeea5523a156e6598162a09661369ba607ddaf9

# Conversation

- **Session ID:** `local-3c5638a551616541af36776d3aeea5523a156e6598162a09661369ba607ddaf9`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-14T12:57:34Z
- **Ended:** 2026-11-14T21:49:39Z
- **Messages:** 51
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 53729 in / 11556 out
- **Est. cost:** $-22808.0000

---

### 👤 User — 2026-11-14T12:57:35Z

On the Mac OS application books, where are the books stored on my Macintosh?

### 🤖 Assistant — 2026-11-14T12:57:41Z

<details><summary>Reasoning</summary>

The user asks: "On the Mac OS application books, where are the books stored on my Macintosh?" — macOS Books app (Apple Books). Books purchased/stored in ~/Library/Containers/com.apple.Books/Data/Library/... Let me check locally.

Let me look at the filesystem.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/Library/Containers/com.apple.Books/Data/Library/ 2>/dev/null; echo \"---\"; ls -la ~/Library/Mobile\\ Documents/ 2>/dev/null | head -30"
}
```

**Tool call: terminal**

```json
{
  "command": "du -sh ~/Library/Containers/com.apple.Books 2>/dev/null; find ~/Library/Containers/com.apple.Books -maxdepth 6 -type d -name \"*Books*\" 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-11-14T12:57:49Z

<details><summary>Reasoning</summary>

The Books container doesn't exist on this machine (no com.apple.Books container). Let me check iCloud Books documents and the Media folder.

Actually, notably, the Books app on modern macOS stores books in:
- ~/Library/Mobile Documents/iCloud~com~apple~iBooks/Documents/ (older)
- ~/Library/Containers/com.apple.Books/Data/Library/... 
- Or in the "Books" folder accessible via Finder sidebar: ~/Library/Mobile Documents/com~apple~iBooks...

Let me check. Also check /Users/davec/Library/Containers/com.apple.iBooksX.

Actually maybe the "Books" app data could be under Library/Mobile Documents/com~apple~Books. Let's look for anything books-related.

Note: this machine is pro.local presumably. Let me check thoroughly.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -d ~/Library/Containers/*[Bb]ook* ~/Library/Mobile\\ Documents/*[Bb]ook* ~/Library/Mobile\\ Documents/*iBooks* 2>/dev/null; echo \"=== group containers ===\"; ls -d ~/Library/Group\\ Containers/*[Bb]ook* 2>/dev/null; echo \"=== Books.app support ===\"; ls -la ~/Library/Application\\ Support/ 2>/dev/null | grep -i book; echo \"=== caches ===\"; ls -d ~/Library/Caches/com.apple.iBooks* ~/Library/Caches/com.apple.Books* 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "mdfind -name \"*.epub\" 2>/dev/null | head -10; echo \"=== books app installed? ===\"; ls -d /System/Applications/Books.app /Applications/Books.app 2>/dev/null; echo \"=== iBooks dirs ===\"; find ~/Library -maxdepth 4 -iname \"*iBooks*\" -o -maxdepth 4 -iname \"*Books*\" 2>/dev/null | grep -vi \"Photos\\|photo\" | head -20"
}
```

### 🤖 Assistant — 2026-11-14T12:58:00Z

<details><summary>Reasoning</summary>

Let's inspect the actual book files: ~/Library/Mobile Documents/iCloud~com~apple~iBooks/Documents/ and ~/Library/Containers/com.apple.iBooksX/Data/Library/... Also the group container.

Also the DB: ~/Library/Containers/com.apple.iBooksX/Data/Library/Application Support/com.apple.iBooksX/ BKLibrary... Let me check.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== iCloud iBooks Documents ===\"; ls -la ~/Library/Mobile\\ Documents/iCloud~com~apple~iBooks/Documents/ 2>/dev/null | head -20; du -sh ~/Library/Mobile\\ Documents/iCloud~com~apple~iBooks 2>/dev/null; echo; echo \"=== Containers/com.apple.iBooksX tree (depth 4) ===\"; find ~/Library/Containers/com.apple.iBooksX/Data/Library -maxdepth 3 2>/dev/null | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== group container ===\"; find ~/Library/Group\\ Containers/group.com.apple.iBooks -maxdepth 3 2>/dev/null | head -30; echo; echo \"=== sqlite book db ===\"; find ~/Library/Cach
