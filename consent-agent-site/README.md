# Consent Agent Site

A simple interactive website for the Data Privacy Consent Structuring Assistant.

## What it does

- Accepts unstructured business requirements for data collection, consent, and preferences
- Sends the content to an LLM using the agent prompt
- Displays the structured JSON result for consent management platforms like OneTrust

## Setup

1. Open a terminal in this folder:
   ```bash
   cd "c:\Users\niygaur\OneDrive - Deloitte (O365D)\Documents\BI Health Site\consent-agent-site"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your OpenAI API key:
   - Windows PowerShell:
     ```powershell
     $env:OPENAI_API_KEY = "your-key"
     npm start
     ```
   - Or use a `.env` wrapper like `cross-env` if preferred.

4. Open the site:
   - http://localhost:3000

## Notes

- The site uses the prompt template in `prompt.template.txt`.
- The backend proxy is in `server.js`.
- You can change the model selection in the UI.
