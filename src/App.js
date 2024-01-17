import React from 'react';
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";

// Pages
import Home from "./pages/Home/Home";
import News from './pages/News/News';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
