import React from "react";
import "./index.css";
const Text2Video = () => {
  const iframeSrc = "https://mihirrajeshpanchal-stablediffusion.hf.space";

  return (
    <div className="containerr">
      <h1 className="heading">Text to Video </h1>
      <iframe
        src={iframeSrc}
        frameBorder="0"
        width="100%vh"
        height="450"
        title="Embedded Iframe"
      ></iframe>
    </div>
  );
};

export default Text2Video;
