//////////////////////////////////////////////////////////////////////// Next

import Image from "next/image";

//////////////////////////////////////////////////////////////////////// React

import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  TextBlock,
  Paragraph,
  ImagemWrap,
} from "sections/portfolio/Intro/StyledIntro";

/////////////////////////////////////////////////////////////////// Component

const Intro = () => {
  const [load, setLoad] = useState("notReady");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    ////any calc to set the height and width that I want.
    if (width === 0 || height === 0) {
      const element = document.getElementById("introPrep") as HTMLDivElement;
      setHeight(element.offsetHeight);
      setWidth(element.offsetWidth);
      setLoad("again" + Math.random());
    } else {
      setLoad("ready");
    }
  }, [load]);

  return (
    <Wrap>
      <TextBlock>
        <Paragraph>
          Here, I will explain what I have to offer. After that, you will find
          projects where my <a href="/skills">skills</a> can be evaluated.
        </Paragraph>
        <Paragraph>
          I stand out among others because I mix great developer skills with
          great design fundamentals. I can build a website with quality and very
          quickly on my own.
        </Paragraph>
        <ImagemWrap>
          Draw representing people building an website
          {!(load === "ready") && (
            <img
              id="introPrep"
              src="/svg/portblack.svg"
              alt="Draw representing people building an website in the screen as if was a house, with bricks"
            />
          )}
          {load === "ready" && (
            <Image
              width={width}
              height={height}
              objectFit="cover"
              src="/img/port1.png"
              alt="Draw representing people building an website in the screen as if was a house, with bricks"
            />
          )}
        </ImagemWrap>
        <Paragraph>
          <span>Development and design:</span> I plan and build a website from
          scratch. Logos, color scheme, layout for all types of screens,
          information architecture, etc.
        </Paragraph>
        <ImagemWrap>
          Draw of smartphone full of hearts and comments
          {load === "ready" && (
            <Image
              width={width}
              height={height}
              objectFit="cover"
              src="/img/port2.png"
              alt="Draw of smartphone full of hearts and comments"
            />
          )}
        </ImagemWrap>
        <Paragraph>
          <span>Analysis:</span> I'll evaluate your existing digital properties
          and those of your competitors. Thus, I can point out possible paths in
          front of the desired objectives.
        </Paragraph>
      </TextBlock>
    </Wrap>
  );
};

export default Intro;
