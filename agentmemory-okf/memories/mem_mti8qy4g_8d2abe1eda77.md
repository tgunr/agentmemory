---
type: Fact
title: # LLM Temperature Setting

source: abacus
session_id: 1446873f73
resource: abacu
description: # LLM Temperature Setting

source: abacus
session_id: 1446873f73
resource: abacus://conversation/1446873f73

# Conversation

- **Session ID:** `1446873f73`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8qy4g_8d2abe1eda77
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/1446873f73"]
timestamp: 2026-09-01T05:43:03.136Z
source: agentmemory
strength: 7
---
# Content

# LLM Temperature Setting

source: abacus
session_id: 1446873f73
resource: abacus://conversation/1446873f73

# Conversation

- **Session ID:** `1446873f73`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-21T23:07:37+00:00
- **Messages:** 4

---

### 👤 User

explain the temperature setting for a LLM

---

### 🤖 Assistant

The temperature setting is a configuration parameter used during the "sampling" phase of a Large Language Model's response generation. It essentially controls the balance between predictability and creativity in the model's output.

To understand how it works, it helps to look at what happens behind the scenes when a model predicts the next word (or token).

### How Temperature Works

When an LLM generates text, it doesn't just pick one word; it calculates a probability distribution for all possible next tokens. For example, if the prompt is "The sky is," the model might assign:
*   Blue: 80%
*   Clear: 10%
*   Cloudy: 5%
*   Falling: 1%

The temperature setting ($T$) is applied to these probabilities using a mathematical function.

#### Low Temperature (0.1 – 0.4)
When the temperature is low, the model becomes more "confident" and deterministic. It heavily favors the most likely tokens and suppresses the less likely ones. This results in output that is:
*   Highly predictable and repetitive.
*   Factual and

concise.
*   Stable (you will likely get the same answer if you ask the same question twice).
*   **Best for:** Data extraction, coding, and technical explanations.

#### Neutral Temperature (0.7 – 1.0)
A temperature of 1.0 is typically the default. It maintains the original probability distribution calculated by the model. This provides a balance of coherence and variety.
*   **Best for:** General conversation and standard writing tasks.

#### High Temperature (1.2 – 2.0)
As the temperature increases, the probability distribution "flattens." The gap between the most likely word and the "long-tail" (unlikely) words shrinks. The model is much more likely to pick a random or unexpected token. This results in:
*   Creative, diverse, and sometimes "wild" output.
*   An increased risk of "hallucinations" or nonsensical sentences.
*   High variability between responses.
*   **Best for:** Brainstorming, poetry, and creative storytelling.

### Summary Table

| Temperature | Vibe | Consistency | Use Case |
| :--- |

:--- | :--- | :--- |
| **0.0** | Deterministic | Highest | Math, Logic, Fact-checking |
| **0.3** | Focused | High | Technical writing, Summarization |
| **0.7** | Balanced | Medium | Chatting, Email drafting |
| **1.0+** | Creative | Low | Creative writing, Idea generation |

In short, think of temperature as a "randomness" dial. Turning it down makes the model a safe, literal-minded assistant; turning it up makes it a creative, unpredictable partner.

---

### 👤 User

How do I provide previou conversation context to a ollama model  when running s custom model created from a .mf file

---

### 🤖 Assistant

To provide previous conversation context to an Ollama model when using a custom model created from a `Modelfile` (the `.mf` file you mentioned), you need to understand that the model itself is "stateless." It does not remember previous interactions unless you manually pass the history back to it in each new request.

There are two primary ways to handle this: through the **Ollama API** (the most common method for developers) or by using the **CLI** (for manual testing).

### 1. Using the Ollama API (Recommended)

The Ollama API expects a `messages` array that contains the entire conversation history. Each time you send a new prompt, you must include all previous "user" and "assistant" messages so the model has the context.

#### Example API Call (Python/cURL)
If you are using the `/api/chat` endpoint, your request body should look like this:

```json
{
  "model": "your-custom-model-name",
  "messages": [
    { "role": "user", "content": "Hello, my name is Alex." },
    { "role": "assistant", "content":

"Hello Alex! How can I help you today?" },
    { "role
