//////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";
import Image from "next/image";

//////////////////////////////////////////////////////////////////////// React

import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  BlocoTexto,
  AberturaTexto,
  Paragrafo,
  ImagemWrap,
  VerMais,
} from "sections/index/What/StyledWhat";

/////////////////////////////////////////////////////////////////// Component

const Wait = () => {
  const [load, setLoad] = useState("notReady");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    ////any calc to set the height and width that I want.
    if (width === 0 || height === 0) {
      const element = document.getElementById("propIndex") as HTMLDivElement;
      setHeight(element.offsetHeight);
      setWidth(element.offsetWidth);
      setLoad("again" + Math.random());
    } else {
      setLoad("ready");
    }
  }, [load]);

  return (
    <Wrap>
      <BlocoTexto>
        <AberturaTexto>How can I help you?</AberturaTexto>
        <Paragrafo>
          Curious about what I'm working on or did in the past?
        </Paragrafo>
        <Paragrafo>
          Go ahead and take a look at my porfolio. Just click on the image or
          button below.
        </Paragrafo>
      </BlocoTexto>
      <Link href="/portfolio">
        <ImagemWrap>
          {!(load === "ready") && (
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="/svg/black_port_mobile.svg"
              />
              <source
                media="(min-width: 601px)"
                srcSet="/svg/black_port_desk.svg"
              />
              <img
                id="propIndex"
                src="/img/black_port_desk.svg"
                alt="bruno's portfolio image with three computers showing different websites"
              />
            </picture>
          )}
          {load === "ready" && (
            <Image
              width={width}
              height={height}
              objectFit="cover"
              src={width > 601 ? `/img/port_desk.jpg` : `/img/port_mobile.jpg`}
              alt="bruno's portfolio image with three computers showing different websites"
            />
          )}
        </ImagemWrap>
      </Link>
      <VerMais>
        <Link href="/portfolio">My Portfolio</Link>
      </VerMais>
    </Wrap>
  );
};

export default Wait;
