//////////////////////////////////////////////////////////////////////// Next

import Image from "next/image";

//////////////////////////////////////////////////////////////////////// React


/////////////////////////////////////////////////////////////////// Styled

import { Wrap, ImageWrap, TextWrap, Description } from "./IntroStyled";
import { Fix } from 'components/simple/fix/fixStyled';

//////////////////////////////////////////////////////////////////////// Animations

import animations from "./Animations.module.scss";
import Arrows from "components/simple/arrows/Arrows";

//////////////////////////////////////////////////////////////////////// Component

const Intro = () => {

  const fixViewPort = () => {
    const d = document;

    d.getElementById("fixViewPort")!.style.opacity = "0";
    setTimeout(() => {
      d.getElementById("fixViewPort")!.style.display = "none";
    }, 700);

    d.getElementById("navWrap")!.style.opacity = "1";
    d.getElementById("viewport")!.style.height = "90vh";
    d.getElementById("textHeader")!.style.top = "360px";
    d.getElementById("introArrows")!.style.display = "block";
    d.getElementById("imageAgency")!.classList.add(animations.fadeImage);
  };

  return (
    <Wrap id="viewport">
      <TextWrap id="textHeader">
        <h1>A young, informal, and award winning agency!</h1>
        <Description>
          <h2>We're passionate about what we do, delivers powerful results</h2>
          <button>Request Proposal</button>
        </Description>       
      </TextWrap>
      <ImageWrap>
        <Image
          src="/img/simple/agency_correct.jpg"
          width="1920"
          height="1080"
          objectFit="cover"
          alt="Unsplash image with three people seated around a table and talking about some digital project"
          priority={true}
        />
         <Arrows />
      </ImageWrap>
      <ImageWrap id="imageAgency">
        <Image
          src="/img/simple/agency.jpg"
          width="1920"
          height="1080"
          objectFit="cover"
          alt="Unsplash image with three people seated around a table and talking about some digital project"
          priority={true}
        />        
      </ImageWrap>
      <Fix id="fixViewPort" onClick={fixViewPort} top="100px" right="100px">Above the fold</Fix>
     
    </Wrap>
  );
};

export default Intro;
