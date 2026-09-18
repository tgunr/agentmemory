---
type: Fact
title: # how do i measure disk performance on a mac?

source: hermes
session_id: 202609
description: # how do i measure disk performance on a mac?

source: hermes
session_id: 20260906_055317_5a8c62
resource: hermes://session/20260906_055317_5a8c62

# Conversation

- **Session ID:** `20260906_055317_5
resource: agentmemory://memory/mem_mtqyx8z1_2eb1e446e55e
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-07T08:17:56.525Z
source: agentmemory
strength: 7
---
# Content

# how do i measure disk performance on a mac?

source: hermes
session_id: 20260906_055317_5a8c62
resource: hermes://session/20260906_055317_5a8c62

# Conversation

- **Session ID:** `20260906_055317_5a8c62`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-06T10:53:17Z
- **Messages:** 2
- **CWD:** `/Volumes/davec`
- **Tokens:** 18128 in / 628 out

---

### 👤 User — 2026-09-06T10:53:17Z

how do i measure disk performance on a mac?

### 🤖 Assistant — 2026-09-06T10:53:34Z

<details><summary>Reasoning</summary>

The user is asking about measuring disk performance on a Mac. This is a straightforward technical question - I don't need to load any skills for this. I can provide a direct answer about common tools and methods for measuring disk performance on macOS.

Let me think about the best ways to measure disk performance on a Mac:

1. **System Information / About This Mac** - Basic info but not really performance testing
2. **Disk Utility** - Has some basic verification but not performance benchmarking
3. **Terminal tools:**
   - `dd` - Simple sequential read/write tests
   - `iostat` - System statistics including disk I/O
   - `diskutil` - Disk utility commands
   - `hdbench` / `gnudisk` - Various tools
4. **Third-party tools:**
   - Blackmagic Disk Speed Test (popular, from Blackmagic Design)
   - AJA System Test
   - Geekbench (has disk tests)
   - CrystalDiskMark (has Mac version)
   - SmartBench

The most common and practical approaches:
- `dd` for quick terminal-based tests (sequential)
- Blackmagic Disk Speed Test (GUI, very popular)
- `iostat` for ongoing monitoring

I should give a concise, practical answer covering the main options.

</details>

A few solid options, from quickest to most thorough:

**Terminal (no install)**
- `dd` for quick sequential tests:
  ```bash
  # Write test (4GB, shows MB/s)
  dd if=/dev/zero of=/tmp/testfile bs=1g count=4 oflag=dsync
  ```
  Then flush cache and read:
  ```bash
  sudo purge
  dd if=/tmp/testfile of=/dev/null bs=1g count=4
  ```
  Real-world caveat: `dd` hits page cache, so run `sudo purge` between tests or use `oflag=direct` to bypass cache.

- `iostat -d 1` — live per-disk throughput and IOPS. Good for watching sustained traffic rather than peak synthetic numbers.

**GUI apps**
- **Blackmagic Disk Speed Test** (free from App Store) — the usual go-to. Does sequential and random, shows nice graphs.
- **AJA System Test** — similar, more configurable (block size, test size).
- **Geekbench** — includes a disk benchmark if you already have it.

**What matters**
- **Sequential** (large files, video): Blackmagic/AJA numbers.
- **Random 4K** (VM, databases, boot drive feel): AJA or `gnudisk`; this is where NVMe vs SATA vs spinning disk shows the biggest gap.

For a quick sanity check, Blackmagic Disk Speed Test is usually enough. If you want to compare raw vs cached or script it into a workflow, use `dd` with `oflag=direct` + `iflag=direct`.
