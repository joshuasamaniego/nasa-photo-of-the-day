import React, { useState, useEffect } from 'react'
import axios from 'axios'


function PhotoInfo(props) {
    const { filmsData } = props;
    console.log(filmsData);

    const [planetInfo, setPlanetInfo] = useState(null);
    console.log(planetInfo);

    useEffect(() => {
        axios.get('http://swapi.dev/api/planets/')
          .then(res => {
            setPlanetInfo(res.data.results);
          })
          .catch(err => {
            debugger;
          })
      }, []);

  
    return (
      <div className="PhotoInfo">
          {filmsData.map((film, index) => {
              return (
                <ul key={film.episode_id}>
                    <li>{film.title}</li>
                    <li>Film: {index + 1}</li>
                    <li>Director: {film.director}</li>
                    <li>Producer: {film.producer}</li>
                    <li>Release Date: {film.release_date}</li>
                    <li>Episode: {film.episode_id}</li>
                    <li>Opening Fanfare: '{film.opening_crawl}'</li>
                    {/* <li>{film.planets.map((episode_id) => {  // This works, however I would need to perform another axios
                        return (                                 // request to get the planet data.
                            <div key={episode_id}>
                                <ol>{film.planets}</ol>
                            </div>
                        )
                    })}
                    </li> */}
                </ul>
              )
          })}
          <h4>Planets in these Films:</h4>
          {
              planetInfo && planetInfo.map((planet, index) => {
                  return (
                    <div key={index}>
                        <p>{planet.name}</p>
                    </div>
                  )
              })
          }
      </div>
    );
  }
  
  export default PhotoInfo;