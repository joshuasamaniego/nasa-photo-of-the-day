import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from './Constants/index';
import axios from 'axios';
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        debugger
      })
    return () => {
    }
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    <img src={data.hdurl} alt=""/>
    </div>
  );
}

export default App;
