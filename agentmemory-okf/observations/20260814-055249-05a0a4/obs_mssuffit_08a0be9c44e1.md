---
type: Observation
title: Reading configuration file
description: Extracting terminal settings from local.py
resource: agentmemory://observation/obs_mssuffit_08a0be9c44e1
tags: ["shell_init_files", "auto_source_bashrc", "observation"]
timestamp: 2026-08-14T11:07:56.879774+00:00
source: agentmemory
session_id: 20260814_055249_05a0a4
importance: 6
confidence: 0.9
---
# Summary

The program read a configuration file that contains settings for the terminal. It used default values for the terminal setting and set auto_source_bashrc to True, relying on the user's bashrc file not to break the login-shell snapshot.

## Facts
- Loaded config file using hermes_cli.config.load_config() with default values for terminal settings.
- The auto_source_bashrc path is enabled for the login-shell snapshot, but users are trusted to provide their own explicit list of files.

## Concepts
- shell_init_files
- auto_source_bashrc

## Files
- `/Users/davec/.hermes/hermes-agent/tools/environments/local.py`

_Importance: 6 · Confidence: 0.9_
