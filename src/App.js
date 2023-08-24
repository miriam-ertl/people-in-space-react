//import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [namesInSpace, setNamesInSpace] = useState([]);

  useEffect(() => {
    async function peopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      setNumberInSpace(data.number);
      setNamesInSpace(data.people);
    }
    peopleInSpace();
  }, []);

  return (
    <main>
      <h1 className="h1">People in Space: {numberInSpace}</h1>
      {namesInSpace.length > 0 && (
        <ul>
          {namesInSpace.map((name) => (
            <li key={name.name}>{name.name}</li>
          ))}
        </ul>
      )}
      <div className="main__button-container">
        <button
          type="button"
          className="main__button-single"
          aria-label="select all people in Space"
        >
          all
        </button>
        <button
          type="button"
          className="main__button-single"
          aria-label="select all people in Space"
        >
          iss
        </button>
        <button
          type="button"
          className="main__button-single"
          aria-label="select all people in Space"
        >
          tiangong
        </button>
      </div>
    </main>
  );
}

export default App;
