/////////////////////////////////////////////////////////// Styled Components

import { ImagemWrap } from "sections/index/What/StyledWhat";

/////////////////////////////////////////////////////////////////// Component

const Basic = () => {

  return (
    <div className="projetos__bloco">
    <h2 className="projetos__subtitulo">Basic project</h2>
    <div>
      <p className="projetos__paragrafo">
        Most websites should fall into this category. They are those with few
        pages, only one language, no animations, etc.
      </p>
      <p className="projetos__paragrafo">
        With a very specific objective, it does not require much work and
        maintenance is almost nonexistent.
      </p>
      <p className="projetos__paragrafo">
        They are excellent for lawyers, doctors, investment advisers, public
        figures, architects, psychologists, nutritionists, or any professional
        who works alone, but does not want to share a lot of content, like
        articles.
      </p>
      <p className="projetos__paragrafo">
        Even small businesses, such as law firms, barbershops, consultancy
        firms, etc., will fit in here.
      </p>
      <p className="projetos__paragrafo">
        This type of website uses free hosting or less than US$5 a month.
        Already including security certificates (eliminating unsafe website
        warnings, still common on many).
      </p>
      <p className="projetos__paragrafo">
        Remember, free does not mean low quality. This site is hosted on a
        free version of Vercel.
      </p>
    </div>
    <div className="projetos__bloco">
      <div className="projetos__projeto">
        <p className="projetos__projeto--name">Architect</p>
        <a
          target="_blank"
          rel="noopener"
          href="https://next-public-six.vercel.app/"
        >
          <img
            width="500"
            height="333"
            className="projetos__imagem"
            src="/img/arch.jpg"
            alt="projeto"
          />
        </a>
        <p className="projetos__descricao">
          The project has only one page, but it could have others, going
          deeper into some projects. Your goal is to be a business card.
        </p>
        <p className="projetos__descricao">
          There is nothing sophisticated, yet it is an above-average site.
        </p>
      </div>
    </div>
    <div className="projetos__divisao"></div>

    <div className="projetos__tempo">
      After defining the project, evaluation version in{" "}
      <span>two or three days</span>.
    </div>
  </div>
  );
};

export default Basic;
