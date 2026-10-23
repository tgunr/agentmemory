---
type: CommandRun
title: DMARC lookup and spamhaus
description: Dig command on DMARC and spamhaus hosts
resource: agentmemory://observation/obs_mvjj52nw_d8cc46907aa7
tags: ["DIG command", "commandrun"]
timestamp: 2026-10-22T12:41:09.304485+00:00
source: agentmemory
session_id: 20261022_073125_88e4bf
importance: 6
confidence: 0.9
---
# Summary

The tool executed a dig command to identify hosts on the spamhaus list and checked their DMARC policy.

## Facts
- Command executed: for bl in zen.spamhaus.org bl.spamcop.net b.barracudacentral.org do r=$(dig +short 218.55.96.98.$bl A); echo \"$bl -> ${r:-not listed}\"; done; echo \"== DMARC pol:\"; dig +short TXT _dmarc.carlontc.com | head -3;

## Concepts
- DIG command

_Importance: 6 · Confidence: 0.9_
