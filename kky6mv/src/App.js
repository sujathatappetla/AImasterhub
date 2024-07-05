import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import Prompt_generator from "./components/Prompt_generator";
import AboutUs from "./components/Aboutus";
import Dalle from "./components/Dalle";
import ForgotPassword from "./components/ForgotPassword";
import ImageGenerator from "./ImageGenerator";

import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import IframeComponent from "./components/ChatGPTIframe";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); //useState
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Home");
    }
    console.log("test");
  }, [isAuthenticated]);
  return (
    <div>
      {isAuthenticated ? (
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Prompt_generator" element={<Prompt_generator />} />
          <Route path="/generate" element={<ImageGenerator />} />
          <Route path="/Dalle" element={<Dalle />} />
          <Route path="/p" element={<prompt />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/GPT-Chat" element={<IframeComponent />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="*"
            element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      )}
      
    
    </div>
  );
}

export default App;