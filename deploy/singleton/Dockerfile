FROM node:22-slim

ARG III_VERSION=0.11.2

RUN apt-get update \
 && apt-get install -y --no-install-recommends openssl ca-certificates curl \
 && rm -rf /var/lib/apt/lists/*

# iii-engine — the function bus / REST backend
ADD https://github.com/iii-hq/iii/releases/download/iii/v${III_VERSION}/iii-x86_64-unknown-linux-gnu.tar.gz /tmp/iii.tar.gz
RUN tar -xzf /tmp/iii.tar.gz -C /usr/local/bin && chmod +x /usr/local/bin/iii && rm /tmp/iii.tar.gz

# agentmemory CLI + MCP shim
RUN npm install -g @agentmemory/agentmemory @agentmemory/mcp

WORKDIR /app
# Pre-generated config rewritten for 0.0.0.0 and absolute data path
COPY iii-config.docker.yaml /app/iii-config.yaml
RUN sed -i 's|host: 127.0.0.1|host: 0.0.0.0|g' /app/iii-config.yaml \
 && sed -i 's|file_path: ./data/|file_path: /agentmemory-data/|g' /app/iii-config.yaml \
 && sed -i 's|file_path: /data/|file_path: /agentmemory-data/|g' /app/iii-config.yaml

# Persisted secret across restarts
RUN openssl rand -hex 32 > /app/.hmac && chmod 600 /app/.hmac
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3111 3112 3113 3001 49134

ENTRYPOINT ["/entrypoint.sh"]
