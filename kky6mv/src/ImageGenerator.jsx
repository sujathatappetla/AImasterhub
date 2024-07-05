import React, { useState } from "react";
import "./ImageGenerator.css";

const ImageGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div className="ai-image-generator">
      <h1 className="header">
        Image <span>Generator</span>
      </h1>
      {/* <p>
        Generate stunning art with the power of AI. Just type your creative
        prompt here, and we'll bring your imagination to life.
      </p>*/}

      <div className="search-box">
        <form className="gen-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="input"
              className="search-input"
              placeholder="Type your creative prompt here..."
            />
            <button className="generate-btn" type="submit">
              Generate
            </button>
          </div>
        </form>
      </div>
      <div>
        {loading && <div className="load">Loading...</div>}
        {!loading && output && (
          <div>
            <img className="imggg" src={output} alt="Generated Art" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
