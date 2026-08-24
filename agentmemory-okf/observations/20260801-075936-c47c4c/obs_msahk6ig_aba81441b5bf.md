---
type: Observation
title: Script documentation for email-unsubscribe tool
description: A skill written by Hermes Agent to automate email unsubscribe in Apple Mail.
resource: agentmemory://observation/obs_msahk6ig_aba81441b5bf
tags: ["observation"]
timestamp: 2026-08-01T14:47:52.236996+00:00
source: agentmemory
session_id: 20260801_075936_c47c4c
importance: 8
confidence: 0.75
---
# Summary

The email-unsubscribe skill uses a combination of natural language processing and automation to extractunsubscribe links from Apple Mail and unsubscribe users automatically, with manual confirmation required for some cases.

## Facts
- The script uses command-line arguments to select messages, named mailboxes, or flag-colored emails.
- The script can fall back to HTML body parsing if the `List-Unsubscribe` header is missing.

_Importance: 8 · Confidence: 0.75_
