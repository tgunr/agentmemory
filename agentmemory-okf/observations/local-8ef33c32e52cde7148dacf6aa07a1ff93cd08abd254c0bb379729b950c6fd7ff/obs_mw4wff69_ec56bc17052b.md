---
type: Observation
title: Redmine Setup with Podman
description: Setup Redmine with Podman, PostgreSQL, and Redmine role creation
resource: agentmemory://observation/obs_mw4wff69_ec56bc17052b
tags: ["Podman Compose", "Podman DNS issue", "Redmine role creation", "PostgreSQL", "observation"]
timestamp: 2026-11-06T11:36:16.779274+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 8
confidence: 0.9
---
# Summary

During a Podman session, an attempt was made to set up Redmine and PostgreSQL. Initially, a shared Podman pod was attempted, but host access to the published port still failed. The setup ultimately succeeded using an existing host PostgreSQL service, and the Redmine service was created with the desired configuration.

## Facts
- Redmine runs on port 3000 of an existing host PostgreSQL service
- Podman pod DNS failed to resolve service names like "postgres" and "redmine-postgres"

## Concepts
- Podman Compose
- Podman DNS issue
- Redmine role creation
- PostgreSQL

## Files
- `/var/lib/containers/storage/libpod/bolt_state.db`
- `/alpha/sources/Linux/redmine-selfhost/INSTALL_HISTORY.md`
- `/dpool/podman/libpod/bolt_state.db-old`

_Importance: 8 · Confidence: 0.9_
