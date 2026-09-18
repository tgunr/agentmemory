---
type: Fact
title: # NFC tags for inventory tracking

source: hermes
session_id: 20260916_130904_74
description: # NFC tags for inventory tracking

source: hermes
session_id: 20260916_130904_74621f
resource: hermes://session/20260916_130904_74621f

# Conversation

- **Session ID:** `20260916_130904_74621f`
- **S
resource: agentmemory://memory/mem_mu59dxep_c5368ce5a7f9
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-17T08:19:37.323Z
source: agentmemory
strength: 7
---
# Content

# NFC tags for inventory tracking

source: hermes
session_id: 20260916_130904_74621f
resource: hermes://session/20260916_130904_74621f

# Conversation

- **Session ID:** `20260916_130904_74621f`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-16T18:09:07Z
- **Messages:** 4
- **CWD:** `/Volumes/davec`
- **Tokens:** 55709 in / 1153 out

---

### 👤 User — 2026-09-16T18:09:10Z

What are NFC tags and how do i use them to track inventory

### 🤖 Assistant — 2026-09-16T18:09:21Z

<details><summary>Reasoning</summary>

The user is asking a general knowledge question about NFC tags and how to use them for inventory tracking. This isn't a specific task that requires me to do anything — it's an informational question. Let me provide a helpful, concise answer.

Let me first check the kanban task to see if there's anything I should be working on.

</details>

**Tool call: kanban_show**

```json
{}
```

### 🤖 Assistant — 2026-09-16T18:09:45Z

<details><summary>Reasoning</summary>

No active kanban task — this is just a general question. Let me answer it directly.

</details>

## What are NFC Tags?

**NFC (Near Field Communication) tags** are tiny, inexpensive chips (typically the size of a coin or sticker) that store a small amount of data and transmit it wirelessly to a reader device when brought within ~4 cm of each other. Think of them as super-simple, battery-free RFID stickers.

### Key characteristics:
- **No battery needed** — powered by the reader's radio field (passive RFID)
- **100–1000 bytes of storage** — enough for a URL, ID, or short text record
- **Read-only or rewritable** — some lock permanently, others can be updated ~100k times
- **Types:** NTAG215 (~500 bytes), NTAG213 (~150 bytes), MIFARE Classic/Ultralight for more complex access-control use
- **Cost:** $0.10–$1.50 each in bulk depending on type and form factor (stickers, cards, key fobs, rings)

---

## Using Them to Track Inventory

NFC tags turn a physical item into a scannable asset with one tap — no line-of-sight needed (unlike QR codes) and no optical wear.

### How it works in practice

| Step | What happens |
|------|-------------|
| **1. Tag the item** | Stick a unique NFC tag on each item/bin. Most people use NTAG215/213 stickers. |
| **2. Encode** | Write a unique ID (or a URL pointing to the item's DB record) to each tag. |
| **3. Scan** | Tap an NFC phone (or a USB/Bluetooth reader) on the tag to read it. |
| **4. App records** | An app logs the scan: item ID + timestamp + location + action (check-in, count, move). |

### Setup options (choose one)

#### Option A — Smartphone only (simplest)
- Buy blank NTAG215 stickers (~$0.25 each) + a free app like **NFC Tools**, **NFC TagWriter**, or **Inventory Tracker NFC**.
- Write a unique text string or URL to each tag (e.g., `ITEM-0042`).
- Scan with the same app to check items in/out. Data stays in the app's local DB or a Google Sheet export.
- **Best for:** <200 items, one location, personal/small-business use.

#### Option B — Dedicated inventory app + smartphone
Apps like **Sortly**, **InvenTree Mobile**, or **SOS Inventory** support NFC natively:
- Encode each tag with a unique serial number.
- Pair it to the item record in the app.
- Scanning pulls up the item; the app logs the transaction.
- **Best for:** professional inventory with photos, quantities, locations, audit trails.

#### Option C — Fixed reader stations (warehouse scale)
- Mount an NFC reader (USB HID or Wi-Fi) at entry/exit points or on a shelf.
- Each tag carries the item's SKU or points to a server-side record.
- The reader logs every scan automatically to a central database.
- **Best for:** high-traffic counting, automated receiving, anti-theft gates.

### Encoding the tags
You only do this once per tag:
- **NFC Tools / NFC TagWriter** (phone apps) — easiest.
- **ACR1255U or PN532 reader + PC** — for bulk encoding (100+ tags).
- **Programmatic:** Python's `nfcpy` library or an Arduino + PN532 module.

Most setups store either:
1. A **plain text ID** directly on the tag (no internet needed to read).
2. A **URI/URL** pointing to a cloud record (keeps t
