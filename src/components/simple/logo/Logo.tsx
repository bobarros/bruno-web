////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  Text
} from './StyledLogo';

/////////////////////////////////////////////////////////// Main Component

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Wrap>
        <Text>.dev</Text>
        <p>LoGo</p>
      </Wrap>
    </Link>
  );
}
