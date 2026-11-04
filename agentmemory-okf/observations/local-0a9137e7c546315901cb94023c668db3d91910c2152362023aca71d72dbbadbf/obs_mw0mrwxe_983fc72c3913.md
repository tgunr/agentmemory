---
type: file_edit
title: FreePBX php script execution error
description: Executing command on 192.168.88.230
resource: agentmemory://observation/obs_mw0mrwxe_983fc72c3913
tags: ["FreePBX BMO Class", "Module installation", "PHP Fatal error", "file_edit"]
timestamp: 2026-11-03T11:54:58.795715+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 7
confidence: 0.9
---
# Summary

The post_tool_call hook executed was related to the php execution on the target machine 192.168.88.230, resulting in a fatal error due to the non-existence of the FreePBX BMO Class &quot;Getnotcompletemodules&quot;.

## Facts
- Command input: ssh root@192.168.88.230 &39;php -r \&quot;require \\&quot;/etc/freepbx.conf\\&quot;; \\$o=FreePBX::OOBE(); print_r(\&quot;\$o-&gt;getNotCompleteModules();\&quot); print_r(\&quot;\$o-&gt;getConfig();\&quot); 2>&1 | head -20&#39;' 2>&1 | head -20
- Output: Warning: Permanently added &#39;192.168.88.230&#39; (ED25519) to the list of known hosts.\r\nPHP Fatal error: Uncaught Exception: Unable to locate the FreePBX BMO Class &#39;Getnotcompletemodules&#39; A required module might be disabled or uninstalled.

## Concepts
- FreePBX BMO Class
- Module installation
- PHP Fatal error

## Files
- `/var/www/html/admin/libraries/BMO/Self_Helper.class.php`

_Importance: 7 · Confidence: 0.9_
