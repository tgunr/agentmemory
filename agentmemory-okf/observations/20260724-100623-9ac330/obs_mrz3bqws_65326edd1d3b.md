---
type: CommandRun
title: Run of python script to level variables
description: Command processed in terminal
resource: agentmemory://observation/obs_mrz3bqws_65326edd1d3b
tags: ["leveling", "commandrun"]
timestamp: 2026-07-24T15:23:56.280280+00:00
source: agentmemory
session_id: 20260724_100623_9ac330
importance: 6
confidence: 1
---
# Summary

This command processed in the terminal and produced output related to leveling variables.

## Facts
- Command executed: python3 /tmp/hermes-leveling-vars.py 2>&1 | tail -n 20
- Output result:
- Top: x= +0.000  y= +4.250   set_point=0.625\"\n     BR: x= +6.000  y= -3.500   set_point=0.750\"\n     BL: x= -7.000  y= -3.500   set_point=0.750\"\n\n-- COMPUTED LEG LENGTHS (planar span between adjacent points) --\n  Top->BR:   9.801\"\n  BR->BL:  13.000\"\n  BL->Top:  10.443\"\n\n  max radius from center (any point): 7.826\"\n\n-- LEVEL INDICATOR (constants) --\n  type=circular_bullseye  full_range=+/-2deg  rings=(1.0, 2.0)  sens=0.286deg/div (5/1000)\n\n-- BUBBLE FRACTION (tilt -> level-face offset, for overlay) --\n  tilt 0.0deg -> bubble +0.000 \ n  tilt 0.5deg -> bubble +0.250 \ n  tilt 1.0deg -> bubble +0.500 \ n  tilt 2.0deg -> bubble +1.000 \ n  tilt 3.0deg -> bubble +1.000 OFF-SCALE (coarse adjust)

## Concepts
- leveling

_Importance: 6 · Confidence: 1_
