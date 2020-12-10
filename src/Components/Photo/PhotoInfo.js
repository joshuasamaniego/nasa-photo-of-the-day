import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReactPlayer from "react-player";
import "./PhotoInfo.css";


// STYLES
const kf = keyframes`
  100% {
    opacity: 1;
  }
`
const StyledPhotoInfo = styled.div` // this can be styled.ul, styled.h1, styled.p, etc. to target the specific thing you want
    opacity: 0;
    animation: ${kf} 0.5s ease-in-out forwards;    
    color: ${props => props.theme.white};
    display: flex;
    flex-flow: column wrap;
`
const Photo = styled.div`
    opacity: 0;
    animation: ${kf} 0.5s ease-in-out forwards;
    width: 100%;
    margin: ${props => props.theme.margin.little}; // this is taking a CallBack Function
`
const StyledImage = styled.img`
    width: 80%;
    object-fit: contain;
    margin: 3%;
    padding: 1%;
    &:hover {
      transform: scale(1.04);
      transition: transform 0.5s ease-in-out;
    }
    transition: transform 0.5s ease-in-out;
`


// COMPONENT
function PhotoInfo(props) {
    const { apodData } = props;
    console.log(apodData);

    return (
      <StyledPhotoInfo>
        <h2 className="photo__title">{apodData.title}</h2>
        <p className="photo__description">{apodData.explanation}</p>
        <Photo>
          {
          apodData.media_type === "video" 
          ? <ReactPlayer className="video__player" url={apodData.url} /> 
          : <StyledImage alt={apodData.title} src={apodData.hdurl}/>
          }
        </Photo>
    </StyledPhotoInfo>
  )
}
  
  export default PhotoInfo;