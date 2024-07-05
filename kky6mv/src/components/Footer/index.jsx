import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <a href="#"><img src="https://herobot.app/wp-content/uploads/2022/11/AI-bot-1.jpg" alt="Company Logo" width="100" /></a>
          <h3>
            <span className="footer-heading-span">AIMasterHUB</span>
          </h3>
          <p className='paraaa'>AI Shaping Tomorrow </p>
        </div>
        <div className="column">
          <h3>AI</h3>
          <ul>
            <li><a href="#">ChatGPT</a></li>
            <li><a href="#">Image Generator</a></li>
            <li><a href="#">PromptAI</a></li>
            <li><a href="#">Invideo AI</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Useful Link</h3>
          <ul>
            <li><a href="#">Deep Fake</a></li>
            <li><a href="#">Claude AI</a></li>
            <li><a href="#">AllinoneAI</a></li>
            <li><a href="#">Notion</a></li>
          </ul>
        </div>
        
        <div className="column">
          <h3>Contact Us</h3>
          <p className='footerrrr'><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;sujatha, Amrutha</p>
          <p className='footerrrr'><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;8956286582</p>
          <p className='footerrrr'> <i className="fas fa-envelope"></i>&nbsp;&nbsp;AIhub123@gmail.com</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-whatsapp-square"></i></a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p className='footerrrr'>&copy; 2024 AI MasterHUB || Powered by Sujatha and team <span>&#10084;</span> </p>
        <p className='footerrrr'>Harnessing the power of artificial intelligence to simplify your life and elevate your experience</p>
      </div>
    </footer>
  );
};

export default Footer;