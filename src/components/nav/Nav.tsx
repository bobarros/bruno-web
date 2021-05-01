////////////////////////////////////////////////////////////////////// React

import { ReactNode } from "react";

/////////////////////////////////////////////////////////// Next

import Link from "next/link";

/////////////////////////////////////////////////////////// Styled Components

import {
  NavBar,
  Links,
  MovelNav,
  Sections,
  MenuMobile,
  Item,
  Hamburguer,
  LogoMobile
} from 'components/nav/StyledNav';

/////////////////////////////////////////////////////////// Local Components

import GitSVG from "svg/GitSVG";
import EmailSVG from "svg/EmailSVG";
import LogoSVG from "svg/LogoSVG";
import Logo from "components/logo/Logo";
import Night from "components/night/Night";
import ToTop from 'components/ToTop/ToTop';

/////////////////////////////////////////////////////////////// Local Functions

const moveUp = () => {
  const d = document;

  const movelNavEl = d.getElementById("movelNav") as HTMLDivElement;
  const navButtonEl = d.getElementById("navButton") as HTMLDivElement;
  movelNavEl.classList.toggle("moveUpNavBox");
  navButtonEl.classList.toggle("moveUpAnimated");
};

////////////////////////////////////////////////////////////////////////// Types

type Props = {
  children?: ReactNode;
  href: string;
};

//////////////////////////////////////////////////////////////// Local Components

const LinkDesk = ({ href, children }: Props) => {
  return (
    <li>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const LinkMobile = ({ href, children }: Props) => {
  return (
    <Item onClick={moveUp}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Item>
  );
};

/////////////////////////////////////////////////////////// Main Component

const Nav = () => {

  return (
    <>
      <Night />
      <Logo />
      <ToTop />
      <NavBar>
        <Links>
          <LinkDesk href="/">Home</LinkDesk>
          <LinkDesk href="/skills">Skills</LinkDesk>
          <LinkDesk href="/portifolio">Porfolio</LinkDesk>
          <LinkDesk href="/contact">Contact</LinkDesk>
        </Links>
      </NavBar>
      <MovelNav id="movelNav">
        <Sections>
          <a target="_blank" rel="noopener" href="https://github.com/bobarros">github<GitSVG /></a>
          <Hamburguer id="navButton" onClick={moveUp} >
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
          <a href="mailto:brunobarros@ideias.dev">
            email<EmailSVG />
          </a>
        </Sections>
        <MenuMobile>
          <LinkMobile href="/" >
            Home
          </LinkMobile>
          <LinkMobile href="/skills" >
            Skills
          </LinkMobile>
          <LinkMobile href="/portfolio" >
            Portfolio
          </LinkMobile>
          <LinkMobile href="/contact" >
            Contact
          </LinkMobile>
        </MenuMobile>
        <LogoMobile href="/">
          logo bruno<LogoSVG />
        </LogoMobile>
      </MovelNav>
    </>
  );
};

export default Nav;
