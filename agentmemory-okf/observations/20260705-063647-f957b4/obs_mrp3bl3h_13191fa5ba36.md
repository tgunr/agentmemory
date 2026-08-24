---
type: Observation
title: Viewed Hermes profile-management skill documentation
description: Details on profile paths, session vs profile, and cross-profile write guards
resource: agentmemory://observation/obs_mrp3bl3h_13191fa5ba36
tags: ["Hermes profiles", "Profile management", "Cross-profile write guards", "Session vs profile isolation", "Configuration synchronization", "observation"]
timestamp: 2026-07-17T15:26:06.984972+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The agent viewed the profile-management skill documentation to understand Hermes profile architecture. The documentation clarifies the distinction between sessions and profiles, explains that profile switching requires a process restart, and details how to bypass cross-profile write guards when copying skills.

## Facts
- Skill profile-management handles copying skills, syncing configs, and cross-profile operations in Hermes.
- Default profile paths are ~/.hermes/config.yaml and ~/.hermes/skills/.
- Named profile paths are ~/.hermes/profiles/&lt;name&gt;/config.yaml and ~/.hermes/profiles/&lt;name&gt;/skills/.
- Active profile is determined by the $HERMES_HOME environment variable.
- A profile is a persistent isolated home directory, while a session is a single conversation within a profile.
- Switching profiles requires restarting Hermes with hermes -p &lt;profile&gt; or setting HERMES_HOME.
- The command hermes profile use &lt;name&gt; is sticky and affects the next invocation, not the current process.
- Cross-profile writes are blocked by default and require cross_profile=True in write_file to bypass.
- Profile CLI commands include list, create, show, export, and import.

## Concepts
- Hermes profiles
- Profile management
- Cross-profile write guards
- Session vs profile isolation
- Configuration synchronization

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/skills/`
- `~/.hermes/profiles/&lt;name&gt;/config.yaml`
- `~/.hermes/profiles/&lt;name&gt;/skills/`
- `~/.hermes/active_profile`

_Importance: 4 · Confidence: 1_
