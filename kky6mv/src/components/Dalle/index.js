import React from "react";

const Dalle = () => {
  return (
    <div className="container">
      <h1 className="heading">Image Generator</h1>
      <iframe
        src="https://ehristoforu-dalle-3-xl-lora-v2.hf.space"
        frameBorder="0"
        width="100%"
        height="450"
        title="Image Generator Iframe"
      ></iframe>
    </div>
  );
};

export default Dalle;
