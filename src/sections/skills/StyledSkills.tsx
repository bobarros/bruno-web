import styled from "styled-components";

/////////////////////////////////////////////////////////

export const Partners = styled.div`
  display: flex;
  width: 150%;
  transform: translateX(-22.5%);
  margin: 0 auto;
  line-height: 6rem;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 2.2rem;

  @media only screen and (max-width: 900px) {
    width: 100%;
    transform: translateX(0);
    font-size: 2rem;
    line-height: 6rem;
  }

  @media only screen and (max-width: 700px) {
    margin-right: -2.5rem;
    font-size: 1.8rem;
    line-height: 4rem;
  }
`;

export const Partner = styled.a`
  color: gray;
  font-weight: 700;
  text-decoration: none;
  padding-left: 5rem;

  @media only screen and (max-width: 700px) {
    padding-left: 0;
    padding-right: 5rem;
  }

  &:hover {
    color: var(--hash-habilidades);
  }

  span {
    transition: all 0.3s ease-in;
    color: var(--hash-habilidades);
  }
`;

export const SubTitle = styled.h2`
  padding-bottom: 4rem;
  font-size: 4.2rem;
  line-height: 4.5rem;
  text-align: center;

  @media only screen and (max-width: 700px) {
    font-size: 3.6rem;
    line-height: 4.2rem;
  }
`;
