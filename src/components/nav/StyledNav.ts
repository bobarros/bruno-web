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

////////////////////////////////////////////////////////

export const Sections = styled.div`

  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  div {
    padding: 0 5rem;
  }
  
  svg {
    width: 4.5rem;
    height: 4.5rem;
    fill: #efefef;
  }

  a {
    font-size: 0;
  }
    
`;

//////////////////////////////////////////////////////

export const MenuMobile = styled.div`
  background-color: var(--color-background);
  color: var(--color-font);
  height: calc(100vh - 6rem);
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 0 0;
  position: relative;
  top: -0.1rem;
`;

//////////////////////////////////////////////////////

export const Item = styled.div`
  font-size: 2.8rem;
  text-transform: uppercase;
  line-height: 6rem;
  font-family: "JetBrains Mono";
  font-weight: 700;
  border-bottom: 1px solid var(--color-font);
  padding-left: 3rem;
`;

//////////////////////////////////////////////////////

export const Hamburguer = styled.div`
  span {
    width: 4.5rem;
    height: 5px;
    background-color: #efefef;
    display: block;
    margin: 8px 0;
    border-radius: 3px;
    transform-origin: center;
    transition: transform 0.5s ease-out;
  }     
  `;

//////////////////////////////////////////////////////

export const LogoMobile = styled.a`
  position: relative;
  bottom: 35vh;
  transform: translateX(-50%);
  left: 50%;
  width: 15rem;
  height: 15rem;
  display: block;
  border-radius: 50%;
  background-color: #fff;
  padding-left: 1rem;
  font-size: 0;
`;