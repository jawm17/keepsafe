import { Component } from "react";
import "./index.css";
import ReactGA from 'react-ga';

// Pages
import Home from "./pages/Home/Home";

class App extends Component {
  setGA = () => {
    ReactGA.initialize('UA-290625727-1');
    ReactGA.pageview('Init page view');
  };
  componentDidMount(){
    this.setGA();
  }
  render() {
    return (
    <Home /> 
    );
  }
}

export default App;
