/////////////////////////////////////////////////////////// Styled Components

import { ImagemWrap } from "sections/index/What/StyledWhat";

/////////////////////////////////////////////////////////////////// Component

const Intermediate = () => {

  return (
<div className="projetos__bloco">
      <h2 className="projetos__subtitulo">Standard Project</h2>
      <div>
        <p className="projetos__paragrafo">
          Some businesses that could fit into the previous category may prefer
          this one. Probably for businesses that are already running for some
          time.
        </p>
        <p className="projetos__paragrafo">
          You may have some animations, interactive items, forms, newsletters,
          stories amp, etc., and also demands high performance for the user.
          Items that will require different hosting services for better
          performance might be an option.
        </p>
        <p className="projetos__paragrafo">
          Perhaps we are talking about more than one language, integrations with
          external services such as hotel reservations, insertion of several
          videos with smart loading (only downloading from YouTube after user
          interaction).
        </p>
        <p className="projetos__paragrafo">
          We can start working with more content, like a blog. However, we are
          still not talking about the existence of a content manager, database,
          search, etc.
        </p>
        <p className="projetos__paragrafo">
          Thus, it requires the need for a minimum knowledge of HTML codes or
          hiring someone who can, if updates are often.
        </p>
        <p className="projetos__paragrafo">
          In many cases, free hosting is still used when we are talking about
          less than 50 thousand monthly views. Or very low cost in more specific
          cases.
        </p>
      </div>
      <div className="projetos__bloco">
        <div className="projetos__projeto">
          <p className="projetos__projeto--name">Tourism</p>
          <a
            target="_blank"
            rel="noopener"
            href="https://jujuwebsite.herokuapp.com/"
          >
            <img
              width="500"
              height="333"
              className="projetos__imagem"
              src="/img/juju.jpg"
              alt="projeto"
            />
          </a>
          <p className="projetos__descricao">
            A website with a modern design, but extremely fast, with a score
            above 90 points on Google's{" "}
            <a
              rel="noopener"
              target="_blank"
              href="https://developers.google.com/speed/pagespeed/insights/"
            >
              Pages Speeds
            </a>{" "}
            . It was never really online, although it started as a project for a
            real client, who gave up on continuing.
          </p>
          <p className="projetos__descricao">
            In addition to the traditional way, all are made in a specific
            format for sharing on smartphones, which can be seen{" "}
            <a
              rel="noopener"
              target="_blank"
              href="https://jujuwebsite.herokuapp.com/rotas/rota-01"
            >
              in this example
            </a>
            .
          </p>
        </div>
        <div className="projetos__projeto">
          <p className="projetos__projeto--name">Blog</p>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.brunobarros.online/en"
          >
            <img
              width="500"
              height="333"
              className="projetos__imagem"
              src="/img/bob.jpg"
              alt="projeto"
            />
          </a>
          <p className="projetos__descricao">
            The website has two languages. When changing the language anywhere,
            the context is not lost, as is the case with some other simpler
            sites.
          </p>
          <p className="projetos__descricao">
            There is integration to save client emails, a formatted print
            version of every article, recency management, automated archiving.
            You need someone to know HTML to be kept on the air. In this case,
            this person is myslef. Feel free to read my articles.
          </p>
        </div>
      </div>
      <div className="projetos__divisao"></div>

      <div className="projetos__tempo">
        evaluation version in less than <span>a week</span>. Milestones
        delivered at least every two days for follow-up.
      </div>
    </div>
  );
};

export default Intermediate;
