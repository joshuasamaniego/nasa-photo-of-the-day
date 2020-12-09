import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Components/Header/Header';
import PhotoInfo from "./Components/Photo/PhotoInfo";
import { API_KEY, BASE_URL } from "./constants";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        debugger;
      })
  }, []);

  return (
    <div className="App">
      <Header />
      <PhotoInfo apodData={data}/>
    </div>
  );
}

export default App;
