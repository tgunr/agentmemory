#!/bin/sh
set -euo pipefail

export AGENTMEMORY_DATA_DIR="/agentmemory-data"
export AGENTMEMORY_SECRET="${AGENTMEMORY_SECRET:-$(cat /app/.hmac 2>/dev/null || openssl rand -hex 32)}"
export AGENTMEMORY_URL="${AGENTMEMORY_URL:-http://127.0.0.1:3111}"

mkdir -p "$AGENTMEMORY_DATA_DIR"
chmod 755 "$AGENTMEMORY_DATA_DIR"

# Rewrite iii-config for container use
sed -i 's|host: 127\.0\.0\.1|host: 0.0.0.0|g' /app/iii-config.yaml 2>/dev/null || true
sed -i 's|file_path: \./data/|file_path: /agentmemory-data/|g' /app/iii-config.yaml 2>/dev/null || true
sed -i 's|file_path: /data/|file_path: /agentmemory-data/|g' /app/iii-config.yaml 2>/dev/null || true

# Start iii-engine (the function bus / REST backend) in background
echo "[entrypoint] Starting iii-engine..."
iii --config /app/iii-config.yaml > /app/engine.log 2>&1 &
ENGINE_PID=$!
sleep 3

# Start agentmemory CLI (connects to engine, registers workers, starts HTTP on 3113)
echo "[entrypoint] Starting agentmemory..."
AGENTMEMORY_URL="${AGENTMEMORY_URL}" agentmemory start > /app/agentmemory.log 2>&1 &
AGENT_PID=$!
sleep 2

# Start MCP proxy (exposes all agentmemory tools over SSE)
echo "[entrypoint] Starting MCP proxy..."
AGENTMEMORY_URL="${AGENTMEMORY_URL}" agentmemory mcp > /app/mcp.log 2>&1 &

echo "[entrypoint] All services started."
wait $AGENT_PID
