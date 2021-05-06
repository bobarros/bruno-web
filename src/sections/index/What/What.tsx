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
  VerMais
} from "sections/index/What/StyledWhat";

/////////////////////////////////////////////////////////////////// Component

const Wait = () => {
  const [loadImage, setLoad] = useState(false);
  const [finalWidth, setWidth] = useState(0);
  const [finalHeight, setHeight] = useState(0);

  useEffect(() => {
    const elHeight = document.getElementById("propImage") as HTMLDivElement;
    const elWidth = document.getElementById("propImage") as HTMLDivElement;

    ////any calc to set the height and width that I want.

    setHeight(elHeight.offsetHeight);
    setWidth(elWidth.offsetWidth);
    setLoad(true);
  }, []);

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
          {!loadImage && (
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
                id="propImage"
                src="/img/black_port_desk.svg"
                alt="bruno's portfolio image with three computers showing different websites"
              />
            </picture>
          )}
          {loadImage && (
            <Image
              width={finalWidth}
              height={finalHeight}
              objectFit="cover"
              src={
                finalWidth > 601 ? `/img/port_desk.jpg` : `/img/port_mobile.jpg`
              }
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
