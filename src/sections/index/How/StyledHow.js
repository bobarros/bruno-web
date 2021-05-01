import styled from 'styled-components';

/////////////////////////////////////////////////////////

export const Wrap = styled.section`
  width: 100%;
  background-color: var(--color-background-light-1);
  color: var(--color-font);
  box-shadow: 0 5px 20px 5px var(--shadow);
  padding-bottom: 4rem;
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 300;

  h3 {
    font-size: 2rem;
    line-height: 2rem;
    padding-bottom: 1.5rem;
  }
`;

export const Solucoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Grupo = styled.div`
  width: 55rem;
  margin: 0 5rem 5rem 5rem;

  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: 0px 1rem 4rem 1rem;
  }
`;

export const GrupoIcones = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  svg {
    width: 5rem;
    height: 5rem;
  }
`;

