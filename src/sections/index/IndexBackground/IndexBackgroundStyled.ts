import styled, { css } from "styled-components";

export const Wrap = styled.div`
  display: block;
  position: absolute;
  z-index: 1000;
  left: -100vw;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  transition: all 0.7s ease;  

  svg {
    width: 200px;
    height: 200px;
    transform: scaleY(0);
    transition: all 0.7s ease;
  }

  ${({ show }:{show?:boolean}) => {
    return show && css`
      left: 0;

      svg {
    transform: scaleY(1);
  }
    `;
  }}
`;

export const LogoBack = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
