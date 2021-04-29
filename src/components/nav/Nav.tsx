////////////////////////////////////////////////////////////////////// React

import { ReactNode, useEffect } from "react";

/////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

/////////////////////////////////////////////////////////////// Third Parties

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
  LogoMobile,
} from "components/nav/StyledNav";

/////////////////////////////////////////////////////////// Imported Components

import InstagramSVG from "svg/InstagramSVG";
import EmailSVG from "svg/EmailSVG";
import LogoSVG from "svg/LogoSVG";
import Logo from "components/logo/Logo";
import Night from "components/night/Night";
import ToTop from "components/ToTop/ToTop";

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
  useEffect(() => {
    const d = document;
    const sun = d.getElementById("sol") as HTMLDivElement;
    const moon = d.getElementById("lua") as HTMLDivElement;

    ////// elements
    const avatarHead = d.getElementById("cabeca") as HTMLElement;
    const avatarClosedEyes = d.getElementById("fechado") as HTMLElement;
    const avatarLight = d.getElementById("luz") as HTMLElement;
    const avatarLeftEye = d.getElementById("esquerdo") as HTMLElement;

    const sunClassList = sun.classList;
    const moonClassList = moon.classList;

    let option = "day";

    let status = localStorage.getItem("darkModeBruno");
    if (status === "true" || status === null) {
      option = "night";
      sunClassList.toggle("notShow");
      moonClassList.toggle("show");
      avatarHead.classList.add("cabecaRotate");
      avatarClosedEyes.style.opacity = "1";
      avatarLight.classList.add("toBlink");
      avatarLeftEye.style.opacity = "0";
    } else {
      sunClassList.toggle("show");
      moonClassList.toggle("notShow");
      avatarHead.classList.remove("cabecaRotate");
      avatarClosedEyes.style.opacity = "0";
      avatarLight.classList.remove("toBlink");
      avatarLeftEye.style.opacity = "1";
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
      <MovelNav id="movelNav" {...handlers} style={{ touchAction: "pan-x" }}>
        <Sections>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/talvezobruno"
          >
            instagram
            <InstagramSVG />
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
          <LinkMobile href="/">Home</LinkMobile>
          <LinkMobile href="/skills">Skills</LinkMobile>
          <LinkMobile href="/portfolio">Portfolio</LinkMobile>
          <LinkMobile href="/contact">Contact</LinkMobile>
        </MenuMobile>
        <LogoMobile href="/">
          logo bob
          <LogoSVG />
        </LogoMobile>
      </MovelNav>
    </>
  );
};

export default Nav;
