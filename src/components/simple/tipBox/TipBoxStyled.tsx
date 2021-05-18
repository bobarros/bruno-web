import styled, { css } from "styled-components";

/////////////////////////////////////////////////////////

export const Background = styled.div`
  display: block;
  z-index: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000vw;
  height: 1000vh;
  background-color: rgba(255, 255, 255, 0.7);

  ${({ background }:{ background:boolean }) => background && css`
    background: black;
  `}
`;

export const Wrap = styled.div`
  display: none;
  opacity: 0;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 100;
`;

export const BoxWrap = styled.div`
  display: block;
  z-index: 1;
  position: absolute;
  width: 500px;
  height: auto;
  background-color: #323232;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 3px rgb(0 0 0 / 40%);

  span svg {
    position: absolute;
    z-index: 1;
    width: 150px;
    height: 160px;
    right: 0;
    bottom: 12px;
  }
`;

export const InsideWrap = styled.div`
  display: block;
  border: 2px solid #efefef;
  border-radius: 3px;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

export const Text = styled.div`
  p,
  ul {
    font-size: 16px;
    line-height: 22px;
    font-family: "JetBrains Mono";
    color: white;
    opacity: 0.9;
    padding: 8px 0;
  }

  p svg {
    display: block;
    margin: 0 auto;
    height: 40px;
    width: 30px;
  }

  ul {
    margin: 20px 0 20px 45px;
  }
`;

export const Button = styled.div`
  padding: 10px 20px;
  margin: 0 auto;
  margin-top: 60px;
  display: block;
  width: 150px;
  color: white;
  background-color: black;
  text-align: center;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
  font-family: "JetBrains Mono";
  transition: all 2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
