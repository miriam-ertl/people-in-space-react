import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);

  useEffect(() => {
    async function peopleInSpace() {
      const response = await fetch();
      const numberInSpace = await response.json(
        "http://api.open-notify.org/astros.json"
      );
      setNumberInSpace(numberInSpace);
    }
    peopleInSpace();
  }, []);

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
