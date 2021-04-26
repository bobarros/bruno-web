////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  Overlay,
  Text
} from 'components/logo/StyledLogo';
import LogoSVG from "svg/LogoSVG";

/////////////////////////////////////////////////////////// Main Component

export default function Logo() {
  return (
    <Link href="/">
      <Wrap href="/">
        <Text>.dev</Text>
        <Overlay>logo</Overlay>
        <LogoSVG />
        logo bob
      </Wrap>
    </Link>
  );
}
