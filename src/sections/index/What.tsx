//////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";
import Image from "next/image";

//////////////////////////////////////////////////////////////////////// Next

import { useEffect, useState } from "react";

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
    <section className="wait">
      <div className="blocoTexto">
        <h2 className="aberturaTexto">How can I help you?</h2>
        <p className="paragrafo">
          Curious about what I'm working on or did in the past?
        </p>
        <p className="paragrafo">
          Go ahead and take a look at my porfolio. Just click on the image or
          button below.
        </p>
      </div>
      <Link href="/portifolio">
        <a className="imagemWrap">
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
                finalWidth > 601
                  ? `/img/port_desk.jpg`
                  : `/img/port_mobile.jpg`
              }
              alt="teste"
            />
          )}
        </a>
      </Link>

      <div className="verMais verMaisHabilidades">
        <Link href="/portifolio">My Portfolio</Link>
      </div>
    </section>
  );
};

export default Wait;
