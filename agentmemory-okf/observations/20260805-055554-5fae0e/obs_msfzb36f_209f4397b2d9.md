---
type: CommandRun
title: External port reachability and DNS query
description: No context provided
resource: agentmemory://observation/obs_msfzb36f_209f4397b2d9
tags: ["subdomain resolution", "Certification validation", "TCP connectivity testing", "commandrun"]
timestamp: 2026-08-05T11:03:32.052533+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 7
confidence: 0.9
---
# Summary

The tool performed an external validation check using the terminal and executed several DNS queries to test the reachability of certain hosts. The process involved testing TCP connections on specific ports, obtaining DNS records for both the apex and subdomains of polymicro.net, and performing a TLS handshake to verify the SSL certificate.

## Facts
- Total of 3 ports checked (80 &amp; 443)
- POLYMICRO.NET has a DNS apex:

## Concepts
- subdomain resolution
- Certification validation
- TCP connectivity testing

_Importance: 7 · Confidence: 0.9_
