//////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";
import Image from "next/image";

//////////////////////////////////////////////////////////////////////// Next

import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  BlocoTexto,
  AberturaTexto,
  Paragrafo,
  ImagemWrap,
  VerMais
} from "sections/index/What/StyledWhat.js";

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
      <Link href="/portifolio">
        <ImagemWrap>
          {!loadImage && (
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="/img/black_port_mobile.png"
              />
              <source
                media="(min-width: 601px)"
                srcSet="/img/black_port_desk.png"
              />
              <img
                id="propImage"
                src="/img/black_port_desk.png"
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
              alt="teste"
            />
          )}
        </ImagemWrap>
      </Link>
      <VerMais>
        <Link href="/portifolio">My Portfolio</Link>
      </VerMais>
    </Wrap>
  );
};

export default Wait;
