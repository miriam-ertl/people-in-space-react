import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          <h1>People in Space: {numberInSpace}</h1>
        </main>
      </header>
    </div>
  );
}

export default App;
