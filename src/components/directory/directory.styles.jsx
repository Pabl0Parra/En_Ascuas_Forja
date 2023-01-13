import styled from "styled-components";
import "animate.css";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;

export const DirectoryTitle = styled.h1`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  font-size: 38px;
  transition: all 0.5s ease-in-out;
  margin-bottom: 2rem;
  animation: zoomInUp; 
  animation-duration: 2.5s; 
  
  &:hover {
    color: #f43030;
    font-size: 40px;   
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    &:hover { font-size: 16px; }
`;
