import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Components/Header/Header'
import PhotoInfo from "./Components/Photo/PhotoInfo"

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films')
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        debugger;
      })
  }, []);

  return (
    <div className="App">
      <Header />
      <PhotoInfo filmsData={data}/>
    </div>
  );
}

export default App;
