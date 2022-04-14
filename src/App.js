import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import MyMap from './components/MyMap';

function App() {
  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Create a file <b>Tabs.js</b>
          </li>
          <li>
            In this file, create tabs with{" "}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/reactjs/react-tabs"
              >
                react-tabs
              </a>
            </b>
          </li>
          <li>
            Create a file <b>MyMap.js</b>
          </li>
          <li>
            In this file create a map with{" "}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://react-leaflet.js.org/"
              >
                React Leafleft
              </a>
            </b>
          </li>
          <li>
            You component MyMap should have two properties <b>lng</b> and{" "}
            <b>lat</b>
          </li>
          <li>Import these two components down below </li>
        </ul>
      </div>
      <div className="block">
        <p>Import your components here</p>
        <Tabs />
      </div>
    </div>
  );
}


export default App;
