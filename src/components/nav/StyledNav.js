import styled from 'styled-components';

/////////////////////////////////////////////////////////

export const NavBar = styled.nav`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Links = styled.ul`

  display: flex;
  width: 55rem;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 2.2rem;
  justify-content: space-between;
  font-size: 1.6rem;
  color: var(--color-font);
  padding: 1rem 2.5rem;
  border-radius: 30px;
  transition: background-color 2s ease;
  font-family: "JetBrains Mono";
  width: 50vw;
  margin: 0px 25vw;

  @media only screen and (max-width: 900px) {
    right: 8rem;
  }

  li {
    list-style: none;
  }

  a,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 0.8rem;
  }

  li:hover {
    transform: scale(1.05) translateY(-2px);
  }

  li:active {
    transform: scale(1.05) translateY(1px);
  }

`;

/////////////////////////////////////////////////////////

export const MovelNav = styled.div`

  display:none;

  @media only screen and (max-width: 900px) {
    position: fixed;
    display: block;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    height: 6rem;
    background-color: #121212;
    color: #efefef;
    z-index: 101;
    transition: all 0.55s ease-in;  
  }
`;