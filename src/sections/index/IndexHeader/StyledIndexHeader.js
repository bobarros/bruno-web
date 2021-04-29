import styled from 'styled-components';

/////////////////////////////////////////////////////////

export const Header = styled.section`
  width: 48rem;
  height: 40rem;
  padding: 2rem;
  margin: 0 auto;
  display: block;
  position: relative;
  top: 10rem;
  opacity: var(--font-opacity);

  @media only screen and (max-width: 700px) {
    top: 8rem;
    width: 100%;
  }
`;

export const TextWrap = styled.div`
  position: relative;
  display: block;
  left: 13rem;

  @media only screen and (max-width: 700px) {
    left: 20rem;
    top: -1rem;
    width: 60vw;
  }

  @media only screen and (max-width: 448px) {
    left: 15rem;
    top: -2rem;
  }
`;

export const HeaderLinhaStrong = styled.p`
  font-size: 3.6rem;
  line-height: 3.8rem;
  font-weight: 500;
  font-family: "JetBrains Mono";

  @media only screen and (max-width: 700px) {
    font-size: 3.2rem;
    line-height: 3.8rem;
  }

  @media only screen and (max-width: 448px) {
    font-size: 3.4rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 2.6rem;
    line-height: 3.5rem;
  }
`;

export const HeaderLinhaLight = styled.div`
  font-size: 16px;
  line-height: 2rem;
  font-weight: 300;
  position: relative;
  left: 0.4rem;
  margin-top: 1rem;

  span {
    font-weight: 700;
  }

  @media only screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media only screen and (max-width: 448px) {
    width: 60vw;
    font-size: 13px;
    line-height: 20px;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  display: block;
  left: -15rem;
  top: -10rem;

  @media only screen and (max-width: 700px) {
    left: -5rem;
    top: -10rem;
  }

  @media only screen and (max-width: 448px) {
    left: -10rem;
    top: -8rem;
  }

  svg {
    height: 40rem;
    width: auto;

    @media only screen and (max-width: 700px) {
      height: 42rem;
    }

    @media only screen and (max-width: 448px) {
      height: 40rem;
    }

    @media only screen and (max-width: 700px) {
      polygon {
        mix-blend-mode: difference;
      }
    }
  }
`;
