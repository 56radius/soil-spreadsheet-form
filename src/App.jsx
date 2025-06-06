import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing the splash screen
import SplashScreen from "./components/splashscreen/SplashScreen";

function App() {

  return (
    <Router>
      <Routes>
        {/* Splash screen */}
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
