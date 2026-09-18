---
type: file_edit
title: A high-level overview of the architectural design of polymicro.net
description: DNS CNAME->polymicro.net points to a reverse proxy chain in the form of hermes.polymicro.net, with Apache2 vhost and Proxypass to http://10.1.2.7:8787/ for Hermes WebUI.
resource: agentmemory://observation/obs_msg1zkl9_e8e58ac631e5
tags: ["Reverse proxy", "file_edit"]
timestamp: 2026-08-05T12:18:33.593915+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 9
confidence: 0.9
---
# Summary

The Mac mini is part of the hermes.polymicro.net reverse-proxy chain, with DNS CNAME->polymicro.net pointing to 98.96.55.218 and Apache2 vhost enabled for services.

## Facts
- Policymicro.net uses a reverse-proxy architecture
- The architecture includes Apache2 vhost

## Concepts
- Reverse proxy

_Importance: 9 · Confidence: 0.9_
