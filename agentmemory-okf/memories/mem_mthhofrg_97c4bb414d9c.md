---
type: Fact
title: # Vasilios Syrakis: Atlassian SRE Layoff Story

source: grok
session_id: ae5b61f
description: # Vasilios Syrakis: Atlassian SRE Layoff Story

source: grok
session_id: ae5b61f2-90dd-4e11-9f9c-4c0d78e83380
resource: grok://conversation/ae5b61f2-90dd-4e11-9f9c-4c0d78e83380

# Conversation

- **Se
resource: agentmemory://memory/mem_mthhofrg_97c4bb414d9c
tags: ["okf", "okf-grok", "grok", "grok://conversation/ae5b61f2-90dd-4e11-9f9c-4c0d78e83380"]
timestamp: 2026-08-31T17:05:16.392Z
source: agentmemory
strength: 7
---
# Content

# Vasilios Syrakis: Atlassian SRE Layoff Story

source: grok
session_id: ae5b61f2-90dd-4e11-9f9c-4c0d78e83380
resource: grok://conversation/ae5b61f2-90dd-4e11-9f9c-4c0d78e83380

# Conversation

- **Session ID:** `ae5b61f2-90dd-4e11-9f9c-4c0d78e83380`
- **Source:** grok
- **Model:** grok-3
- **Started:** 2026-08-10T13:47:20Z
- **Messages:** 2

---

### 👤 User — 2026-08-10T13:47:41Z

Vasilios Syrakis

---

### 🤖 Assistant — 2026-08-10T13:47:41Z

**Vasilios Syrakis is a senior systems/platform engineer (SRE-focused) based in Sydney, Australia, of Greek background, best known for his nearly eight-year tenure at Atlassian and a viral 2026 YouTube video about the infrastructure he built there.**<grok:render card_id="d4e1ff" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">0</argument></grok:render>

He worked on Atlassian’s edge infrastructure (the “plumbing” supporting products like Jira, Confluence, and Bitbucket). Key contributions included:

- An Open Service Broker / self-service platform (using FastAPI, SQS, DynamoDB, etc.) that let internal teams provision load balancers and related resources without tickets.
- Migration from expensive enterprise hardware load balancers to open-source Envoy proxies, plus a management/control-plane server (later open-sourced as Sovereign) handling dynamic configuration.
- Supporting ~2,000 proxies across 13 AWS regions, with automation via tools like Packer, SaltStack, and related infrastructure-as-code practices.
- Shared services (authentication sidecar written in Rust, access logging, rate limiting) applied via a sidecar model.<grok:render card_id="57a3f5" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">70</argument></grok:render>

In March 2026, Atlassian laid off roughly 10% of its workforce (~1,600 people) amid a shift toward AI investment (while reporting strong revenue). Syrakis was among those affected after ~8 years. Instead of a public rant, he posted a ~38–40-minute technical walkthrough video (“I was laid off by Atlassian”) reflecting on his work, architecture decisions, lessons learned, and what he was proud of. It carefully stuck to high-level design and public tools (no proprietary code, credentials, or customer data) and rapidly gained over 1 million views, drawing widespread discussion in tech circles as a strong example of transparent, staff-level engineering communication.<grok:render card_id="0c4920" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">36</argument></grok:render>

**Background notes** (from his own statements): He did not finish high school (left after 10th grade) and has no university degree. He started in help desk roles, self-taught programming (beginning with Windows/PowerShell, then Python and other technologies), joined Atlassian as a systems engineer, and was promoted to senior after delivering major projects. He has spoken about mentoring, engineering trade-offs, continuous learning, and related topics.<grok:render card_id="8dd8f0" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">3</argument></grok:render>

**Online presence** (as of recent data):
- YouTube: @vsyrakis (100k+ subscribers) — technical videos, live streams (e.g., learning Kubernetes, OCaml, systems topics), responses to the original video’s attention, book reviews, and career reflections. He has also appeared on the NeetCode podcast discussing non-traditional learning, Atlassian life, AI impacts, interviews, and more.
- LinkedIn: au.linkedin.com/in/vsyrakis (several thousand followers).
- X/Twitter: @vasilios_s (bio references the viral layoff video; posts on engineering, learning, and personal topics; describes himself as a Rust enthusiast and “soon to be Dad”).
- Twitch: twitch.tv/vsyrakis.

He continues creating educational content on systems, infrastructure, and learning in public. His story is frequently cited as an example of turning a layoff into a high-visibility demonstration of expertise.

---
