import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch('/html')
      .then(response => response.json())
      .then(setData);
  }, [])

  if(data){
    return (
      <div className="App">
        <header className="App-header">
          <h1> {data.title} </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {data.body}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React.js
          </a>
        </header>
        <footer> {data.footer} </footer>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Did not load data from Flask endpoint.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.js
        </a>
      </header>
    </div>
  ); 
}


export default App;
