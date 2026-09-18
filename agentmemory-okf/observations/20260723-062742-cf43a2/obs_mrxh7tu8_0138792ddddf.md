---
type: file_edit
title: Hermes config validation issue
description: yaml parsing error with fallback to default config
resource: agentmemory://observation/obs_mrxh7tu8_0138792ddddf
tags: ["YAML validation", "file_edit"]
timestamp: 2026-07-23T12:17:15.722853+00:00
source: agentmemory
session_id: 20260723_062742_cf43a2
importance: 7
confidence: 0.9
---
# Summary

The Hermes command encountered a YAML parsing issue in the ranch configuration file. It fell back to default configurations, and a backup of the corrupt file was saved for reference.

## Facts
- Hermet failed to parse ranch config yaml file
- Default config overwritten due to invalid yaml formatting

## Concepts
- YAML validation

## Files
- `/Users/davec/.hermes/profiles/ranch/config.yaml.corrupt.20260723-071715.bak`

_Importance: 7 · Confidence: 0.9_
