# GDPR Q&A Agent — Local Demo

Overview
- A simple static Q&A assistant for GDPR Articles 1–35. Open `gdpr-agent.html` in a browser to use.

Files
- `gdpr-agent.html`: Frontend UI with a Q&A panel and article browser.
- `gdpr-data.json`: Seeded data for Articles 1–35 (first five articles seeded; the rest are placeholders you can edit).

How to use
1. Open `gdpr-agent.html` in your browser (double-click the file or serve the folder with a static server).
2. Type questions in the right-hand "AI Q&A Assistant" panel. Examples:
   - "Explain Article 5"
   - "What are lawful bases for processing?"
3. Click an article on the left to view summary, simple explanation, scenarios and FAQs.

Extending the dataset
- Edit `gdpr-data.json` and fill the `summary`, `simple`, `scenarios` and `faqs` fields for any article.
- Each object is: {"article": N, "title": "...", "text": "...", "summary": "...", "simple": "...", "scenarios": [...], "faqs": [{"q":"","a":""}]}

Optional: connect to an LLM (server required)
- The demo uses local fuzzy search (Fuse.js). To get generative, natural-language answers you can:
  1. Create a small server that accepts the user question and calls an LLM (OpenAI/other) combining the best-matching article texts as context.
  2. Return the model response to the frontend and display it in the chat area.

Example server flow (pseudo):
```js
// Receive POST {question}
// 1) Search gdpr-data.json for top matches
// 2) Build prompt: system + matched article summaries + user question
// 3) Call LLM API with the prompt
// 4) Return LLM reply to the client
```

Notes
- This project is a starting point: the local approach provides high-precision references to specific articles. For richer conversational explanations, use an LLM with the article text as context.
