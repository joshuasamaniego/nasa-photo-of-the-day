import React from 'react';
// import styled from 'styled-components';
import ReactPlayer from "react-player";
import "./PhotoInfo.css";

// const StyledPhotoInfo = styled.div` // this can be styled.ul, styled.h1, styled.p, etc. to target the specific thing you want
//     color: ${props => props.theme.primaryColor};
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
// `

// const Photo = styled.div`
//     width: 40%;
//     margin: ${props => props.theme.margin.regular}; // this is taking a CallBack Function
    
//     &:hover {
//       transform: scale(1.1);
//       transition: transform 0.5s ease-in-out;
//       color: ${props => props.theme.secondaryColor};
//     }
//     transition: transform 0.5s ease-in-out;
// `

function PhotoInfo(props) {
    const { apodData } = props;
    console.log(apodData);

    return (
      // <StyledPhotoInfo>
          <div className="photo__container">
            <h2 className="photo__title">{apodData.title}</h2>
            <h4 className="photo__date">{apodData.date}</h4>
            <p className="photo__description">{apodData.explanation}</p>
            <ReactPlayer className="video__player" url={apodData.url} />
        </div>
      // </StyledPhotoInfo>
  )
}
  
  export default PhotoInfo;