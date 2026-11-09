---
type: Fact
title: # Fix Quick Look spinning for .dxf files

source: hermes
session_id: local-cdff6
description: # Fix Quick Look spinning for .dxf files

source: hermes
session_id: local-cdff669c98a6dd347b24ef8e668a91db48df28f576fed7c01b816261d0fd6435
resource: hermes://session/local-cdff669c98a6dd347b24ef8e668
resource: agentmemory://memory/mem_mw7v4yif_ae601315de27
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-11-08T13:23:27.398Z
source: agentmemory
strength: 7
---
# Content

# Fix Quick Look spinning for .dxf files

source: hermes
session_id: local-cdff669c98a6dd347b24ef8e668a91db48df28f576fed7c01b816261d0fd6435
resource: hermes://session/local-cdff669c98a6dd347b24ef8e668a91db48df28f576fed7c01b816261d0fd6435

# Conversation

- **Session ID:** `local-cdff669c98a6dd347b24ef8e668a91db48df28f576fed7c01b816261d0fd6435`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-07T16:34:42Z
- **Messages:** 315
- **CWD:** `/Volumes/davec`
- **Tokens:** 295724 in / 100873 out
- **Est. cost:** $-22523.0000

---

### 👤 User — 2026-11-07T16:35:34Z

the quick look for .dxf files is just spinningsee if you can find out what's wrong.

### 🤖 Assistant — 2026-11-07T16:35:40Z

<details><summary>Reasoning</summary>

The user says Quick Look for .dxf files just spins. Let me investigate on macOS: Quick Look generators for dxf. Let's check qlmanage.

Let me run some diagnostics.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la /Volumes/davec/*.dxf 2>/dev/null | head -20; echo ---; find /Volumes/davec -maxdepth 2 -iname '*.dxf' 2>/dev/null | head -20"
}
```

**Tool call: terminal**

```json
{
  "command": "qlmanage -m plugins 2>/dev/null | grep -i -E 'dxf|cad' ; echo \"---all ql generators---\"; pluginkit -mAvvv -p com.apple.quicklook.preview 2>/dev/null | head -40"
}
```

### 🤖 Assistant — 2026-11-07T16:35:47Z

<details><summary>Reasoning</summary>

No dxf files in /Volumes/davec top-level. Let me find a dxf file to test with. Also check qlmanage -m plugins full list for something handling dxf, and check UTI declarations.

Note: cwd is /Volumes/davec (SAMBA). Let's search the home dir for dxf.

</details>

**Tool call: terminal**

```json
{
  "command": "find ~ -iname '*.dxf' -not -path '*/Library/*' 2>/dev/null | head -10; echo \"=== volumes ===\"; ls /Volumes"
}
```

**Tool call: terminal**

```json
{
  "command": "qlmanage -m plugins 2>/dev/null | grep -iE '^ *[a-z0-9.]+ +->' | grep -iE 'dxf|cad|draw' ; echo \"=== uti ===\"; mdls -name kMDItemContentTypeTree /dev/null 2>/dev/null; /usr/bin/python3 -c \"print()\" ; echo \"=== uti lookup tool ===\"; which duti 2>/dev/null; defaults read com.apple.LaunchServices/com.apple.launchservices.secure 2>/dev/null | grep -i -A3 dxf"
}
```

### 🤖 Assistant — 2026-11-07T16:36:24Z

<details><summary>Reasoning</summary>

Interesting: two UTIs for dxf: com.atomicgeese.dxf and com.autodesk.mac.dxf. Let's see what the handler app is and whether an app exists. Let's get full context of those defaults entries.

Also test qlmanage on a dxf file to see the actual error.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && timeout 60 qlmanage -p -o /tmp/qlout \"/Users/davec/Desktop/1.dxf\" 2>&1 | tail -40; echo \"EXIT=$?\"; ls -la /tmp/qlout 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "defaults read com.apple.LaunchServices/com.apple.launchservices.secure 2>/dev/null | grep -iB6 -A8 'atomicgeese\\|autodesk.mac.dxf' | head -80"
}
```

### 🤖 Assistant — 2026-11-07T16:36:30Z

<details><summary>Reasoning</summary>

So both UTIs are handled by com.atomicgeese.makerlook ("MakerLook"?). Is that app installed? Let's check. Also check if the app has a Quick Look extension registered.

qlmanage says "did not produce any preview". Let's check what UTI the file resolves to and which apps declare dxf.

Also check: is MakerLook installed? pluginkit for its QL extension?

</details>

**Tool call: terminal**

```json
{
  "command": "ls -d /Applications/*aker* /Applications/*Maker* ~/Applications/*aker* 2>/dev/null; echo \"=== lsregister ===\"; /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -dump 2>/dev/null | grep -iB2 -A6 'com.atomicgeese.makerlook\"' | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "mdls -name kMDItemContentType -name kMDItemContentTypeTree \"/Users/davec/Desktop/1.dxf\"; echo \"=== pluginkit ql all w/ dxf ===\"; pluginkit -mAv 2>/dev/null | grep -iE 'maker|dxf'; echo \"=== qlmanage plugins dxf grep ===\"; qlmanage -m plugins 2>/dev/null | grep -icE 'dxf'; qlmanage -m plugins 2>/dev/null | head -30"
}
```

### 🤖 Assistant — 2026-11-07T16:36:52Z

<details><summary>R
