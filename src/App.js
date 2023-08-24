//import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);

  useEffect(() => {
    async function peopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      setNumberInSpace(data.number);
    }
    peopleInSpace();
  }, []);

  return (
    <main>
      <h1 className="h1">People in Space: {numberInSpace}</h1>
    </main>
  );
}

export default App;
