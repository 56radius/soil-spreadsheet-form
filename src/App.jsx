import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing the splash screen
import HomeScreen from "./pages/HomeScreen";

function App() {

  return (
    <Router>
      <Routes>
        {/* Splash screen */}
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
