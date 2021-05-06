/////////////////////////////////////////////////////////////////// Styled

import {
  Paragraph,
  TitleSub,
  ImageProject,
  DescriptionProject,
  LineBreakPj,
  Estimation,
} from "../../shared/StyledShared";

/////////////////////////////////////////////////////////////////// Component

const Intermediate = () => {
  return (
    <div>
      <TitleSub>Standard Project</TitleSub>
      <div>
        <Paragraph>
          Some businesses that could fit into the previous category may prefer
          this one. Probably for businesses that are already running for some
          time.
        </Paragraph>
        <Paragraph>
          You may have some animations, interactive items, forms, newsletters,
          stories amp, etc., and also demands high performance for the user.
          Items that will require different hosting services for better
          performance might be an option.
        </Paragraph>
        <Paragraph>
          Perhaps we are talking about more than one language, integrations with
          external services such as hotel reservations, insertion of several
          videos with smart loading (only downloading from YouTube after user
          interaction).
        </Paragraph>
        <Paragraph>
          We can start working with more content, like a blog. However, we are
          still not talking about the existence of a content manager, database,
          search, etc.
        </Paragraph>
        <Paragraph>
          Thus, it requires the need for a minimum knowledge of HTML codes or
          hiring someone who can, if updates are often.
        </Paragraph>
        <Paragraph>
          In many cases, free hosting is still used when we are talking about
          less than 50 thousand monthly views. Or very low cost in more specific
          cases.
        </Paragraph>
      </div>
      <div>
        <div>
          <a
            target="_blank"
            rel="noopener"
            href="https://jujuwebsite.herokuapp.com/"
          >
            <ImageProject
              width="500"
              height="333"
              src="/img/juju.jpg"
              alt="projeto"
            />
          </a>
          <DescriptionProject>
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
          </DescriptionProject>
          <DescriptionProject>
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
          </DescriptionProject>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.brunobarros.online/en"
          >
            <ImageProject
              width="500"
              height="333"
              src="/img/bob.jpg"
              alt="projeto"
            />
          </a>
          <DescriptionProject>
            The website has two languages. When changing the language anywhere,
            the context is not lost, as is the case with some other simpler
            sites.
          </DescriptionProject>
          <DescriptionProject>
            There is integration to save client emails, a formatted print
            version of every article, recency management, automated archiving.
            You need someone to know HTML to be kept on the air. In this case,
            this person is myslef. Feel free to read my articles.
          </DescriptionProject>
        </div>
      </div>
      <LineBreakPj />
      <Estimation>
        Evaluation version in less than <span>a week</span>. Milestones
        delivered at least every two days for follow-up.
      </Estimation>
    </div>
  );
};

export default Intermediate;
