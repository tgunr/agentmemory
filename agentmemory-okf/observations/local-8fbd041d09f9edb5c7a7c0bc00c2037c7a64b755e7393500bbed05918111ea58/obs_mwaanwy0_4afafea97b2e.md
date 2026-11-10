---
type: CommandRun
title: _skill_view hermes-ui
description: Tool skill view called with tool hermes-ui
resource: agentmemory://observation/obs_mwaanwy0_4afafea97b2e
tags: ["skill_view", "hermes-ui", "commandrun"]
timestamp: 2026-11-10T06:13:38.565495+00:00
source: agentmemory
session_id: local-8fbd041d09f9edb5c7a7c0bc00c2037c7a64b755e7393500bbed05918111ea58
importance: 4
confidence: 0.9
---
# Summary

The skill view tool was called with the tool hermes-ui, and the tool information was retrieved. The tool provides guidance on adding UI and readouts to Hermes desktop/TUI. The observation includes facts about the tool's behavior and usage hints for related files.

## Facts
- Tool success: true
- Tool info: {"description": "Use when adding UI or readouts to Hermes desktop/TUI.", "tags": [], "related_skills": [], "content": "---\nname: hermes-ui\ndescription: Use when adding UI or readouts to Hermes desktop/TUI.\n---\n\n# Hermes UI surface extensions\n\nTwo doors for adding UI/data readouts to Hermes clients. Pick by surface, and never rebuild first:\n\n| Surface | Door | Rebuild needed |\n|---|---|---|\n| Desktop app (status bar chips, panes, menus) | runtime plugin dropped in `~/.hermes/desktop-plugins/<id>/plugin.js` | NO — the dir is live-rescanned; loads into the RUNNING app |\n| TUI status bar / gateway payloads | Python field in `tui_gateway` + segment in `ui-tui` | bundle only — `dist/entry.js` auto-rebuilds on next launch |\n\nNever repack the desktop asar to add a status-bar chip or similar small UI addition — the plugin door ships it live with no relaunch. Reserve the asar rebuild path for core renderer code the plugin API cannot reach.\n\n## Standing rules\n\n- Gate a readout's visibility on the SURFACE'S OWN session state (desktop: `host.state.*`; TUI: server-side provider match), never on a field of the data feed being displayed — a feed-sourced fallback condition can be true by construction and silently defeat the gate.\n- UI code must not re-call provider APIs. Meter-style readouts flow from a local feed/status JSON (desktop reads it via `window.hermesDesktop.readFileText`) or ride the gateway payload — zero LLM tokens.\n- Payload producers: omit the key when there is no data (clients then render nothing), and wrap optional readouts in try/suppress — a status readout must never break usage reporting itself.\n- hermes-agent desktop: node_modules ARE installed (install succeeded eventually); default PATH lacks node — prefix commands with `export PATH=\"/Users/davec/.hermes/tools/node-26.7.0-darwin-arm64/bin:$PATH\"`. Verify with `npm run typecheck` in apps/desktop (exits 0 with no output). After adding i18n copy, run `npm run i18n:keys` — it regenerates tracked `locales/_keys.desktop.json`, which belongs in the feature commit.\n- Hermes repo Python is NOT system python3 (3.9, lacks StrEnum; the repo pins an uninstalled 3.11, so pyenv falls back to Xcode python). Prefix repo scripts and pytest with `PYENV_VERSION=3.13.2 pyenv exec python3`.\n- Verify before reporting: desktop plugin → `cp plugin.js /tmp/check.mjs && node --check /tmp/check.mjs` (bare `node --check` on `.js` parses CJS and rejects ESM); TUI → typecheck + status-rule vitest + contract staleness pytest.\n\n## Deep dives\n\n- `references.desktop-plugins.md` — plugin contract, SDK surface (`host.state`, `Tip`, `useValue`), status-bar areas/order, enablement, file reads, verification.\n- `references/tui-gateway-changes.md` — Usage/payload field recipe, contract regen + staleness test, status-bar segment pattern (width tiers, `ok()` gate, `fits()` tail budget), testing server helpers without importing the server.

## Concepts
- skill_view
- hermes-ui

_Importance: 4 · Confidence: 0.9_
