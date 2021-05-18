////////////////////////////////////////////////////////////////////// React

import { ReactNode } from "react";

/////////////////////////////////////////////////////////// Next

import Link from "next/link";

////////////////////////////////////////////////////////////////////////// Types

type Props = {
  children?: ReactNode;
  className?: string;
  href: string;
  id?: string;
  onClick?: any;
};

/////////////////////////////////////////////////////////

import styled from "styled-components";

/////////////////////////////////////////////////////////

export const NavWrap = styled.nav`
  display: block;
  height: 90px;
  width: 100%;
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;

  @media only screen and (max-width: 501px) {
    height: 70px;
  }
`;
///Same size above, to fix margin in next container
export const Navfix = styled.div`
  display: block;
  height: 90px;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  z-index: -1;
  transition: all .7s ease;

  @media only screen and (max-width: 501px) {
    height: 70px;
  }
`;

export const NavBar = styled.div`
  opacity: 0;
  background-color: navy;
  transition: all 1s ease;

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

  & #phoneIcon {
    width: 100px;
    transition: all 0.7s ease;
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
  display: none;
  opacity: 0;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  transition: all 0.7s ease;
  z-index: 50;
  z-index: 100;

  span {
    height: 4px;
    background-color: #efefef;
    display: block;
    position: relative;
    margin: 6px 0;
    border-radius: 2px;
    transform-origin: center;
    transition: all 0.4s ease;
  }

  span:nth-child(1) {
    width: 40px;
  }
  span:nth-child(2) {
    width: 30px;
    margin-left: 10px;
  }
  span:nth-child(3) {
    width: 20px;
    margin-left: 20px;
  }

  &:hover {
    span:nth-child(2) {
      width: 40px;
      margin-left: 0;
    }
    span:nth-child(3) {
      width: 40px;
      margin-left: 0;
    }
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

const LinkDeskPrep = ({ href, children, id, className }: Props) => {
  return (
    <li className={className} id={id}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const LinkMobilePrep = ({ href, children, onClick }: Props) => {
  return (
    <Item onClick={onClick}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Item>
  );
};

export const LinkDesk = styled(LinkDeskPrep)`
  list-style: none;
  width: max-content;
  padding: 0;
  transition: all 0.7s ease;

  .newLinks & {
    padding: 0 30px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.65);
  }
`;

export const LinkMobile = styled(LinkMobilePrep)`
  list-style: none;
  width: max-content;
`;

////////////////////////////////////////////////////////

export const Menu = styled.div`
  display: none;
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0%;
  z-index: 50;
  overflow: hidden;
`;

export const LeftMenu = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  color: white;
  width: 50%;
  font-family: "JetBrains Mono";
  position: relative;
  left: -50%;
  transition: all 0.7s ease;
  justify-content: center;
  padding-bottom: 110px;

  svg {
    fill: white;
    height: 35px;
    width: 35px;
    margin: 0 10px;
  }

  h2 {
    text-align: center;
    font-size: 32px;
    line-height: 30px;
    width: 180px;
    margin: 0 auto;
    margin-bottom: 35px;
    transition: all 0.7s ease;
  }

  a {
    font-size: 0px;
    text-align: center;
  }

  div {
    text-align: center;
  }
`;

export const RigthMenu = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  color: white;
  width: 50%;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  font-family: "JetBrains Mono";
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  right: -50%;
  transition: all 0.7s ease;
  padding-bottom: 110px;

  a {
    padding: 8px 0;
    transition: all 0.7s ease;
  }
`;

export const BottomMenu = styled.div`
  position: absolute;
  bottom: -50vh;
  color: white;
  text-align: center;
  width: 100%;
  font-size: 18px;
  transition: all 0.7s ease;
`;
export const Credits = styled.div`
  p {
    padding: 5px 0;
  }

  span {
    transition: all .7s ease;
  }
`;
