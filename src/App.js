import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lucky",
      animal: "Dog",
      breed: "Mongrell",
    }),
    React.createElement(Pet, {
      name: "Nemo",
      animal: "Fish",
      breed: "Goldfish",
    }),
    React.createElement(Pet, {
      name: "Lassie",
      animal: "Dog",
      breed: "Maltese",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
