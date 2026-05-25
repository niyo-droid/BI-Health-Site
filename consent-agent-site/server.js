import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import cors from "cors";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const promptTemplate = await readFile(path.join(__dirname, "prompt.template.txt"), "utf8");

app.post("/api/parse", async (req, res) => {
  try {
    const userInput = req.body.input?.trim();
    const model = req.body.model || "gpt-4.1-mini";

    if (!userInput) {
      return res.status(400).json({ error: "Input text is required." });
    }

    const exampleResult = {
      "processing_activity_name": "Newsletter Subscription",
      "domain": "Marketing",
      "data_subject": "User",
      "personal_data_collected": ["Name"],
      "purpose_of_processing": "Newsletter communication",
      "legal_basis": "Consent",
      "consents": [
        {
          "consent_name": "Newsletter Subscription",
          "consent_type": "Opt-in",
          "channels": ["Email"],
          "preferences": {
            "type": "Frequency",
            "options": ["Daily", "Weekly", "Monthly"]
          }
        }
      ],
      "compliance": {
        "consent_collected": "Not specified",
        "notice_provided": "Not specified"
      }
    };

    return res.json({ result: JSON.stringify(exampleResult, null, 2) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || "Unexpected error" });
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Consent Agent site listening on http://localhost:${port}`);
});
