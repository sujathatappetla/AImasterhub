import React from "react";

const IframeComponent = () => {
  return (
    <div className="containerr">
      <h1 className="heading">GPT Chat </h1>
      <iframe
        src="https://qwen-qwen1-5-72b-chat.hf.space"
        frameBorder="0"
        width="100%vh"
        height="450"
        title="Embedded Iframe"
      ></iframe>
    </div>
  );
};

export default IframeComponent;
