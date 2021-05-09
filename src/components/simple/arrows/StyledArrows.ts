import styled from "styled-components";

//////////////////////////////////

export const ArrowAnim = styled.a`
  display: none;
  position: absolute;
  right: 50%;
  bottom: 100px;
  transform: translateX(50%);
  width: 50px;
  height: 50px;
  z-index: 2;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -3rem;
    left: -4rem;
    width: 10rem;
    height: 10rem;
  }
`;

export const Arrow = styled.div`
  width: 2rem;
  height: 2rem;
  border: 0.5rem solid;
  border-color: rgba(255, 255, 255, 0.75) transparent transparent
    rgba(255, 255, 255, 0.75);
  transform: rotate(-135deg);
  font-size: 0;

  @media only screen and (max-width: 500px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const ArrowSliding = styled.div`
  position: absolute;
  animation: slide 1.8s linear infinite;

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 1.2s;
  }

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(-2.5rem);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(2.5rem);
    }
  }
`;
