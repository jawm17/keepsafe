import React from 'react';
// import PrivateRoute from './hocs/PrivateRoute';
// import UnPrivateRoute from './hocs/UnPrivateRoute';
// import AVPRoute from './hocs/AVPRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";

// Pages
import NoMatchPage from "./pages/noMatchPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/" component={NoMatchPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
