import styled from "styled-components";

/////////////////////////////////////////////////////////

export const Wrap = styled.div`
  display: flex;
  position: fixed;
  width: 300px;
  height: 35px;
  border-radius: 5px;
  padding: 5px;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #323232;
  z-index: 10;
  color: white;
  align-items: center;
  justify-content: space-between;
  overflow: visible;
  font-weight: 700;
  font-size: 18px;
  text-shadow: 1px 1px 3px rgb(0 0 0 / 65%);

  p {
    position: relative;
    left: -40px;
  }

  span {
    position: relative;
    left: 60px;
  }
`;

export const Internal = styled.div`
  border: 3px solid #232323;
  border-radius: 5px;
  background-color: transparent;
  position: fixed;
  margin: 5px;
  left: 1px;
  bottom: 1px;
  width: 290px;
  height: 23px;
  z-index: 1;
`;

export const Bar = styled.div`
  border-left: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 5px;
  background-color: white;
  opacity: 0.75;
  position: fixed;
  margin: 5px;
  left: 1px;
  bottom: 1px;
  width: 0%;
  height: 23px;
  z-index: 0;
  transition: all 0.7s ease;
`;
