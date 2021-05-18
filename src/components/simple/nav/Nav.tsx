/////////////////////////////////////////////////////////// Styled Components

import {
  NavBar,
  Links,
  LinkDesk,
  Hamburguer,
  Menu,
  NavWrap,
  Navfix,
  LeftMenu,
  RigthMenu,
  BottomMenu,
  Credits,
} from "./StyledNav";

import { Fix } from "components/simple/fix/fixStyled";

/////////////////////////////////////////////////////////// Local Components

import GitSVG from "svg/GitSVG";
import EmailSVG from "svg/EmailSVG";
import Logo from "components/simple/logo/Logo";
import TipBox from "components/simple/tipBox/TipBox";

//////////////////////////////////////////////////////////////// Style Animations

import animations from "styles/Animations.module.scss";

/////////////////////////////////////////////////////////// Main Component

const Nav = ({ state, setState }: { state: string[]; setState: any }) => {
  const fixMenuBottom = () => {
    const d = document;

    setState([...state, "menuBottom"]);    
    d.getElementById("tipMenuBottom")!.style.display = "none";   
    d.getElementById("navButton")!.classList.add(animations.open);

    /// Links
    const homeLink = d.getElementById("rigthMenu")?.firstChild as HTMLElement;    
    homeLink.style.textDecoration = "underline";

    ////Text
    const ctaText = d.getElementById("ctaText")!;
    ctaText.style.opacity = "0";
    setTimeout(() => {
      ctaText.innerText = "Reach out to me!";
      ctaText.style.opacity = "1";
    }, 700);
    

    ////Emojis
      const emojiOne = d.getElementById("emojiOne")!;
      const emojiTwo = d.getElementById("emojiTwo")!;

      emojiOne.style.opacity = "0";
      emojiTwo.style.opacity = "0";
    
    setTimeout(() => {
      emojiOne.innerText = "❤️";
      emojiTwo.innerText = "💪";
      emojiOne.style.opacity = "1";
      emojiTwo.style.opacity = "1";
    }, 700);
  };

  const viewMenuBottom = () => {
    const d = document;
    const tipMenu = d.getElementById("tipMenuBottom")!;
    const fixMenuBottom = d.getElementById("fixMenuBottom")!;
    
    fixMenuBottom.style.display = "none";
    tipMenu.style.display = "block";
    tipMenu.classList.add(animations.showTip);
  };

  const viewNav = () => {
    const d = document;
    const tipNav = d.getElementById("tipNav")!;

    tipNav.style.display = "block";
    tipNav.classList.add(animations.showTip);
  };

  const fixNav = () => {
    const d = document;

    setState([...state, "nav"]);
    d.getElementById("tipNav")!.style.display = "none";
    d.getElementById("fixNav")!.style.opacity = "0";
    d.getElementById("navWrap")!.style.backgroundColor = "transparent";
    d.getElementById("phoneIcon")!.style.width = "0%";
    d.getElementById("navFix")!.style.display = "none";

    setTimeout(() => {
      d.getElementById("navButton")!.style.display = "block";
      d.getElementById("navButton")!.style.opacity = "1";
      d.getElementById("allLinks")!.classList.add(animations.fadeImage);
      d.getElementById("fixNav")!.style.display = "none";
    }, 700);
  };

  const handleMenu = () => {
    const d = document;
    const navButton = d.getElementById("navButton") as HTMLElement;
    const leftBox = d.getElementById("leftMenu") as HTMLElement;
    const rightBox = d.getElementById("rigthMenu") as HTMLElement;
    const boxMenu = d.getElementById("boxMenu") as HTMLElement;
    const bottomMenu = d.getElementById("bottomMenu") as HTMLElement;

    if (navButton.getAttribute("aria-label") === "closed") {
      navButton.setAttribute("aria-label", "opened");      
      boxMenu.style.display = "flex";
      if (state.includes("menuBottom")) navButton.classList.add(animations.open);
      setTimeout(() => {
        leftBox.style.left = "0%";
        rightBox.style.right = "0%";
      }, 20);

      setTimeout(() => {
        bottomMenu.style.bottom = "2vh"
      }, 700);
    } else if (navButton.getAttribute("aria-label") === "opened") {
      navButton.setAttribute("aria-label", "closed");
      navButton.classList.remove(animations.open);
      leftBox.style.left = "-50%";
      rightBox.style.right = "-50%";
      bottomMenu.style.bottom = "-50vh"
      setTimeout(() => {
        boxMenu.style.display = "none";
      }, 700);
      const hambClasses = d.getElementById("navButton")!.classList;
      if (hambClasses.contains(animations.open)) hambClasses.add(animations.open);
    }
  };

  return (
    <>
      <Logo state={state} setState={setState} />
      <Hamburguer aria-label="closed" onClick={handleMenu} id="navButton">
        <span></span>
        <span></span>
        <span></span>
      </Hamburguer>
      <NavWrap>
        <NavBar id="navWrap">
          <Fix id="fixNav" onClick={viewNav} top="50px" right="50%">
            Navbar
          </Fix>
          <Links id="allLinks">
            <LinkDesk href="#">Home</LinkDesk>
            <LinkDesk href="#skills">Skills</LinkDesk>
            <LinkDesk href="#portfolio">Porfolio</LinkDesk>
            <LinkDesk href="#contact">Contact</LinkDesk>
            <LinkDesk id="phoneIcon" href="#contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M436.992,74.953c-99.989-99.959-262.08-99.935-362.039,0.055s-99.935,262.08,0.055,362.039s262.08,99.935,362.039-0.055 c48.006-48.021,74.968-113.146,74.953-181.047C511.986,188.055,485.005,122.951,436.992,74.953z M387.703,356.605 c-0.011,0.011-0.022,0.023-0.034,0.034v-0.085l-12.971,12.885c-16.775,16.987-41.206,23.976-64.427,18.432 c-23.395-6.262-45.635-16.23-65.877-29.525c-18.806-12.019-36.234-26.069-51.968-41.899 c-14.477-14.371-27.483-30.151-38.827-47.104c-12.408-18.242-22.229-38.114-29.184-59.051 c-7.973-24.596-1.366-51.585,17.067-69.717l15.189-15.189c4.223-4.242,11.085-4.257,15.326-0.034 c0.011,0.011,0.023,0.022,0.034,0.034l47.957,47.957c4.242,4.223,4.257,11.085,0.034,15.326c-0.011,0.011-0.022,0.022-0.034,0.034 l-28.16,28.16c-8.08,7.992-9.096,20.692-2.389,29.867c10.185,13.978,21.456,27.131,33.707,39.339 c13.659,13.718,28.508,26.197,44.373,37.291c9.167,6.394,21.595,5.316,29.525-2.56l27.221-27.648 c4.223-4.242,11.085-4.257,15.326-0.034c0.011,0.011,0.022,0.022,0.034,0.034l48.043,48.128 C391.911,345.502,391.926,352.363,387.703,356.605z" />
              </svg>
            </LinkDesk>
          </Links>
        </NavBar>
      </NavWrap>
      <Navfix id="navFix" />
      <TipBox id="tipNav" onClick={fixNav}>
        <p>We always need a navigation bar or button</p>
        <ul>
          <li>
            Too much creativity is dangerous. It might result in a negative
            impact on usability.
          </li>
          <li>We also don't want to look like every other website.</li>
          <li>Phone numbers sometimes it's not a good idea (my case).</li>
          <li>Matching the next HTML element is a must.</li>
          <li>
            A transparent background is safe, with a button, in this project.
          </li>
        </ul>
      </TipBox>
      <Menu id="boxMenu">
        <LeftMenu id="leftMenu">
          <h2 id="ctaText">Reach me out!</h2>
          <div>
            <a href="mailto:brunobarros@ideias.dev">
              email
              <EmailSVG />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/bobarros"
            >
              github
              <GitSVG />
            </a>
          </div>
        </LeftMenu>
        <RigthMenu id="rigthMenu">
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </RigthMenu>
        <BottomMenu id="bottomMenu">
          <Credits>
            <p>
              By{" "}
              <a
                target="_blank"
                rel="noopener"
                href="#ttps://www.brunobarros.dev"
              >
                Bruno Barros
              </a>
              , with <span id="emojiOne">😒</span> and a lot of{" "}
              <span id="emojiTwo">☕</span>
            </p>
            <p>2019-2021 brunobarros.dev</p>
            <p>
              Hosted by{" "}
              <a target="_blank" rel="noopener" href="https://vercel.com/">
                Vercel
              </a>
            </p>
            <p>
              <a target="_blank" rel="noopener" href="https://nextjs.org/">
                NEXT.<span>JS</span>
              </a>
            </p>
          </Credits>
          <TipBox id="tipMenuBottom" onClick={fixMenuBottom}>
            <p>Just some details, but sometimes they matter most!</p>
            <ul>
              <li>
                The user must always know where he is and where he can go you
                your website.
              </li>
              <li>Pay attention to grammar details.</li>
              <li>
                Emojis: most projects have some space for humor and others more
                clear emotions, but becareful with the message.
              </li>
              <li>
                Common icons should always indicate what they will do when
                clicked.
              </li>
            </ul>
          </TipBox>
          <Fix id="fixMenuBottom" onClick={viewMenuBottom} top="-50vh" right="50%">
            Mobile Menu
          </Fix>
        </BottomMenu>
      </Menu>
    </>
  );
};

export default Nav;
