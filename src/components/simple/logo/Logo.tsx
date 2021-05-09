////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

////////////////////////////////////////////////////////// Styled Components


import {
  Overlay
} from 'components/logo/StyledLogo';

import {
  Wrap,
  Text,
  LogoName
} from './StyledLogo';
import LogoSVG from "svg/LogoSVG";

import { Fix } from 'components/simple/fix/fixStyled';

/////////////////////////////////////////////////////////// Main Component

const fixLogo = () => {
  document.getElementById("fixLogo")!.style.opacity = "0";    
  document.getElementById("overlayName")!.style.opacity = "0";    
  setTimeout(() => {
    document.getElementById("overlayName")!.style.display = "none";
    document.getElementById("fixLogo")!.style.display = "none";
    document.getElementById("overlayLogo")!.style.display = "block";  
    document.getElementById("realLogo")!.style.display = "block"; 
  }, 700);

  console.log("Teste")
}

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Wrap>
        <Fix id="fixLogo" onClick={fixLogo} top="50px" right="-120px">Logo</Fix>
        <Text>.dev</Text>
        <LogoName id="overlayName">LoGo</LogoName>
        <Overlay style={{display: "none"}} id="overlayLogo">logo</Overlay>
        <LogoSVG style={{display: "none"}} id="realLogo"/>
      </Wrap>
    </Link>
  );
}
