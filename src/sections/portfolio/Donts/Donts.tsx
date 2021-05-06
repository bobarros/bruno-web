/////////////////////////////////////////////////////////// Styled Components

import { ImagemWrap } from "sections/index/What/StyledWhat";

/////////////////////////////////////////////////////////////////// Component

const Donts = () => {
    return (
    <div className="projetos__bloco">
      <h2 className="projetos__subtitulo">What I don't do</h2>
      <p className="projetos__paragrafo">
        To save your time, it's important to know projects that I don't work.
      </p>
      <p className="projetos__paragrafo">
        I'm not a software developer of all sorts. I will not build complex
        services for your site, like internal financial transactions.
      </p>
      <p className="projetos__paragrafo">
        A good example would be a website with some managing small business
        solutions.
      </p>
      <p className="projetos__paragrafo">
        If your project contains logged areas, e-commerce, etc, I can build the
        way that you deliver the services and make the integration. I have no
        interest in building the services.
      </p>
      <p className="projetos__paragrafo">
        I don't use WordPress, but I can use the content that is already hosted
        there, which I will access via API if there is already a current
        website.
      </p>
    </div>
  );
};

export default Donts;
