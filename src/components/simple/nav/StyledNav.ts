import styled from "styled-components";

/////////////////////////////////////////////////////////

export const NavWrap = styled.nav`
  display: block;
  height: 90px;
  width: 100%;
  background-color: navy;
  position: absolute;
  left: 0;
  top: 0;

  @media only screen and (max-width: 501px) {
    height: 70px;
  }
`;
///Same size above, to fix margin in next container
export const Navfix = styled.nav`
  display: block;
  height: 90px;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  z-index: -1;

  @media only screen and (max-width: 501px) {
    height: 70px;
  }
`;

export const NavBar = styled.nav`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Links = styled.ul`
  display: flex;
  height: 85px;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.6rem;
  color: white;
  padding: 1rem 3.5rem;
  border-radius: 30px;
  font-family: "JetBrains Mono";

  li {
    list-style: none;
  }

  svg {
    fill: white;
    width: 40px;
    margin-left: 50px;
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
    opacity: 0.8;
  }

  li:active {
    opacity: 1;
  }
`;

/////////////////////////////////////////////////////////

export const MovelNav = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    position: fixed;
    display: block;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    height: 6rem;
    background-color: navy;
    color: #efefef;
    z-index: 101;
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
  background-color: navy;
  color: white;
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
  border-bottom: 1px solid white;
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

  p {
    color: navy;
    font-size: 35px;
    text-align: center;
    line-height: 130px;
    position: relative;
    left: -4px;
    font-family: "JetBrains Mono";

    @media only screen and (max-width: 501px) {
      font-size: 30px;
      line-height: 95px;
    }
  }
`;
