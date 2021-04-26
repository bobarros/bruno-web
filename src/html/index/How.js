import Link from "next/link";
import CssSVG from "svg/CssSVG";
import EltySVG from "svg/EltySVG";
import FigmaSVG from "svg/FigmaSVG";
import HtmlSVG from "svg/HtmlSVG";
import JsSVG from "svg/JsSVG";
import MongoSVG from "svg/MongoSVG";
import NextSVG from "svg/NextSVG";
import PhotoShopSVG from "svg/PhotoShopSVG";

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
            I like to learn and that's a lot I can do but I don't know
            everything, right?
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
