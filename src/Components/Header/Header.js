import React from "react";
import "./Header.css";
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
  }
`
const StyledHeader = styled.div`
  opacity: 0;
  animation: ${kf} 0.5s ease-in-out forwards;
  padding-top: ${pr => pr.theme.padding.little};
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.black};
`
const StyledFade = styled.div`
  height: 4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    ${props => props.theme.secondaryColor}
  )
`

export default function Header({ apodData }) {
  return (
    <StyledHeader className="header">
      <h1>NASA Photo/Video of the Day: {apodData.date}</h1>
      <StyledFade />
    </StyledHeader>
  );
}