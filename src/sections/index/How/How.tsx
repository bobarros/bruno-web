
//////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

///////////////////////////////////////////////////////////// Local Components

import CssSVG from "svg/CssSVG";
import EltySVG from "svg/EltySVG";
import FigmaSVG from "svg/FigmaSVG";
import HtmlSVG from "svg/HtmlSVG";
import JsSVG from "svg/JsSVG";
import MongoSVG from "svg/MongoSVG";
import NextSVG from "svg/NextSVG";
import PhotoShopSVG from "svg/PhotoShopSVG";

/////////////////////////////////////////////////////////////////// Component

const How = () => {
  return (
    <section className="how">
      <div className="howBloco">
        <div className="blocoTexto">
          <h2 className="aberturaTexto">The cards up my sleeve</h2>
          <div className="solucoes">
            <div className="grupo">
              <div className="grupoIcones">
                <HtmlSVG />
                <CssSVG />
                <PhotoShopSVG />
                <NextSVG />
                <MongoSVG />
                <JsSVG />
                <FigmaSVG />
                <EltySVG />
              </div>
            </div>
          </div>
          <p className="paragrafo">
          I like to learn and there's a lot that I can do. Unfortunately, there are way more things that I just can't do.
          </p>
          <p className="paragrafo">
            Some clients like to go more extensive and know what features I am familiar with. Here it is!
          </p>
        </div>
      </div>

      <div className="verMais verMaisHabilidades">
        <Link href="/skills">
          <a>Skills</a>
        </Link>
      </div>
    </section>
  );
};

export default How;
