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

export const BlocoTexto = styled.div`

  padding: 8rem 0rem 4rem 0rem;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 300;
  margin: 0 auto;
  width: 60rem;

  @media only screen and (max-width: 700px) {
    padding: 8rem 1.5rem 4rem 1.5rem;
    font-size: 14px;
    line-height: 22px;
    width: 100%;
  }

`;

export const AberturaTexto = styled.h2`

  padding-bottom: 4rem;
  font-size: 4.2rem;
  line-height: 4.5rem;
  text-align: center;

  @media only screen and (max-width: 700px) {
    font-size: 3.6rem;
    line-height: 4.2rem;
  }

`;

export const Paragrafo = styled.p`

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

export const ImagemWrap = styled.a`
  width: fit-content;
  display: block;
  margin: 0 auto 5rem auto;
  border-radius: 15px;
  width: 80%;
  max-width: 700px;
  height: auto;
  box-shadow: 2px 2px 10px 5px rgb(0 0 0 / 45%);

  @media only screen and (max-width: 701px) {
    width: 95%;
  }

  img {
    border-radius: 15px;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
`;

export const VerMais = styled.div`
  & {
    cursor: pointer;
    display: block;
    width: 25rem;
    text-align: center;
    font-size: 2rem;
    line-height: 2.2rem;
    background-color: var(--btn-background);
    color: var(--btn-font);
    border-radius: 5px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin: 0 auto 2rem auto;
    
    a,
    a:visited,
    a:link {
      color: inherit;
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: block;
      padding: 1.5rem 1rem;
    }
  }

  &:hover {
    transform: scale(1.05) translateY(-2px);
  }

  &:active {
    transform: scale(1.05) translateY(1px);
  }  
`;
