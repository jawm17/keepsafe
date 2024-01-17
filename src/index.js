import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SpeedInsights } from "@vercel/speed-insights"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeedInsights><App /></SpeedInsights>
  </React.StrictMode>
);