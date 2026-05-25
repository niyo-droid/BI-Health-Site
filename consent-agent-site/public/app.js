const userInput = document.getElementById("userInput");
const parseButton = document.getElementById("parseButton");
const resultOutput = document.getElementById("resultOutput");
const modelSelect = document.getElementById("modelSelect");

parseButton.addEventListener("click", async () => {
  const inputText = userInput.value.trim();
  if (!inputText) {
    resultOutput.textContent = "Please enter a business requirement or description.";
    
  }

  resultOutput.textContent = "Parsing...";
  parseButton.disabled = true;

  try {
    const response = await fetch("/api/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: inputText, model: modelSelect.value })
    });

    const data = await response.json();
    if (!response.ok) {
      resultOutput.textContent = `Error: ${data.error || "Unable to parse input."}`;
    } else {
      resultOutput.textContent = data.result;
    }
  } catch (error) {
    resultOutput.textContent = `Error: ${error.message}`;
  } finally {
    parseButton.disabled = false;
  }
});
