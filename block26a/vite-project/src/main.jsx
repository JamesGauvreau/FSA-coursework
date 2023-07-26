import React from 'react'
import { createRoot } from "react-dom/client"
import App from './App.jsx'
import './index.css'

const container = document.querySelector(`#root`);
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
