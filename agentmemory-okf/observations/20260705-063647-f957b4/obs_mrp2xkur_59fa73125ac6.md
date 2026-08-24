---
type: CommandRun
title: TypeScript typecheck failed with TS5112 error
description: Isolated tsc invocation blocked by tsconfig.json presence
resource: agentmemory://observation/obs_mrp2xkur_59fa73125ac6
tags: ["TypeScript compiler", "typecheck", "tsconfig.json", "command-line flags", "TS5112 error", "commandrun"]
timestamp: 2026-07-17T15:15:13.486901+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Attempted isolated TypeScript typecheck on profile.ts and slash.ts with custom compiler flags. TypeScript rejected the invocation because tsconfig.json exists in the project but won't be loaded when files are explicitly specified on the commandline. Need to use --ignoreConfig flag or adjust approach.

## Facts
- Command: tsc --noEmit --skipLibCheck --jsx react-jsx --esModuleInterop --moduleResolution bundler --module esnext --target es2022 --strict false --types node src/store/profile.ts src/app/session/hooks/use-prompt-actions/slash.ts
- Error TS5112: tsconfig.json is present but will not be loaded if files are specified on commandline
- Working directory: /tmp/hermes-profile-fix/apps/desktop
- Exit code: 0 despite error message

## Concepts
- TypeScript compiler
- typecheck
- tsconfig.json
- command-line flags
- TS5112 error

## Files
- `src/store/profile.ts`
- `src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 5 · Confidence: 1_
