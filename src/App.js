//import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [namesInSpace, setNamesInSpace] = useState([]);
  const [craft, setCraft] = useState("All");

  useEffect(() => {
    async function peopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      setNumberInSpace(data.number);
      setNamesInSpace(data.people);
    }
    peopleInSpace();
  }, []);

  const filteredNames =
    craft === "All"
      ? namesInSpace
      : namesInSpace.filter((person) => person.craft === craft);

  return (
    <main>
      <h1 className="h1">People in Space: {numberInSpace}</h1>
      {namesInSpace.length > 0 && (
        <ul>
          {filteredNames.map((name) => (
            <li key={name.name}>{name.name}</li>
          ))}
        </ul>
      )}
      <div className="main__button-container">
        <button
          type="button"
          className="main__button-single"
          aria-label="select all people in Space"
          onClick={() => setCraft("All")}
        >
          all
        </button>
        <button
          type="button"
          className="main__button-single"
          aria-label="select all people in Space"
          onClick={() => setCraft("ISS")}
        >
          iss
        </button>
        <button
          type="button"
          className="main__button-single"
          aria-label="select all people in Space"
          onClick={() => setCraft("Tiangong")}
        >
          tiangong
        </button>
      </div>
    </main>
  );
}

export default App;
