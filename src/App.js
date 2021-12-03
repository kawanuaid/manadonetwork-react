import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ipv4, setIP] = useState('');
  const urlSource = 'https://ipapi.co/json/';

  const getData = async () => {
    const res = await axios.get(urlSource)
    console.log(res.data);
    setIP(res.data.ip);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your IP address is {ipv4}.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
