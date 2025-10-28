import { useState } from "react";
import reactLogo from "/images/react.svg";
import viteLogo from "/images/vite.svg";
//import "./App.css";

import Tenzies from "./Tenzies/Tenzies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tenzies />
    </>
  );
}

export default App;
