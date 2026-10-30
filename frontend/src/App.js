import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://backend-service:3001/api")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage("Backend unreachable"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Frontend is running inside Kubernetes.</p>

        <p style={{ marginTop: "20px", fontSize: "20px" }}>
          <strong>Backend says:</strong> {backendMessage}
        </p>

        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
