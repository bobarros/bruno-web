import styled from "styled-components";

/////////////////////////////////////////////////////////

export const Wrap = styled.a`
  cursor: pointer;
  position: absolute;
  top: 1.25rem;
  left: 3.5rem;
  z-index: 60;
  font-size: 0;
  border-radius: 30px;
  background-color: #ffffff;
  width: 5.4rem;
  height: 5.4rem;

  @media only screen and (max-width: 500px) {
    left: 1.5rem;
  }

  @media only print {
    .logo {
      position: relative;
      top: 1.25rem;
      left: 3.5rem;
    }
  }

  path,
  polygon {
    fill: #000;
  }

  path {
    stroke: #000;
    stroke-miterlimit: 10;
    stroke-width: 3px;
  }
`;

export const Anchor = styled.p`
  font-size: 0;
  height: 0;
`;

export const Overlay = styled.p`
  font-size: 0;
  position: absolute;
  background-color: #232323;
  z-index: 51;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 0.1;
  }
`;

export const Text = styled.p`
  position: absolute;
  left: 3.2rem;
  top: 1rem;
  height: 4rem;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--color-font);
  border-radius: 20px;
  padding: 1rem 2.5rem;
  width: fit-content;
  font-family: "JetBrains Mono";
`;

export const LogoName = styled.p`
  color: transparent;
  text-shadow: 0 0 2px rgba(0, 0, 128, 1);
  position: relative;
  font-size: 16px;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "JetBrains Mono";
  transition: all 0.7s ease;
  opacity: 1;

  span {
    display: block;
    font-size: 5px;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 10px;
  }
`;
