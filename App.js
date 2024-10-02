import React from "react";
import {createRoot} from "react-dom"

const heading=<h1>hello from jsx element</h1>


const root=createRoot(document.getElementById("root"))
root.render(heading)