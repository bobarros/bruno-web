import styled from "styled-components";

/////////////////////////////////////////////////////////

export const TextBlock = styled.div`
  padding: 0rem 0rem 4rem 0rem;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0 auto;
  width: 60rem;

  @media only screen and (max-width: 700px) {
    padding: 8rem 1.5rem 4rem 1.5rem;
    font-size: 14px;
    line-height: 22px;
    width: 100%;
  }
`;

export const TitleSub = styled.h2`
  font-size: 2.8rem;
  line-height: 3.4rem;
  padding: 3rem 0;
  font-weight: 700;
`;

export const LevelName = styled.p`
  font-weight: 700;
  font-size: 1.1em;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 3rem;
`;

export const ImageProject = styled.img`
  width: 50rem;
  height: 33rem;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  object-position: center;
  margin-bottom: 5rem;
  border-radius: 5px 5px 5px 5px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`;

export const Paragraph = styled.p`
  padding-bottom: 2rem;
  opacity: var(--font-opacity);
  a,
  a:visited,
  a:link {
    color: inherit;
    font-weight: 700;
    text-decoration: none;
    opacity: 1;
  }

  & span {
    font-weight: 700;
  }

  svg {
    width: 30rem;
    height: auto;
    margin: 0 auto;
    display: flex;
  }

  img {
    margin: 0 auto;
    display: flex;
  }
`;

export const DescriptionProject = styled.p`
  text-align: left;
  padding-bottom: 1.5rem;
`;

export const LineBreakPj = styled.div`
  width: 50%;
  height: 0;
  border-bottom: 1px solid var(--color-font);
  margin: 3.5rem auto 4.5rem auto;
`;

export const Estimation = styled.div`
  margin-bottom: 4rem;
  span {
    font-weight: 700;
  }
`;
