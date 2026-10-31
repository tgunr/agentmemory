---
type: Observation
title: Tool usage
description: Terminal tool: grep
resource: agentmemory://observation/obs_mvuhi9pb_c098840a05ad
tags: ["Session mutability", "observation"]
timestamp: 2026-10-30T04:40:53.660580+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 5
confidence: 0.9
---
# Summary

This tool call was used to investigate the usage of session.mutate in the Hermes framework.

## Facts
- Tool command: cd /Users/davec/.hermes/hermes-agent && grep -rn \"session.workspace.move\\|session.mutate\" --include=*.py gateway/ | head -20
- Output from tool: gateway/session_local_mcp.py:6:A different specification is a ``session.mutate editor_mcp`` (control capability,\ngateway/session_local_mcp.py:334:    \"\"\"``session.mutate editor_mcp``: discover the new list and freeze it into the policy the next\ngateway/session_local_mcp.py:439:    \"\"\"The ``editor_mcp`` change on the owning principal's behalf, through ``session.mutate``'s own\ngateway/session_mutation.compress.py:13:    \"\"\"``session.mutate(compress)`` payload → the shared ``CompressRequest``.\ngateway/session_busy_controls.py:32:        # The legacy picker verb. On the owner a model pick is ``session.mutate`` operation=model\ngateway/session_deferred_pick.py:4:wins, survives an owner restart), and committed through ``session.mutate``'s own writer by the\ngateway/session_deferred_pick.py:114:        # confirmed resend (``payload.confirm``) commits it through session.mutate.\ngateway/session_policy.py:162:    # An ACP session's edit approval (``session.mutate edit_policy``; main's ACP modes): ``ask`` (Default),\ngateway/session_messaging_picks.py:3:Desktop and the TUI send ``session.mutate`` ``model`` / ``reasoning`` for whatever session they show.\ngateway/session_controls.py:93:                               'session.interrupt', 'session.events.since', 'session.mutate', 'session.stats',\ngateway/session_controls.py:178:                    'session.mutate': self.mutate, 'bot_relay.deliver': self.bot_deliver,\ngateway/session_mutations.py:197:    \"\"\"The writer phase of ``session.mutate``, and of the admission-start editor MCP re-freeze\ngateway/session_local_recovery.py:292:    Desktop hydration and the legacy ``session.history`` already use): a ``session.mutate`` rewind

## Concepts
- Session mutability

_Importance: 5 · Confidence: 0.9_
