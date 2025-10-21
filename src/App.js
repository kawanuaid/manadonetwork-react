import logo from "./logo.svg";
import "./App.css";
import useIPData from "./hooks/useIPData";

function App() {
  const { data, error } = useIPData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>IP Address Checker</h1>
        <p>
          <span className="font-mono">
            {data.ip}
            <br />(
            <a
              href={`https://bgp.he.net/${data.asn}`}
              target="_blank"
              rel="noreferrer"
            >
              {data.asn}
            </a>{" "}
            - {data.org})
          </span>
        </p>
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
