---
type: file_edit
title: Xcode tools found in Homebrew installation
description: Xcrun and xcodegen binaries used.
resource: agentmemory://observation/obs_ms59om0o_b9c1f116a403
tags: ["xcodegen", "xcrun", "file_edit"]
timestamp: 2026-07-28T23:08:31.221187+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 5
confidence: 0.9
---
# Summary

After running a command to test the availability of Xcode tools, we can see that Homebrew is installing these binaries in non-standard locations. This may potentially cause issues if we rely on these tools elsewhere.

## Facts
- Homebrew installation is using Xcode binaries from /opt/homebrew/bin/xcodegen and /usr/bin/xcrun.
- The /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild binary was found in the user's work directory.

## Concepts
- xcodegen
- xcrun

## Files
- `/opt/homebrew/bin/x_codegen`
- `/usr/bin/xcrun`
- `/Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild`

_Importance: 5 · Confidence: 0.9_
