console.log(`index.js test 1`)

import React from "react";  //  Grabbing all React. 
import { createRoot } from "react-dom/client";  //  specifically grabbing createRoot.

console.log(`index.js test 2`)

const container = document.querySelector(`#root`);
const root = createRoot(container);
root.render(<h1>Hello</h1>);