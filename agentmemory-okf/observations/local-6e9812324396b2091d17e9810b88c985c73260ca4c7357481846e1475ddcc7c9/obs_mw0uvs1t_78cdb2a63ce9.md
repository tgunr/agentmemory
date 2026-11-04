---
type: file_edit
title: Certificate Deployment using Certbot
description: Deploying certificate for voip.carltontc.com
resource: agentmemory://observation/obs_mw0uvs1t_78cdb2a63ce9
tags: ["Certbot certificate deployment", "SSH with sudo privileges", "file_edit"]
timestamp: 2026-11-03T15:41:56.028449+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 7
confidence: 0.9
---
# Summary

The tool, Certbot, has successfully deployed the certificate for the domain voip.carltontc.com. The deployment was executed via SSH with sudo privileges.

## Facts
- Command executed: ssh davec@192.168.88.2 'sudo certbot --apache -d voip.carltontc.com --redirect --non-interactive --agree-tos -m davec@carltontc.com 2>&1 | tail -8'
- Output:
    Warning: Permanently added '192.168.88.2' (ED25519) to the list of known hosts.
Successfully deployed certificate for voip.carltontc.com to /etc/apache2/sites-available/voip.carltontc.com-le-ssl.conf
Congratulations! You have successfully enabled HTTPS on https://voip.carltontc.com

## Concepts
- Certbot certificate deployment
- SSH with sudo privileges

## Files
- `/etc/apache2/sites-available/voip.carltontc.com-le-ssl.conf`

_Importance: 7 · Confidence: 0.9_
