---
type: architecture
title: hermes.polymicro.net -> 503 means the Mac-side Hermes WebUI (port 8787) is not r
description: hermes.polymicro.net -> 503 means the Mac-side Hermes WebUI (port 8787) is not running. It is a reverse-proxy chain: DNS CNAME to polymicro.net (98.96.55.218, pve public) -> MikroTik NAT -> pve apache
resource: agentmemory://memory/mem_msg0hgte_af27ecfb000b
tags: ["hermes.polymicro.net", "reverse-proxy", "apache", "pve", "mikrotik", "mac-mini", "hermes-webui", "launchd"]
timestamp: 2026-08-05T11:36:29.279Z
source: agentmemory
strength: 7
---
# Content

hermes.polymicro.net -> 503 means the Mac-side Hermes WebUI (port 8787) is not running. It is a reverse-proxy chain: DNS CNAME to polymicro.net (98.96.55.218, pve public) -> MikroTik NAT -> pve apache2 vhost /etc/apache2/sites-available/hermes.polymicro.net.conf ProxyPass http://10.1.2.7:8787/ -> Mac mini LaunchAgent ai.hermes.webui (bootstrap.py, listens 0.0.0.0:8787). Recovery: `launchctl load ~/Library/LaunchAgents/ai.hermes.webui.plist` (or if already loaded, the webui process crashed -> watchdog/load brings it back). Keep ai.hermes.webui-watchdog.plist loaded so it self-heals every 5 min. Verify: `curl -sS http://127.0.0.1:8787/health` -> 200 and public -> 302.

## Files
- `/etc/apache2/sites-available/hermes.polymicro.net.conf`
- `/Users/davec/Library/LaunchAgents/ai.hermes.webui.plist`
- `/Users/davec/Library/LaunchAgents/ai.hermes.webui-watchdog.plist`
- `/Users/davec/.hermes/scripts/webui-watchdog.sh`
