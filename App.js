import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./componets/Header";
import Body from "./componets/Body";

const Applaout = () => {
  return (
    <div className="appLayout">
      <div className="header-container">
        <Header />
      </div>

      <div>
        <Body/>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Applaout />);
