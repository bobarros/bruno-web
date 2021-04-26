import styles from "components/nav/Nav.module.scss";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  NavBar,
  Links,
  MovelNav
} from 'components/nav/StyledNav';
import InstagramSVG from "svg/InstagramSVG";
import EmailSVG from "svg/EmailSVG";
import LogoSVG from "svg/LogoSVG";

const moveUp = () => {
  const d = document;
  d.getElementById("movelNav").classList.toggle(styles.moveUp);
  d.getElementById("navButton").classList.toggle(styles.movelNav__animated);
};

const LinkDesk = ({ href, children }) => {
  return (
    <li>
      <Link href={href}><a>{children}</a></Link>
    </li>
  )
}

const LinkMobile = ({ onClick, classItem, classAnchor, href, children }) => {
  return (
    <div onClick={onClick} className={classItem}>
      <Link href={href}>
        <a className={classAnchor}>{children}</a>
      </Link>
    </div>
  )
}

const Nav = () => {
  const handlers = useSwipeable({
    onSwipedDown: () => {
      moveUp();
    },
    delta: 20,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
  });

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
        <div className={styles.movelNav__sessoes}>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/talvezobruno"
            className={styles.movelNav__sessao}
          >
            <InstagramSVG />
          </a>
          <div
            id="navButton"
            onClick={moveUp}
            className={styles.movelNav__sessao}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a
            href="mailto:brunobarros@ideias.dev"
            className={styles.movelNav__sessao}
          >
            <EmailSVG />
          </a>
        </div>
        <div className={styles.menuMovel}>
          <LinkMobile onClick={moveUp} classItem={styles.item} classAnchor={styles.link} href="/" >
            Home
          </LinkMobile>
          <LinkMobile onClick={moveUp} classItem={styles.item} classAnchor={styles.link} href="/skills" >
          Skills
          </LinkMobile>
          <LinkMobile onClick={moveUp} classItem={styles.item} classAnchor={styles.link} href="/portfolio" >
          Portfolio
          </LinkMobile>
          <LinkMobile onClick={moveUp} classItem={styles.item} classAnchor={styles.link} href="/contact" >
          Contact
          </LinkMobile> 
        </div>
        <LogoSVG className={styles.logoMovel} />
      </MovelNav>
    </>
  );
};

export default Nav;
