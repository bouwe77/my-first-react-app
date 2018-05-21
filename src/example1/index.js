import React from "react";
import { render } from "react-dom";

const App = function() {
  return <div>Hello World</div>;
};
/* 
Bovenstaande kan korter:
      const App = () => <div>Hello World</div>;
*/

render(<App />, document.getElementById("root"));
