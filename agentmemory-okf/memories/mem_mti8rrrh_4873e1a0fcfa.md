---
type: Fact
title: # OpenClaw LAN Configuration

source: abacus
session_id: 45b49d341
resource: aba
description: # OpenClaw LAN Configuration

source: abacus
session_id: 45b49d341
resource: abacus://conversation/45b49d341

# Conversation

- **Session ID:** `45b49d341`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8rrrh_4873e1a0fcfa
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/45b49d341"]
timestamp: 2026-09-01T05:43:41.552Z
source: agentmemory
strength: 7
---
# Content

# OpenClaw LAN Configuration

source: abacus
session_id: 45b49d341
resource: abacus://conversation/45b49d341

# Conversation

- **Session ID:** `45b49d341`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-15T16:14:39+00:00
- **Messages:** 6

---

### 👤 User

How do IO configure openclaw  on my Debian 12 server to be accessible from my LAN clients

---

### 🤖 Assistant

### What you need to do (high level)

To make **OpenClaw** on a **Debian 12 server** reachable by other machines on your **LAN**, you typically need to:

1. Make OpenClaw **listen on the server’s LAN interface** (not just `127.0.0.1`)
2. Ensure the server firewall allows the **OpenClaw port**
3. (Optionally) put it behind a **reverse proxy (NGINX/Caddy)** if you want HTTPS + nice hostname
4. Make sure LAN clients use the **server’s LAN IP / DNS name** and can route to it

Because “OpenClaw” could be either a **web UI**, an **API service**, or something else, the exact config depends on:
- what port it uses
- whether it’s running in Docker / systemd / a binary
- whether it has an “allowed hosts / CORS / bind address” setting

I’ll give you the standard Debian 12 patterns below; if you answer the 4 quick questions at the end, I can tailor it exactly.

---

### 1) Make OpenClaw bind to the LAN (not localhost)

#### If OpenClaw has a config setting like `host`, `bind`, or `listen_address`
Set it to one of

these:

- **All interfaces (simplest on a trusted LAN):** `0.0.0.0`
- **Only your LAN interface (safer):** your server LAN IP, e.g. `192.168.1.10`

Examples of what you’re looking for in configs:
- `host: 0.0.0.0`
- `bind: 0.0.0.0`
- `listen: 0.0.0.0:PORT`
- `--host 0.0.0.0 --port 1234`

Then restart the service.

#### If it’s running under systemd
Often the bind address is in the service’s `ExecStart=` line or environment file.

Check:
- `systemctl status openclaw`
- `systemctl cat openclaw`

If you see it binding to `127.0.0.1`, you’ll need to change the arguments.

#### If it’s in Docker
You must publish the port to the host:

- In `docker run`: `-p 1234:1234`
- In `docker-compose.yml`:

```yaml
ports:
  - "1234:1234"
```

Also ensure the app inside the container listens on `0.0.0.0`, not `127.0.0.1` (common gotcha).

---

### 2) Verify it’s actually listening on the right interface

On the Debian server:

```bash
sudo ss -ltnp
```

You want to see something like:

- `LISTEN 0  ... 0.0.0.0:1234 ...`

(good)
or
- `LISTEN 0  ... 192.168.1.10:1234 ...` (good)

If it shows:

- `127.0.0.1:1234` (LAN clients will NOT be able to reach it)

---

### 3) Open the port in the Debian firewall (if enabled)

Debian 12 might have **ufw**, **firewalld**, raw **nftables**, or nothing.

#### If you use UFW
```bash
sudo ufw status
sudo ufw allow 1234/tcp
```

#### If you use firewalld
```bash
sudo firewall-cmd --state
sudo firewall-cmd --add-port=1234/tcp --permanent
sudo firewall-cmd --reload
```

#### If you use nftables directly
You’ll need to add a rule for TCP port `1234` in your `inet filter input` chain (share your ruleset and I’ll tell you the exact line).

Check current rules:
```bash
sudo nft list ruleset
```

---

### 4) Confirm from a LAN client

From another machine on the same LAN:

```bash
curl -v http://SERVER_LAN_IP:1234/
```

Or just open in a browser:
- `http://SERVER_LAN_IP:1234`

If it times out:
- firewall or routing issue

If it connects but you get “forbidden / host not allowed / CORS”:
- OpenClaw

application-level allowed-hosts setting needs updating

---

### 5) Optional but recommended: give it a friendly LAN hostname + HTTPS

If you want `https://openclaw.lan/`:
- set an internal DNS record (router or Pi-hole) for `openclaw.lan -> 192.168.1.10`
- run Caddy/NGINX reverse proxy
- use an internal CA (or just HTTP on LAN if acceptable)

If you tell me whether you want HTTPS and what hostname you want, I’ll provide a clean Caddy or NGINX config.

---

### Quick questions so I can give you the exact commands/files

1) How are you running OpenClaw: **Docker**, **systemd service**, or **manual binary**?  
2) What port 
