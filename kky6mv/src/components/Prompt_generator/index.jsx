import React, { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyBllxi4pzhsphZCYXQExiYwrleDFWF_9IA"; // Replace with your actual API key

async function run(userInput, setGeneratedPrompt, setError) {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const parts = [
      {
        text: ` generate a 1 line prompt that prompt ${userInput} `,
      },
      { text: "output: " },
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });

    const responseText = result.response.text();
    setGeneratedPrompt(responseText.trim());
    setError(null); // Reset error state if request succeeds

    console.log("Generated Prompt:", responseText); // Log the generated prompt
  } catch (error) {
    setError("Error generating prompt. Please try again later.");
  }
}

function Prompt_generator() {
  const [userInput, setUserInput] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (userInput.trim() !== "") {
  //     run(userInput, setGeneratedPrompt, setError);
  //   }
  // }, [userInput]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ color: "#007bff" }}>Prompt Generator</h1>
      <h2 style={{ marginBottom: "10px" }}>Enter Prompt:</h2>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your prompt here..."
        style={{
          padding: "5px",
          width: "100%",
          marginBottom: "10px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={() => run(userInput, setGeneratedPrompt, setError)}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Generate Prompt
      </button>
      <h2 style={{ marginTop: "20px" }}>Generated Prompt:</h2>
      {error ? <p>{error}</p> : <p>{generatedPrompt}</p>}
    </div>
  );
}

export default Prompt_generator;
