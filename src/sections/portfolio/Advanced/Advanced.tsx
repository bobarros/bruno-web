

/////////////////////////////////////////////////////////// Styled Components

import { ImagemWrap } from "sections/index/What/StyledWhat";

/////////////////////////////////////////////////////////////////// Component

const Advanced = () => {


  return (
    <div className="projetos__bloco">
      <h2 className="projetos__subtitulo">Premium Project</h2>
      <div>
        <p className="projetos__paragrafo">
          Everything that is more sophisticated and does not fit into previous
          projects.
        </p>
        <p className="projetos__paragrafo">
          In addition to what can be seen in previous projects, these sites are
          integrated with other services and might seek to aggressively dominate
          keywords in search engines.
        </p>
        <p className="projetos__paragrafo">
          They offer content in an organized way to the user, but with high
          speed. Panels for content management with different profiles and easy
          to use.
        </p>
        <p className="projetos__paragrafo">
          They are often the best option for an already consolidated business
          that needs to improve its digital identity.
        </p>
        <p className="projetos__paragrafo">
          They already have profiles responsible for generating the content,
          usually integrated with other digital properties, such as Instagram,
          Facebook, etc.
        </p>

        <p className="projetos__paragrafo">
          Or, businesses that are starting, but already know where they want to
          go and the difficulties they need to face. The investment already
          starts high.
        </p>
        <p className="projetos__paragrafo">
          The accommodation will hardly be free, even with low access. However,
          a good development can zero or keep the cost very low. As is the case
          with the examples below, which have zero cost.
        </p>
      </div>
      <div className="projetos__bloco">
        <div className="projetos__projeto">
          <a
            target="_blank"
            rel="noopener"
            href="https://neymar-new.ideias.dev/en"
          >
            <img
              width="500"
              height="333"
              className="projetos__imagem"
              src="/img/neymar.jpg"
              alt="projeto"
            />
          </a>
          <p className="projetos__descricao">
            This is not Neymar's official website. It was an exercise I did to
            learn some new technologies. All of this on a lightweight website.
          </p>
          <p className="projetos__descricao">
            It is not for sale, nor commercial use. More sophisticated sites are
            exemplified here.
          </p>
          <p className="projetos__descricao">
            There is an efficient search engine, many interaction resources,
            transition animation between content manager pages with different
            profiles.
          </p>
          <p className="projetos__descricao">
            It also has sophisticated language management, an in-depth
            interaction structure with search engines, as well as resources
            spread across different servers: content, images, and codes have
            different and redundant hosting services.
          </p>
          <p className="projetos__descricao">
            All of this on a very fast website.
          </p>
        </div>
      </div>
      <div className="projetos__divisao"></div>
      <div className="projetos__bloco">
        <div className="projetos__projeto">
          <a
            target="_blank"
            rel="noopener"
            href="https://circus-berlin-bobarros.vercel.app/"
          >
            <img
              width="500"
              height="333"
              className="projetos__imagem"
              src="/img/circus.jpg"
              alt="projeto"
            />
          </a>
          <p className="projetos__descricao">
            This example shows that a complex website may have a few pages. Like
            the previous one, it was done as an exercise on the official
            website.
          </p>
          <p className="projetos__descricao">
            Unlike the previous example, the design was just improved and not
            rebuilt. However, only this page is much more complex than
            multi-page sites.
          </p>
          <p className="projetos__descricao">
            Sites of this type are rare, as they are difficult to make with
            tools like WordPress, although this is the official version
            platform. Wich brings some inescapable problems.
          </p>
          <p className="projetos__descricao">Tudo isso em um site leve.</p>
        </div>
      </div>
      <div className="projetos__divisao"></div>

      <div className="projetos__tempo">
        Delivery estimation varies a lot from one project to another, but
        milestones will be defined with the client.
      </div>
    </div>
  );
};

export default Advanced;
