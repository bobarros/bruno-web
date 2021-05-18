////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

////////////////////////////////////////////////////////// Styled Components

import { Wrap, Anchor, Text, LogoName, Overlay } from "./StyledLogo";
import { Fix } from "components/simple/fix/fixStyled";

/////////////////////////////////////////////////////////// Local Components

import LogoSVG from "svg/LogoSVG";
import TipBox from "components/simple/tipBox/TipBox";

////////////////////////////////////////////////////////// Style Animations

import animations from "styles/Animations.module.scss";

//////////////////////////////////////////////////////////// Main Component

export default function Logo ({ state, setState }:{state:string[], setState:any}) {
  
  const viewLogo = () => {
    const d = document;
    d.getElementById("tipLogo")!.style.display = "block";
    d.getElementById("tipLogo")!.classList.add(animations.showTip);
  };
  
  const fixLogo = () => {
    const d = document;
    setState([...state, "logo"]);
    d.getElementById("tipLogo")!.style.display = "none";
    d.getElementById("fixLogo")!.style.opacity = "0";
    d.getElementById("overlayName")!.style.opacity = "0";
    setTimeout(() => {
      d.getElementById("overlayName")!.style.display = "none";
      d.getElementById("fixLogo")!.style.display = "none";
      d.getElementById("overlayLogo")!.style.display = "block";
      d.getElementById("realLogo")!.style.display = "block";
    }, 700);
  };
  
  return (
    <Link href="/home" passHref>
      <>
      <Anchor>Bruno Barros website home</Anchor>
      <Wrap>
        <Fix id="fixLogo" onClick={viewLogo} top="50px" right="-120px">
          Logo
        </Fix>
        <Text>.dev</Text>
        <LogoName id="overlayName">LoGo<span>underadable</span></LogoName>
        <Overlay style={{ display: "none" }} id="overlayLogo">
          logo
        </Overlay>
        <LogoSVG style={{ display: "none" }} id="realLogo" />
        <TipBox id="tipLogo" onClick={fixLogo}>
          <p>Should be easy, but it's not!</p>
          <ul>
            <li>Blurred image is a no-go!</li>
            <li>PNG format and vectors are always a good idea.</li>
            <li>Make sure to avoid unreadable text.</li>
            <li>Colors must match!</li>
            <li>Don't forget to give the anchor tag to help those who can't see and search engine robots.</li>
          </ul>
        </TipBox>
      </Wrap>
      </>
    </Link>
  );
}
