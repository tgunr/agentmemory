#!/bin/bash
# Wrapper script to run the local agentmemory build via Launchd
# This ensures Launch Control uses the version with Redis support.

# Navigate to the local repository
cd /Volumes/AI/agentmemory

# Execute the locally built CLI using the system Node.js
exec /opt/homebrew/bin/node dist/cli.mjs
