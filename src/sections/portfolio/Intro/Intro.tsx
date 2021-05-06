//////////////////////////////////////////////////////////////////////// Next

import Image from "next/image";

//////////////////////////////////////////////////////////////////////// React

import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  TextBlock,
  Paragraph,
  ImagemWrap
} from "sections/portfolio/Intro/StyledIntro";

/////////////////////////////////////////////////////////////////// Component

const Intro = () => {
  const [loadImage, setLoad] = useState(false);
  const [finalWidth, setWidth] = useState(0);
  const [finalHeight, setHeight] = useState(0);

  useEffect(() => {
    const elHeight = document.getElementById("port1image") as HTMLDivElement;
    const elWidth = document.getElementById("port1image") as HTMLDivElement;

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
        <Paragraph>
          <ImagemWrap>
            {!loadImage && (
              <img
                id="port1image"
                src="/svg/portblack.svg"
                alt="bruno's portfolio image with three computers showing different websites"
              />
            )}
            {loadImage && (
              <Image
                width={finalWidth}
                height={finalHeight}
                objectFit="cover"
                src="/img/port1.png"
                alt="teste"
              />
            )}
          </ImagemWrap>
        </Paragraph>
        <Paragraph>
          <span>Development and design:</span> I plan and build a website from
          scratch. Logos, color scheme, layout for all types of screens,
          information architecture, etc.
        </Paragraph>

        <Paragraph>
          <ImagemWrap>
            {loadImage && (
             <Image
             width={finalWidth}
             height={finalHeight}
             objectFit="cover"
             src="/img/port2.png"
             alt="teste"
           />
            )}
          </ImagemWrap>
        </Paragraph>

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
