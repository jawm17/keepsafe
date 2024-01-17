import React from 'react';
import ScrollToTop from "./scrollToTop";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";

// Pages
import Home from "./pages/Home/Home";
import News from './pages/News/News';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
