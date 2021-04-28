//////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

//////////////////////////////////////////////////////////////////////// Next

import React, { useEffect, useState } from "react";

/////////////////////////////////////////////////////////////////// Component

const Wait = () => {
  const [loadImage, setLoad] = useState(false);
  const [finalWidth, setWidth] = useState(0);
  const [finalHeight, setHeight] = useState(0);

  useEffect(() => {
    console.log("fire");
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
            <img
              width={finalWidth}
              height={finalHeight}
              src={
                finalWidth > 601 
                ? 
                `https://res.cloudinary.com/bobarros/image/upload/q_auto,f_auto,w_${finalWidth}/v1612389072/index/portfolio_pt8tjq` 
                : 
                `https://res.cloudinary.com/bobarros/image/upload/q_auto,f_auto,w_${finalWidth}/v1612389075/index/portfolio_movel_xunwje`
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
