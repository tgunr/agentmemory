---
type: file_edit
title: CL searches
description: Craigslist Craigslist searches
resource: agentmemory://observation/obs_mvxynjo2_4e9c1d7ba0d6
tags: ["Craigslist search", "file_edit"]
timestamp: 2026-11-01T15:04:11.846182+00:00
source: agentmemory
session_id: local-379e381695ac0dc58260608102870017d7de64e2d04b195e560fa6314f6d745a
importance: 7
confidence: 0.9
---
# Summary

The script executed a Craigslist search, parsing 0 items from the results.

## Facts
- BrowserExec executed the script with code: "# Craigslist searches\nimport json\n\nresults = {}\ncl_searches = [\n    ('rtx 3090', 'https://chicago.craigslist.org/search/sss?query=rtx+3090&sort=date'),\n    ('rtx 4080', 'https://chicago.craigslist.org/search/sss?query=rtx+4080&sort=date'),\n    ('tesla p40', 'https://chicago.craigslist.org/search/sss?query=tesla+p40&sort=date'),\n    ('rtx a4000', 'https://chicago.craigslist.org/search/sss?query=rtx+a4000&sort=date'),\n]\n\nfor name, url in cl_searches:\n    try:\n        new_tab(url)\n        wait_for_load()\n        js('void(setTimeout(function(){}, 4000))')\n        data = js('''(() => {\n            const items = [];\n            // Try static results first\n            const rows = document.querySelectorAll('.cl-static-search-result, .result-row, li.cl-search-result');\n            for (let i = 0; i < rows.length && i < 5; i++) {\n                const el = rows[i];\n                const titleEl = el.querySelector('.title, .result-title, a');\n                const priceEl = el.querySelector('.price');\n                const linkEl = el.querySelector('a');\n                if (titleEl && linkEl) {\n                    const title = titleEl.innerText.trim();\n                    const price = priceEl ? priceEl.innerText.trim() : 'n/a';\n                    const link = linkEl.href;\n                    if (title && !title.match(/we buy|wanted|looking for/i)) {\n                        items.push({title, price, link});\n                    }\n                }\n            }\n            return items;\n        })()''')\n        results[f'cl_{name}'] = data if data else []\n        print(f'CL {name}: {len(results[f\"cl_{name}\"])} items')\n    except Exception as e:\n        print(f'ERR cl {name}: {e}')\n        results[f'cl_{name}'] = []\n\nwith open('workspace/cl_deals.json', 'w') as f:\n    json.dump(results, f)\nprint('done')",
- Exit code: 0
      Output:
      ERR cl rtx 3090: Runtime.evaluate timed out; expression: document.readyState\nERR cl rtx 4080: Runtime.evaluate timed out; expression: document.readyState\nCL tesla p40: 0 items\nCL rtx a4000: 0 items\ndone

## Concepts
- Craigslist search

_Importance: 7 · Confidence: 0.9_
