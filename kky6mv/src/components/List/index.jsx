import React from "react";
import { Link } from "react-router-dom";
import gptImage from "./gpt.jpg";
import "./index.css";

const items = [
  {
    title: "Image Generator",
    description: "A single click brings your ideas to life in stunning images.",
    link: "/Dalle",
    imgSrc:
      "https://venturebeat.com/wp-content/uploads/2023/04/annevb_artificial_intelligence_creating_art_-_artistic_flowing__626e5b84-c444-4697-9565-75fd3ffbfb78.png?fit=750%2C375&strip=all",
    buttonName: "Create Art", // Custom button name for this item
  },
  {
    title: "Prompt Generator",
    description: "Generate Creative Prompts for AI",
    link: "/Prompt_generator",
    imgSrc:
      "https://img.freepik.com/free-photo/ai-cloud-with-robot-face_23-2149739758.jpg?size=626&ext=jpg&uid=R122638954&ga=GA1.1.609944533.1698240239&semt=ais",
    buttonName: "Discover", // Custom button name for this item
  },
  {
    title: "GPT-Chat",
    description: "Your AI Conversational Partner",
    link: "/GPT-Chat", // Update the link to the appropriate URL
    imgSrc: gptImage, // Update the image URL
    buttonName: "Chat Now", // Custom button name for this item
  },
];

const List = () => {
  const openLink = (link) => {
    // Open the link in the same tab
    window.location.href = link;
  };

  return (
    <div className="app-container">
      <div className="background-img">
        <div class="containerinterface">
        <h2 class="heading1 hero-title">Journey <span className="spannnnnnn">to</span> explore <br></br><span className="spannnnnnn">AI Tools</span></h2>
        </div>
        <div className="containerinterface1">
        <p className="para-img">
        AI tools streamline daily tasks, enhance learning, personalize experiences, improve efficiency,<br></br> and foster innovation,  significantly elevating modern lifestyles and productivity.</p>
        </div>
        
      </div>
      {items.map((item, index) => (
        <div className="box" key={index}>
          <div className="info-box">
            <h1 className="h1">{item.title}</h1>
            <p className="para">{item.description}</p>
            {item.link.startsWith("/") ? (
              <Link to={item.link}>
                <button className="buttonn" type="button">
                  {item.buttonName} {/* Use the custom button name */}
                </button>
              </Link>
            ) : (
              <button
                className="button-explore"
                type="button"
                onClick={() => openLink(item.link)}
              >
                {item.buttonName} {/* Use the custom button name */}
              </button>
            )}
          </div>
          <img className="im" src={item.imgSrc} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default List;