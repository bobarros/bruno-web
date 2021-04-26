/////////////////////////////////////////////////////////// Next

import Link from "next/link";

/////////////////////////////////////////////////////////// Third Parties

import { useSwipeable } from "react-swipeable";

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

/////////////////////////////////////////////////////////// Imported Components

import InstagramSVG from "svg/InstagramSVG";
import EmailSVG from "svg/EmailSVG";
import LogoSVG from "svg/LogoSVG";

/////////////////////////////////////////////////////////// Local Functions

const moveUp = () => {
  const d = document;
  d.getElementById("movelNav").classList.toggle("moveUpNavBox");
  d.getElementById("navButton").classList.toggle("moveUpAnimated");
};

/////////////////////////////////////////////////////////// Local Components

const LinkDesk = ({ href, children }) => {
  return (
    <li>
      <Link href={href}><a>{children}</a></Link>
    </li>
  )
}

const LinkMobile = ({ href, children }) => {
  return (
    <Item onClick={moveUp}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Item>
  )
}

/////////////////////////////////////////////////////////// Main Component

const Nav = () => {

  /////////////////// Swipeable config
  const handlers = useSwipeable({
    onSwipedDown: () => {
      moveUp();
    },
    delta: 20,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
  });

  /////////////////// Swipeable config
  return (
    <>
      <NavBar>
        <Links>
          <LinkDesk href="/">Home</LinkDesk>
          <LinkDesk href="/skills">Skills</LinkDesk>
          <LinkDesk href="/portifolio">Porfolio</LinkDesk>
          <LinkDesk href="/contact">Contact</LinkDesk>
        </Links>
      </NavBar>
      <MovelNav
        id="movelNav"
        {...handlers}
        style={{ touchAction: "pan-x" }}
      >
        <Sections>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/talvezobruno"
          >
            instagram<InstagramSVG />
          </a>
          <Hamburguer
            id="navButton"
            onClick={moveUp}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
          <a href="mailto:brunobarros@ideias.dev" >
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
