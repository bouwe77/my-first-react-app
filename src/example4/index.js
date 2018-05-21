import React from "react";
import { render } from "react-dom";

import Header from "../-shared/Header";
import ToDo from "./ToDo";

const App = () => (
  <div>
    <Header />
    <ToDo />
  </div>
);

render(<App />, document.getElementById("root"));
