---
type: file_edit
title: Python function validation for profile names
description: Normalizes and validates input profiles name and alias.
resource: agentmemory://observation/obs_msezrt6r_fb523a9f8b77
tags: ["file_edit"]
timestamp: 2026-08-04T18:28:46.079273+00:00
source: agentmemory
session_id: 20260804_132551_abb885
importance: 6
confidence: 0.75
---
# Summary

A Python utility function was used in the hermes profile management system to validate and normalize profile names. This ensures consistency with disk storage layout and UI UX for user flexibility.

## Facts
- Regular expression used for normalization: [a-z0-9][a-z0-9_-]{0,63}
- Reserved names are restricted due to collateral on-disk collisions

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/profiles.py`

_Importance: 6 · Confidence: 0.75_
