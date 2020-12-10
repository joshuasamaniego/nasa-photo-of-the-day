import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Components/Header/Header';
import PhotoInfo from "./Components/Photo/PhotoInfo";
import { API_KEY, BASE_URL } from "./constants";
import styles from "styled-components";

const StyledApp = styles.div`
  background-color: ${props => props.theme.secondaryColor};
  margin-top: 0;
  text-align: center;
  align-items: center;
`

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
    <StyledApp>
      <Header apodData={data}/>
      <PhotoInfo apodData={data}/>
    </StyledApp>
  );
}

export default App;
