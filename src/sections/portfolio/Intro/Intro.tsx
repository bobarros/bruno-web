
//////////////////////////////////////////////////////////////////////// React

import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  TextBlock,
  Paragraph
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
          I stand out among others because I mix great developer skills with
          great design fundamentals. I can build a website with quality and
          quickly on my own.
        </Paragraph>
        <Paragraph>
          Here, You will find <a href="#projetos">projects</a> where my{" "}
          <a href="/skills">skills</a> can be evaluated here.{" "}
        </Paragraph>
        <Paragraph>
          Last but not least, I tell you some of the things that{" "}
          <a href="#donts">I don't do</a>. I have no intention of waste your
          time.
        </Paragraph>
       
      </TextBlock>
    </Wrap>
  );
};

export default Intro;
