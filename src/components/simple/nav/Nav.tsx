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
  LogoMobile,
  NavWrap,
  Navfix,
} from "./StyledNav";

/////////////////////////////////////////////////////////// Local Components

import GitSVG from "svg/GitSVG";
import EmailSVG from "svg/EmailSVG";
import Logo from "components/simple/logo/Logo";

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
      <NavWrap>
        <Logo />
        <NavBar>
          <Links>
            <LinkDesk href="#">Home</LinkDesk>
            <LinkDesk href="#skills">Skills</LinkDesk>
            <LinkDesk href="#portfolio">Porfolio</LinkDesk>
            <LinkDesk href="#contact">Contact</LinkDesk>
            <LinkDesk href="#contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M436.992,74.953c-99.989-99.959-262.08-99.935-362.039,0.055s-99.935,262.08,0.055,362.039s262.08,99.935,362.039-0.055 c48.006-48.021,74.968-113.146,74.953-181.047C511.986,188.055,485.005,122.951,436.992,74.953z M387.703,356.605 c-0.011,0.011-0.022,0.023-0.034,0.034v-0.085l-12.971,12.885c-16.775,16.987-41.206,23.976-64.427,18.432 c-23.395-6.262-45.635-16.23-65.877-29.525c-18.806-12.019-36.234-26.069-51.968-41.899 c-14.477-14.371-27.483-30.151-38.827-47.104c-12.408-18.242-22.229-38.114-29.184-59.051 c-7.973-24.596-1.366-51.585,17.067-69.717l15.189-15.189c4.223-4.242,11.085-4.257,15.326-0.034 c0.011,0.011,0.023,0.022,0.034,0.034l47.957,47.957c4.242,4.223,4.257,11.085,0.034,15.326c-0.011,0.011-0.022,0.022-0.034,0.034 l-28.16,28.16c-8.08,7.992-9.096,20.692-2.389,29.867c10.185,13.978,21.456,27.131,33.707,39.339 c13.659,13.718,28.508,26.197,44.373,37.291c9.167,6.394,21.595,5.316,29.525-2.56l27.221-27.648 c4.223-4.242,11.085-4.257,15.326-0.034c0.011,0.011,0.022,0.022,0.034,0.034l48.043,48.128 C391.911,345.502,391.926,352.363,387.703,356.605z" />
              </svg>
            </LinkDesk>
          </Links>
        </NavBar>
        <MovelNav id="movelNav">
          <Sections>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/bobarros"
            >
              github
              <GitSVG />
            </a>
            <Hamburguer id="navButton" onClick={moveUp}>
              <span></span>
              <span></span>
              <span></span>
            </Hamburguer>
            <a href="mailto:brunobarros@ideias.dev">
              email
              <EmailSVG />
            </a>
          </Sections>
          <MenuMobile>
            <LinkMobile href="#">Home</LinkMobile>
            <LinkMobile href="#skills">Skills</LinkMobile>
            <LinkMobile href="#portfolio">Portfolio</LinkMobile>
            <LinkMobile href="#contact">Contact</LinkMobile>
            <LinkMobile href="#contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M436.992,74.953c-99.989-99.959-262.08-99.935-362.039,0.055s-99.935,262.08,0.055,362.039s262.08,99.935,362.039-0.055 c48.006-48.021,74.968-113.146,74.953-181.047C511.986,188.055,485.005,122.951,436.992,74.953z M387.703,356.605 c-0.011,0.011-0.022,0.023-0.034,0.034v-0.085l-12.971,12.885c-16.775,16.987-41.206,23.976-64.427,18.432 c-23.395-6.262-45.635-16.23-65.877-29.525c-18.806-12.019-36.234-26.069-51.968-41.899 c-14.477-14.371-27.483-30.151-38.827-47.104c-12.408-18.242-22.229-38.114-29.184-59.051 c-7.973-24.596-1.366-51.585,17.067-69.717l15.189-15.189c4.223-4.242,11.085-4.257,15.326-0.034 c0.011,0.011,0.023,0.022,0.034,0.034l47.957,47.957c4.242,4.223,4.257,11.085,0.034,15.326c-0.011,0.011-0.022,0.022-0.034,0.034 l-28.16,28.16c-8.08,7.992-9.096,20.692-2.389,29.867c10.185,13.978,21.456,27.131,33.707,39.339 c13.659,13.718,28.508,26.197,44.373,37.291c9.167,6.394,21.595,5.316,29.525-2.56l27.221-27.648 c4.223-4.242,11.085-4.257,15.326-0.034c0.011,0.011,0.022,0.022,0.034,0.034l48.043,48.128 C391.911,345.502,391.926,352.363,387.703,356.605z" />
              </svg>
            </LinkMobile>
          </MenuMobile>
          <LogoMobile href="/">
            logo bruno
            <p>LoGo</p>
          </LogoMobile>
        </MovelNav>
      </NavWrap>
      <Navfix />
    </>
  );
};

export default Nav;
