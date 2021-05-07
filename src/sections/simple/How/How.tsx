//////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

/////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  Solucoes,
  Grupo,
  GrupoIcones
} from "sections/index/How/StyledHow";

import {
  BlocoTexto,
  AberturaTexto,
  Paragrafo,
  VerMais
} from "sections/index/What/StyledWhat";

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
    <Wrap>
      <BlocoTexto>
        <AberturaTexto>The cards up my sleeve</AberturaTexto>
        <Solucoes>
          <Grupo>
            <GrupoIcones>
              <HtmlSVG />
              <CssSVG />
              <PhotoShopSVG />
              <NextSVG />
              <MongoSVG />
              <JsSVG />
              <FigmaSVG />
              <EltySVG />
            </GrupoIcones>
          </Grupo>
        </Solucoes>
        <Paragrafo>
          I like to learn and there's a lot that I can do. Unfortunately, there
          are way more things that I just can't do.
        </Paragrafo>
        <Paragrafo>
          Some clients like to go more extensive and know what features I am
          familiar with. Here it is!
        </Paragrafo>
      </BlocoTexto>
      <VerMais>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
      </VerMais>
    </Wrap>
  );
};

export default How;
