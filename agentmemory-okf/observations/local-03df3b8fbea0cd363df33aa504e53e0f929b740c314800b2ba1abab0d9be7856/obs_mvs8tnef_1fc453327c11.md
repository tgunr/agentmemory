---
type: CommandRun
title: SSh command on pve.root
description: Executed a command on the pve.root user
resource: agentmemory://observation/obs_mvs8tnef_1fc453327c11
tags: ["docker", "podman", "commandrun"]
timestamp: 2026-10-28T15:02:15.733694+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 6
confidence: 0.9
---
# Summary

The command "ssh pve.root 'echo \"=== source files on disk ===\"; ls -la /etc/apt/sources.list.d/ 2>/dev/null; echo; echo \"=== docker installed? ===\"; dpkg -l 2>/dev/null | grep -iE \"^ii.*(docker|containerd)\" | awk \"{print \\$2, \\$3}\"; echo \"--- docker service ---\"; systemctl is-active docker 2>&1; systemctl is-enabled docker 2>&1; echo; echo \"=== podman ===\"; podman --version 2>&1; systemctl is-active podman 2>&1; podman ps --format \"{{.Names}} {{.Status}}\" 2>&1 | head -5; echo; echo \"=== plex + windsurf keyrings ===\"; ls /etc/apt/keyrings/ /usr/share/keyrings/ 2>/dev/null | grep -iE \"plex|windsurf|codeium|docker\"'", output "=== source files on disk ===\ntotal 62\ndrwxr-xr-x 2 root root  11 Oct 27 18:05 .\ndrwxr-xr-x 9 root root  14 Oct 27 14:58 ..\n-rw-r--r-- 1 root root 138 Sep  1  2025 archive_uri-http_apt_llvm_org_bookworm_-bookworm.list\n-rw-r--r-- 1 root root 113 Sep  1  2025 docker.list\n-rw-r--r-- 1 root root  83 Sep  1  2025 neo4j.list\n-rw-r--r-- 1 root root 155 Mar 23  2026 nodesource.sources\n-rw-r--r-- 1 root root  95 Oct 27 11:01 plex.list\n-rw-r--r-- 1 root root 415 Oct 27 15:14 pve-no-subscription.list\n-rw-r--r-- 1 root root 102 Oct 27 04:18 sury-php.list\n-rw-r--r-- 1 root root 278 Oct 27 17:47 vscode.sources\n-rw-r--r-- 1 root root 156 Sep  1  2025 windsurf.list\n</fact>
  </facts>
  <narrative>The command output shows the contents of the source files on disk, Docker installed versions, and Docker services status, as well as the installation of Podman and related keyrings.

## Facts
- Executed a command using SSH on the pve.root user

## Concepts
- docker
- podman

## Files
- `/etc/apt/sources.list.d/`
- `/usr/share/keyrings/`

_Importance: 6 · Confidence: 0.9_
