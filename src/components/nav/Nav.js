/////////////////////////////////////////////////////////// React

import { useEffect } from "react";

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

/////////////////////////////////////////////////////////// Local Components

import InstagramSVG from "svg/InstagramSVG";
import EmailSVG from "svg/EmailSVG";
import LogoSVG from "svg/LogoSVG";
import Logo from "components/logo/Logo";
import Night from "components/night/Night";
import ToTop from 'components/ToTop/ToTop';

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

  useEffect(() => {
    const d = document;
    let sol = d.getElementById("sol").classList;
    let lua = d.getElementById("lua").classList;

    let option = "day";

    let status = localStorage.getItem("darkModeBruno");
    if (status === "true" || status === null) {
      option = "night";
      sol.toggle("notShow");
      lua.toggle("show");
      d.getElementById("cabeca").classList.add("cabecaRotate");
      d.getElementById("fechado").style.opacity = "1";
      d.getElementById("luz").classList.add("toBlink");
      d.getElementById("esquerdo").style.opacity = "0";
    } else {
      sol.toggle("show");
      lua.toggle("notShow");
      d.getElementById("cabeca").classList.remove("cabecaRotate");
      d.getElementById("fechado").style.opacity = "0";
      d.getElementById("luz").classList.remove("toBlink");
      d.getElementById("esquerdo").style.opacity = "1";
    }

    if (status === null) {
      localStorage.setItem("darkModeBruno", "true");
    }

    if (option === "day") {
      d.body.classList.remove("night");
      d.body.classList.add(option);
    }

  }, []);

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
        <Night />
        <Logo />
        <ToTop />
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
