import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from './Constants/index';
import axios from 'axios';
import "./App.css";

function App() {
  // Why does this need to happen?
  const [data, setData] = useState();
  console.log(data);
  // Why do we need a useEffect here? Won't an axios call be sufficient?
  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        debugger
      })
    // Also, why this return statement?
    return () => {
    }
  }, []);

  // Also, right now I'm getting a TypeError: Cannot read property of 'hdurl' of undefined
  // I spoke with Melissa TL and she said sometimes API's are like that, just give them a moment to refresh
  // However, it's been more than 5 mins (which she said should be enough time), and I'm still getting that error.
  // Before this, the photo was rendering, however, I still in general don't know WHY we are doing what we're doing. 
  // AKA I don't know what's the process of setting this up. My head is fried.

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
