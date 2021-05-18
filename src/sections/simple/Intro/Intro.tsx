//////////////////////////////////////////////////////////////////////// Next

import Image from "next/image";

//////////////////////////////////////////////////////////////////////// React

/////////////////////////////////////////////////////////////////// Styled

import { Wrap, ImageWrap, TextWrap, Description, ImagesBlock } from "./IntroStyled";
import { Fix } from "components/simple/fix/fixStyled";

//////////////////////////////////////////////////////////////////////// Animations

import animations from "styles/Animations.module.scss";
import Arrows from "components/simple/arrows/Arrows";
import TipBox from "components/simple/tipBox/TipBox";

//////////////////////////////////////////////////////////////////////// Component

const Intro = ({ state, setState }: { state: string[]; setState: any }) => {
  const tipViewPort = () => {
    const d = document;
    d.getElementById("tipViewPort")!.style.display = "block";
    d.getElementById("tipViewPort")!.classList.add(animations.showTip);
  };

  const fixViewPort = () => {
    const d = document;
    setState([...state, "intro"]);

    d.getElementById("tipViewPort")!.removeAttribute("style");
    d.getElementById("fixViewPort")!.style.opacity = "0";
    setTimeout(() => {
      d.getElementById("fixViewPort")!.style.display = "none";
      d.getElementById("imageAgency")!.style.display = "none";
    }, 700);

    d.getElementById("navWrap")!.style.opacity = "1";
    d.getElementById("viewport")!.style.height = "90vh";
    d.getElementById("textHeader")!.style.top = "320px";
    d.getElementById("introArrows")!.style.display = "block";
    d.getElementById("headerDescription")!.style.display = "block";
    d.getElementById("imageAgency")!.classList.add(animations.fadeImage);
    d.getElementById("imageWrap")!.style.zIndex = "0";
  };

  return (
    <Wrap id="viewport">
      <TextWrap id="textHeader">
        <h1>A young, informal, and award winning agency!</h1>
        <Description id="headerDescription">
          <h2>
            We commit we what we do, using passion as fuel to deliver powerful
            results.
          </h2>
          <button>Request Proposal</button>
        </Description>
      </TextWrap>
      <ImagesBlock>
        <ImageWrap id="imageWrap">
          <Image
            src="/img/simple/agency_correct.jpg"
            layout="fill"
            alt="Unsplash image with three people seated around a table and talking about some digital project"
            priority
          />
          <Arrows />
        </ImageWrap>
        <ImageWrap id="imageAgency">
          <Image
            src="/img/simple/agency.jpg"
            width="1920"
            height="1080"
            alt="Unsplash image with three people seated around a table and talking about some digital project"
            priority
          />
        </ImageWrap>
      </ImagesBlock>
      <Fix id="fixViewPort" top="100px" onClick={tipViewPort} right="100px">
        Introduction
      </Fix>
      <TipBox id="tipViewPort" onClick={fixViewPort}>
        <p>Do you see the problems here?</p>
        <ul>
          <li>People are arguing.</li>
          <li>The text is covering faces.</li>
          <li>Lack of information.</li>
          <li>No hint about page continuity below.</li>
          <li>We need to match the statement with the image.</li>
          <li>We need to make people smile!</li>
          <li>A CTA button.</li>
        </ul>
      </TipBox>
    </Wrap>
  );
};

export default Intro;
