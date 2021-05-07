////////////////////////////////////////////////////////////////////// React

import { ReactNode } from "react";

/////////////////////////////////////////////////////////// Next

import Link from "next/link";
import { useRouter } from "next/router";

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
  className:string;
};

//////////////////////////////////////////////////////////////// Local Components

const LinkDesk = ({ href, children, className }: Props) => {
  return (
    <li>
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
};

const LinkMobile = ({ href, children, className }: Props) => {
  return (
    <Item onClick={moveUp}>
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    </Item>
  );
};

/////////////////////////////////////////////////////////// Main Component

const Nav = () => {
  const router = useRouter();
  return (
    <>
      <Night />
      <Logo />
      <ToTop />
      <NavBar>
        <Links>
          <LinkDesk className={router.pathname === "/" ? "underline" : ""} href="/">Home</LinkDesk>
          <LinkDesk className={router.pathname === "/skills" ? "underline" : ""} href="/skills">Skills</LinkDesk>
          <LinkDesk className={router.pathname === "/portfolio" ? "underline" : ""} href="/portfolio">Porfolio</LinkDesk>
          <LinkDesk className={router.pathname === "/contact" ? "underline" : ""} href="/contact">Contact</LinkDesk>
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
          <LinkMobile className={router.pathname === "/" ? "underline" : ""} href="/" >
            Home
          </LinkMobile>
          <LinkMobile className={router.pathname === "/skills" ? "underline" : ""} href="/skills" >
            Skills
          </LinkMobile>
          <LinkMobile className={router.pathname === "/portfolio" ? "underline" : ""} href="/portfolio" >
            Portfolio
          </LinkMobile>
          <LinkMobile className={router.pathname === "/contact" ? "underline" : ""} href="/contact" >
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
