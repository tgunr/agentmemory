---
type: Fact
title: # Troubleshooting missing routes to server subnet

source: hermes
session_id: 20
description: # Troubleshooting missing routes to server subnet

source: hermes
session_id: 20260710_111119_68cd97
resource: hermes://session/20260710_111119_68cd97

# Conversation

- **Session ID:** `20260710_1111
resource: agentmemory://memory/mem_msp0cuw7_f2d927a4cc23
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260710_111119_68cd97"]
timestamp: 2026-08-11T18:42:49.822Z
source: agentmemory
strength: 7
---
# Content

# Troubleshooting missing routes to server subnet

source: hermes
session_id: 20260710_111119_68cd97
resource: hermes://session/20260710_111119_68cd97

# Conversation

- **Session ID:** `20260710_111119_68cd97`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-10T16:12:01Z
- **Messages:** 65
- **Tokens:** 156 in / 8806 out
- **Est. cost:** $0.0657

---

### 👤 User — 2026-07-10T16:12:01Z

why can't cant I ping 10.1.3.1 and 10.1.3.12, both go thru the server at pve.root no?

### 🤖 Assistant — 2026-07-10T16:12:22Z

<details><summary>Reasoning</summary>

The user is asking about network connectivity - they can't ping 10.1.3.1 and 10.1.3.12, and they believe both should route through their server at pve.root. Let me check their network setup by looking at what we know and then investigating from their server.

Let me check the network configuration on pve.local to understand the routing situation.

</details>

**Tool call: terminal**

```json
{
  "command": "ssh pve.root \"echo '=== IP ROUTES ===' && ip route && echo && echo '=== IP ADDR ===' && ip addr show && echo && echo '=== PING TESTS ===' && ping -c 2 -W 2 10.1.3.1 2>&1; echo '---'; ping -c 2 -W 2 10.1.3.12 2>&1\"",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "ping -c 2 -W 2 10.1.3.1 2>&1; echo '---'; ping -c 2 -W 2 10.1.3.12 2>&1",
  "timeout": 15
}
```

### 🤖 Assistant — 2026-07-10T16:12:44Z

**Tool call: terminal**

```json
{
  "command": "ssh pve.root \"sysctl net.ipv4.ip_forward && echo '---' && iptables -L FORWARD -n -v 2>&1 | head -20\"",
  "timeout": 10
}
```

**Tool call: terminal**

```json
{
  "command": "netstat -rn | grep 10.1.3 2>&1; echo '---'; route -n get 10.1.3.1 2>&1",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-07-10T16:13:39Z

<details><summary>Reasoning</summary>

...

**The server (`pve.root`) pings both addresses just fine** — but from your Mac, the packets are going out the wrong interface.

Here's what's happening:

### The Problem

Your Mac has **no route to 10.1.3.0/24**. When you ping 10.1.3.1 or 10.1.3.12, macOS sends the packets to your default gateway (`192.168.88.1` — your MikroTik router on `en1`), which doesn't know how to reach the `10.1.x.x` networks either.

The server has three physically separate networks:
| Interface | Network | IP |
|---|---|---|
| `eno1` | 192.168.88.0/24 | 192.168.88.2 |
| `eno2` | 10.1.2.0/24 | 10.1.2.1 |
| `eno3` | 10.1.3.0/24 | 10.1.3.1 |
| `vmbr0` (eno4) | 10.1.1.0/24 | 10.1.1.1 |

The server can reach all of them because it's directly connected to each. But your Mac is only on `192.168.88.0/24` — it needs to be told that `10.1.3.0/24` (and the other `10.1.x.x` subnets) live behind the server at `192.168.88.2`.

### The Fix

You need a static route on your Mac telling it to send `10.1.3.0/24` traffic through the server. Since the server is your gateway to those networks, you either:

**Option A — Add a static route on your Mac:**
```bash
sudo route add -net 10.1.3.0/24 192.168.88.2
```
(And similarly for the other 10.1.x networks if you need those too.)

**Option B — Add static routes on your MikroTik router** pointing `10.1.1.0/24`, `10.1.2.0/24`, `10.1.3.0/24` all to `192.168.88.2`. This way *every* device on your LAN can reach those subnets, not just your Mac.

Option B is the better long-term solution since it fixes it network-wide. Want me to add the MikroTik routes?

</details>

Found it! Here's the picture:

**From the server (`pve.root`)**, both addresses ping perfectly fine:
- `10.1.3.1` ✅ (that's the server's own `eno3` interface)
- `10.1.3.12` ✅ (a device on the `eno3` subnet)

**From your Mac**, both fail — and the reason is clear: **your Mac has no route to `10.1.3.0/24`**. Look at this:

```
route to: 10.1.3.1
   gateway: 192.168.88.1   ← sends it to your home router, not the server!
 interface: en1
```

Your Mac is sending `10.1.3.x` traffic to your home router (`192.168.88.1`) via the default route, and that router has no idea where `10.1.3.0/24` lives. It needs to go through the server (`192.168.88.2`) instead.

The server already has the route (`10.1.3.0/24 dev eno3`), and IP forwarding is en
