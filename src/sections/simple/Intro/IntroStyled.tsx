import styled from "styled-components";

/////////////////////////////////////////////////////////

export const Wrap = styled.section`
  display: block;
  width: 100vw;
  height: 100vh;
  padding: 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transition: all 1s ease;
  overflow: hidden;
`;

export const TextWrap = styled.div`
  display: block;
  width: 95%;
  max-width: 700px;
  height: max-content;
  position: relative;
  left: 0;
  top: 260px;
  z-index: 5;
  text-shadow: 3px 3px 8px rgb(0 0 0 / 65%);
  transition: all 1.6s ease;
  transition-delay: 1s;

  & * {
    font-family: sans-serif !important;
    color: white;
    font-weight: 300;
  }

  h1 {
    font-size: 60px;
    line-height: 60px;
    font-weight: 900;
  }
`;

export const Description = styled.div`
  display: none;
  width: 70%;
`;

export const ImageWrap = styled.div`
  display: block;
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;
  background-color: transparent;
`;


