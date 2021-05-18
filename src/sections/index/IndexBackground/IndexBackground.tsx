/////////////////////////////////////////////////////////// Styled Components

import { Wrap, LogoBack } from "./IndexBackgroundStyled";

///////////////////////////////////////////////////////////// Local Components

import LogoSVG from "svg/LogoSVG";

/////////////////////////////////////////////////////////////////// Component

const IndexBackground = ({ show }:{ show?:boolean}) => {
  return (
    <Wrap show={show} id="backgroundWrap">
      <LogoBack>
        <LogoSVG id="animationLogo" />
      </LogoBack>
    </Wrap>
  );
};

export default IndexBackground;
