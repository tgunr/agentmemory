---
type: architecture
title: Architecture: hermes.polymicro.net is a reverse-proxy chain. DNS CNAME->polymicr
description: Architecture: hermes.polymicro.net is a reverse-proxy chain. DNS CNAME->polymicro.net->98.96.55.218 (pve public IP). pve apache2 vhost (sites-available/hermes.polymicro.net.conf) ProxyPasses to http:/
resource: agentmemory://memory/mem_msg1zkjb_863237d2ada7
tags: ["hermes.polymicro.net", "reverse-proxy", "apache", "pve", "mini", "webui", "launchagent", "8787"]
timestamp: 2026-08-05T12:18:33.525Z
source: agentmemory
strength: 7
---
# Content

Architecture: hermes.polymicro.net is a reverse-proxy chain. DNS CNAME->polymicro.net->98.96.55.218 (pve public IP). pve apache2 vhost (sites-available/hermes.polymicro.net.conf) ProxyPasses to http://10.1.2.7:8787/ = this Mac mini's Hermes WebUI (LaunchAgent ai.hermes.webui, bootstrap.py, 0.0.0.0:8787). A public 503 = Mac webui process not running. Recovery: launchctl load ~/Library/LaunchAgents/ai.hermes.webui.plist. Self-heal: ai.hermes.webui-watchdog.plist probes 127.0.0.1:8787/health every 300s and bootstraps the webui if down. There is also an unrelated webui.polymicro.net vhost pointing at pve localhost:3001 (node service).
