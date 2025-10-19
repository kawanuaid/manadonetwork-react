import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ipv4, setIP] = useState("Loading...");
  const [error, setError] = useState(null);
  const urlSource = "https://ipapi.co/json/";

  const getData = async () => {
    try {
      const res = await axios.get(urlSource);
      setIP(res.data.ip);
      setError(null);
    } catch (err) {
      console.error("Error fetching IP:", err);
      setIP("Unable to fetch IP");
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>IP Address Checker</h1>
        <p>Your IP address is: {ipv4}</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <a
          className="App-link"
          href="https://kawanua.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kawanua Indo Digital
        </a>
      </header>
    </div>
  );
}

export default App;
