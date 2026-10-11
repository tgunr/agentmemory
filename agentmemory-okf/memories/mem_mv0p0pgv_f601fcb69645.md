---
type: Fact
title: # Set up Home Assistant with Ring cameras

source: hermes
session_id: 20261002_1
description: # Set up Home Assistant with Ring cameras

source: hermes
session_id: 20261002_131040_9b1d3a
resource: hermes://session/20261002_131040_9b1d3a

# Conversation

- **Session ID:** `20261002_131040_9b1d3
resource: agentmemory://memory/mem_mv0p0pgv_f601fcb69645
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261002_131040_9b1d3a"]
timestamp: 2026-10-09T08:18:05.793Z
source: agentmemory
strength: 7
---
# Content

# Set up Home Assistant with Ring cameras

source: hermes
session_id: 20261002_131040_9b1d3a
resource: hermes://session/20261002_131040_9b1d3a

# Conversation

- **Session ID:** `20261002_131040_9b1d3a`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-03T12:59:52Z
- **Ended:** 2026-10-09T07:50:17Z
- **Messages:** 35
- **Tokens:** 324976 in / 19160 out
- **Est. cost:** $-48940.0000

---

### 👤 User — 2026-10-08T16:11:39Z

Help me setup Home Assistant with my ring cameras

### 🤖 Assistant — 2026-10-08T16:12:29Z

<details><summary>Reasoning</summary>

The user wants to set up Home Assistant with Ring cameras. This is a smart home / home automation task. Let me think about what's relevant here.

First, let me scan the skills. There's nothing specifically about Home Assistant or Ring. There's "diy" which is a DIY project assistant... not really. There's "network-infrastructure" for networking. Nothing directly on Home Assistant.

Let me think about what's actually needed. The Ring integration in Home Assistant is a cloud-polling integration (Ring via the `ring` integration). It requires:
1. Home Assistant installed (OS, Container, Supervised, or Core)
2. The Ring integration configured with Ring account credentials (email/password) + 2FA
3. Ring cameras then show up as cameras, motion events via webhooks/Ring API polling.

Important caveats: Ring cameras only provide still snapshots refreshed every10 minutes by default (not live video streaming) in Home Assistant, unless you use the WebRTC / go2rtc / frigate add-ons for live RTSP... Actually Ring cameras don't expose RTSP natively. There are workarounds:
- `ring` integration: snapshot image (refresh ~10 min), motion/doorbell events, light/siren switches, sensors.
- Live video: requires a workaround like `ring-mqtt` (a popular project by tschid) which bridges Ring to MQTT and exposes live video via RTSP through go2rtc/frigate... Actually ring-mqtt exposes camera snapshots and via MQTT; live streaming requires Ring's streaming API and is exposed via WebRTC/RTSP using the ring-mqtt project which provides `ring-mqtt` addon with live video support.

Key facts:
- Ring requires 2FA; Home Assistant Ring integration supports2FA via the config flow (you get a code).
- Ring API rate limiting — polling too aggressively gets you blocked. HA polls every 10 min for snapshots by default.
- Recent Ring API changes: Amazon deprecated some APIs. In 2024-2025 there were reports of Ring API token issues. The `ring-doorbell` python library is what HA uses.

For live video the popular stack is: `ring-mqtt` (Mosquitto MQTT broker + ring-mqtt add-on) + go2rtc or Frigate for RTSP/WebRTC live streams.

Let me also think about whether the user already has Home Assistant. They asked "Help me setup Home Assistant with my ring cameras" — this suggests they may not have HA yet. I should ask a couple of clarifying questions:1. Do they already have Home Assistant installed/running? On what hardware (HAOS on a Pi/mini PC, Docker on the Mac mini, VM on pve.local)?
2. What do they want — motion notifications, live video, recording?

Given their infra (pve.local is a Proxmox box with a local LLM, mini.local is the Mac), they could run HAOS in a VM on Proxmox. That's actually the nicest setup.

I should probably ask clarifying questions since the scope is ambiguous — hardware, existing install, and goals (live video vs. snapshots/notifications). The clarify tool is appropriate here. But maybe I can do a bit of research first and give them a plan. The instruction says "Prefer deciding low-stakes questions yourself; don't use this for..." — but the hardware choice is a real decision that changes the whole path.

Let me think about what would be maximally helpful:
1. Determine what they have (HA already? Ring account with 2FA? Which Ring devices?)
2. Determine where to install HA.

I think asking 2-3 questions in one clarify call is the right move, but let me first do a quick check of whether anything's already running — e.g., is Home Assistant already installed somewhere? Let me check the local machine and maybe the network. Actually,
