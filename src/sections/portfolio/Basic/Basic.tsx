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

const Basic = () => {
  return (
    <div>
      <TitleSub>Basic project</TitleSub>
      <div>
        <Paragraph>
          Most websites should fall into this category. They are those with few
          pages, only one language, no animations, etc.
        </Paragraph>
        <Paragraph>
          With a very specific objective, it does not require much work and
          maintenance is almost nonexistent.
        </Paragraph>
        <Paragraph>
          They are excellent for lawyers, doctors, investment advisers, public
          figures, architects, psychologists, nutritionists, or any professional
          who works alone, but does not want to share a lot of content, like
          articles.
        </Paragraph>
        <Paragraph>
          Even small businesses, such as law firms, barbershops, consultancy
          firms, etc., will fit in here.
        </Paragraph>
        <Paragraph>
          This type of website uses free hosting or less than US$5 a month.
          Already including security certificates (eliminating unsafe website
          warnings, still common on many).
        </Paragraph>
        <Paragraph>
          Remember, free does not mean low quality. This site is hosted on a
          free version of Vercel.
        </Paragraph>
      </div>
      <div>
        <div>
          <a
            target="_blank"
            rel="noopener"
            href="https://next-public-six.vercel.app/"
          >
            <ImageProject
              width="500"
              height="333"
              src="/img/arch.jpg"
              alt="projeto"
            />
          </a>
          <DescriptionProject>
            The project has only one page, but it could have others, going
            deeper into some projects. Your goal is to be a business card.
          </DescriptionProject>
          <DescriptionProject>
            There is nothing sophisticated, yet it is an above-average site.
          </DescriptionProject>
        </div>
      </div>
      <LineBreakPj />

      <Estimation>
        After defining the project, evaluation version in{" "}
        <span>two or three days</span>.
      </Estimation>
    </div>
  );
};

export default Basic;