---
type: file_edit
title: Nextcloud: Service Grant Policy
description: Cd into /var/www/nextcloud/apps/mcp and executed custom command
resource: agentmemory://observation/obs_mvqhj0sk_1805bddfb3ff
tags: ["Service Grant Policy", "SSED", "file_edit"]
timestamp: 2026-10-27T09:30:24.064712+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

The tool, terminal, was used to execute a custom command. The command executed a series of commands to inspect and update Nextcloud's Service Grant Policy.

## Facts
- Command: timeout 300 ssh -o ConnectTimeout=15 pve.root
- Command: set +e&amp;echo &#39;=== constants ===&#39;</fat>
    <fact>Command: grep -nE &#39;SERVICE_KEY|const APP&#39; lib/Service/GrantPolicy</fat>
    <fact>Command: sed -n &#39;\/function adminSetGlobalEnabled\//p&#39; lib/Service/Policy/PolicyWriter</fat>
    <fact>Command: mysql -N -e &#39;select * from nextcloud.oc_mcp_policy_state;&#39; 2&gt;&amp;1

## Concepts
- Service Grant Policy
- SSED

## Files
- `/var/www/nextcloud/apps/mcp/GrantPolicy.php`

_Importance: 8 · Confidence: 0.9_
