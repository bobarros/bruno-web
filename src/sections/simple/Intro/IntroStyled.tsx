import styled from "styled-components";

/////////////////////////////////////////////////////////

export const ImagesBlock = styled.div`
  position: relative;
`;

export const Wrap = styled.section`
  display: block;
  width: 100vw;
  height: 100vh;
  padding: 0;
  position: relative;
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
  position: absolute;
  left: 35px;
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
    font-size: 50px;
    line-height: 55px;
    font-weight: 900;
    text-shadow: 2px 2px 10px rgba(0 0 0 / 65%);
  }
`;

export const Description = styled.div`
  display: none;
  width: 70%;

  h2 {
    padding: 15px 0;
    font-size: 22px;
    line-height: 24px;
    font-weight: 300;
    opacity: 0.9;
  }

  button {
    cursor: pointer;
    padding: 10px 50px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid white;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 65%);
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 3px;
  }

  button:hover {
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(1px);
  }
`;

export const ImageWrap = styled.div`

  &:first-child{
    position: absolute;
  }

  & * {
    height: 100%;
    width: 100%;
  }

  & img {
    object-fit: cover;
  }

  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;
  background-color: transparent;
`;
