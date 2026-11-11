---
type: Fact
title: # Enable Quick Look for DWG files

source: hermes
session_id: local-1f28301d1d21
description: # Enable Quick Look for DWG files

source: hermes
session_id: local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b
resource: hermes://session/local-1f28301d1d21594964207a1d5d9d73553a
resource: agentmemory://memory/mem_mwah96sj_a33be5e14489
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Factor"]
timestamp: 2026-11-10T09:18:08.624Z
source: agentmemory
strength: 7
---
# Content

# Enable Quick Look for DWG files

source: hermes
session_id: local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b
resource: hermes://session/local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b

# Conversation

- **Session ID:** `local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-09T15:57:49Z
- **Ended:** 2026-11-10T02:33:49Z
- **Messages:** 301
- **CWD:** `/Users/davec/Factor`
- **Tokens:** 187886 in / 97852 out
- **Est. cost:** $-23966.0000

---

### 👤 User — 2026-11-09T15:57:49Z

I need a Mac OS quick look for DWG files

### 🤖 Assistant — 2026-11-09T15:57:55Z

<details><summary>Reasoning</summary>

The user wants a macOS Quick Look plugin for DWG files (AutoCAD drawing files). Let me check if there's a skill: `quicklook-extensions` under macos, and maybe `dxf-colorize` under devops. Let me load the quicklook-extensions skill.

Let me also check the system state: what's installed.

First load skill.

</details>

**Tool call: skill_view**

```json
{
  "name": "quicklook-extensions"
}
```

**Tool call: terminal**

```json
{
  "command": "sw_vers; echo ---; qlmanage -m plugins 2>/dev/null | head -60; echo ---; ls /Applications | head -40; echo ---; which ODAFileConverter dwg2dxf 2>/dev/null; ls /Applications | grep -i -E 'oda|dwg|cad'"
}
```

### 🤖 Assistant — 2026-11-09T15:58:00Z

<details><summary>Reasoning</summary>

Interesting: there's a CADPreview.app in /Applications. And this user has done a DXF preview extension before (skill mentions DXFPreview.DXFPreviewProvider). So there may be an existing project previously built for DXF. Let me find it.

Let me look for the DXF preview project source.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la /Applications/CADPreview.app/Contents/PlugIns 2>/dev/null; echo ---; plutil -p /Applications/CADPreview.app/Contents/Info.plist 2>/dev/null | head -40; echo ---; find ~/ -maxdepth 3 -iname '*CADPreview*' -o -maxdepth 3 -iname '*DXFPreview*' 2>/dev/null | head -20; echo ---; ls ~/Projects 2>/dev/null | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "mdls -name kMDItemContentType /Applications/CADPreview.app; echo ---; ls /Applications/ODAFileConverter.app/Contents/MacOS/; echo ---; ls -d ~/sources/* ~/Desktop/* 2>/dev/null | grep -i -E 'dxf|cad|preview' "
}
```

### 🤖 Assistant — 2026-11-09T15:58:06Z

<details><summary>Reasoning</summary>

There's an existing DXFPreview.appex in ~/Library/Extensions, and a CADPreview project probably somewhere. Let's find the source project.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -d ~/Desktop/Develop/* ~/Desktop/Develop 2>/dev/null | head -30; echo ---; find ~/Desktop ~/Developer ~/Documents -maxdepth 4 -name 'project.yml' -newermt '2025-01-01' 2>/dev/null | head -20; echo ---; pluginkit -mAv | grep -i -E 'dxf|cad'"
}
```

### 🤖 Assistant — 2026-11-09T15:58:12Z

<details><summary>Reasoning</summary>

There's an existing DXF Quick Look project at ~/Desktop/DXF/QuickLook. So the natural move: extend that project to support DWG. DWG is a proprietary binary format — hard to parse. Best route: use ODAFileConverter.app (installed!) to convert DWG→DXF, then reuse the existing DXF renderer. That's the pragmatic approach for a Quick Look extension.

Let me look at the project.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/Desktop/DXF/QuickLook && find . -name '*.swift' -o -name 'project.yml' -o -name '*.plist' -o -name '*.h' | grep -v '.build' | head -40; echo ---; cat project.yml"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/Desktop/DXF; echo ---; ls ~/Desktop/DXF/QuickLook"
}
```

### 🤖 Assistant — 2026-11-09T15:58:24Z

<details><summary>Reasoning</summary>

Now, DWG support. Options:

1. Use ODAFileConverter (installed at /Applications/ODAFileConverter.app) to convert DWG→DXF at preview time, then reuse the DXF renderer. But ODAFileConverter is a GUI app (uses Qt), CLI mode: `ODAFileConverter <inDir> <outDir> <outVer> <outFileType> <recurse> <audit> [filter]`. It can be run headless-ish but it's a Qt app that needs a display; it does work on macOS fro
