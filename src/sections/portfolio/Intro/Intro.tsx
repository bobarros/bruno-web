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
  const [loadIntro, setLoad] = useState(false);
  const [introWidth, setWidth] = useState(0);
  const [introHeight, setHeight] = useState(0);

  useEffect(() => {
    const elHeight = document.getElementById("introImages") as HTMLDivElement;
    const elWidth = document.getElementById("introImages") as HTMLDivElement;

    ////any calc to set the height and width that I want.

    setHeight(elHeight.offsetHeight);
    setWidth(elWidth.offsetWidth);
    setLoad(true);
  }, []);

  return (
    <Wrap>
      <TextBlock>
        <Paragraph>
          Here, I will explain what I have to offer. After that, you will find
          projects where my <a href="/skills">skills</a> can be evaluated and
          budget estimations for each job.
        </Paragraph>
        <Paragraph>
          I stand out among others because I mix great developer skills with
          great design fundamentals. I can build a website with quality and very
          quickly on my own.
        </Paragraph>
        <Paragraph>
          The USD budgets seems so low because I'm charging the same as I do in
          Brazil. For now.
        </Paragraph>
        <ImagemWrap>
        Draw representing people building an website
          {!loadIntro && (
            <img
              id="introImages"
              src="/svg/portblack.svg"
              alt="Draw representing people building an website in the screen as if was a house, with bricks"
            />
          )}
          {loadIntro && (
            <Image
              width={introWidth}
              height={introHeight}
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
          {loadIntro && (
            <Image
              width={introWidth}
              height={introHeight}
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
