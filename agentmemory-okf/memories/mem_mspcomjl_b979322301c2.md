---
type: Fact
title: # Why is the finder so slow in accesing samba mounts like /Volumes/alpha/applica
description: # Why is the finder so slow in accesing samba mounts like /Volumes/alpha/applicati

source: kilo
session_id: 019d3e94-0726-756e-81ba-c142a992e3c4
resource: kilo://task/019d3e94-0726-756e-81ba-c142a992
resource: agentmemory://memory/mem_mspcomjl_b979322301c2
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:27:54.193Z
source: agentmemory
strength: 7
---
# Content

# Why is the finder so slow in accesing samba mounts like /Volumes/alpha/applicati

source: kilo
session_id: 019d3e94-0726-756e-81ba-c142a992e3c4
resource: kilo://task/019d3e94-0726-756e-81ba-c142a992e3c4

# Conversation

- **Task ID:** `019d3e94-0726-756e-81ba-c142a992e3c4`
- **Source:** kilo
- **Started:** 2026-03-30T11:49:41Z
- **Ended:** 2026-03-31T16:24:07Z
- **Message blocks:** 209
- **Tokens:** 7399032 in / 59047 out

---

### 👤 User — 2026-03-30T11:49:41Z

Why is the finder so slow in accesing samba mounts like /Volumes/alpha/applications?

### 🤖 Assistant — 2026-03-30T11:49:44Z

<details><summary>Reasoning</summary>

The user is asking about why Finder is slow when accessing Samba mounts like `/Volumes/alpha/applications`. This is a system/macOS diagnostic question. Let me think about the possible sources of this problem.

**Possible sources of the problem (5-7):**

1. **Spotlight/mds indexing** - macOS Spotlight (metadata server `mds`) tries to index network volumes by default, causing massive SMB traffic and slowdowns as it scans every file on the network share.

2. **`.DS_Store` file creation** - Finder constantly creates/reads `.DS_Store` files on every directory it opens, even on network mounts. This generates many small SMB round-trips and can be very slow.
   
3. **Network latency and SMB negotiation** - Each directory access involves multiple round-trips to the server, and if there's latency or the server is on a slower network segment, these operations compound. SMB version mismatches (SMB1 vs SMB2 vs SMB3) can also force protocol fallbacks that hurt performance.

4. **SMB signing and encryption overhead** - When the server requires SMB signing or encryption, macOS adds CPU overhead to every packet, which significantly slows down operations.

5. **Finder's preview and metadata generation** - Finder attempts to generate previews and extract metadata from files in the directory, which means additional reads and processing for each item.

6. **DNS and NetBIOS resolution delays** - The system may be trying multiple resolution methods (DNS, mDNS, NetBIOS/WINS) and hitting timeouts before successfully connecting to the server.

7. **Large directory enumeration** - When a directory contains many files or subdirectories, Finder has to enumerate everything and request metadata for each item, creating numerous SMB round-trips.

The most likely culprits are Spotlight indexing aggressively crawling the entire share in the background and generating thousands of file requests, or `.DS_Store` file creation issues.

Now I need to run some diagnostic commands to check whether Spotlight is indexing the volume, review the current SMB mount options, and look at system logs to confirm what's actually happening.

</details>

### 👤 User — 2026-03-30T11:49:59Z

Let me first check memory for any previous related issues, then gather diagnostic data.

### 👤 User — 2026-03-30T11:50:08Z

Now let me gather diagnostic data to validate my hypotheses:

### 🤖 Assistant — 2026-03-30T11:50:09Z

**Tool call: command**

```json
{
  "command": "\n# Check 1: Is Spotlight indexing the SMB volume?\necho \"=== SPOTLIGHT STATUS ON VOLUMES ===\"\nmdutil -s /Volumes/alpha 2>/dev/null || echo \"Volume not found or no mdutil access\"\n\necho \"\"\necho \"=== CURRENT SMB MOUNT OPTIONS FOR /Volumes/alpha ===\"\nmount | grep -i \"alpha\\|smbfs\\|cifs\"\n\necho \"\"\necho \"=== MDS (Spotlight) PROCESSES CONSUMING CPU ===\"\nps aux | grep -E \"mds|mdworker\" | grep -v grep | head -20\n\necho \"\"\necho \"=== ACTIVE SMB CONNECTIONS ===\"\nsmbutil statshares -a 2>/dev/null | head -40\n\necho \"\"\necho \"=== NSMB.CONF (SMB tuning config) ===\"\ncat /etc/nsmb.conf 2>/dev/null || echo \"No /etc/nsmb.conf found\"\ncat /Users/davec/Library/Preferences/nsmb.conf 2>/dev/null || echo \"No user nsmb.conf found\"\n\necho \"\"\necho \"=== DS_STORE SUPPRESSION SETTING ===\"\ndefaults read com.apple.desktopservices DSDontWriteNetworkStores 2>/dev/null || echo \"DSDontWriteNetworkStores not set (default: Finder WILL write .DS_Store to network)\"\n"
}
```

### 👤 User — 2026-03-30T11:50:27Z

Now let me do a second diagnostic pass to measure the actual latency and check for `.DS_S
