import styled from 'styled-components';

/////////////////////////////////////////////////////////

export const Wrap = styled.section`
  & {
    width: 100%;
    background-color: var(--color-background);
    color: var(--color-font);
    box-shadow: 0 5px 20px 5px var(--shadow);
    padding-bottom: 4rem;
  }

  &:nth-child(even) {
    background-color: var(--color-background-light-1);
  }
`;

export const TextBlock = styled.div`

  padding: 8rem 0rem 4rem 0rem;
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

export const TitleHead = styled.h2`

  padding-bottom: 4rem;
  font-size: 4.2rem;
  line-height: 4.5rem;
  text-align: center;

  @media only screen and (max-width: 700px) {
    font-size: 3.6rem;
    line-height: 4.2rem;
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

  &__sessao {
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
