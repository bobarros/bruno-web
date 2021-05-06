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

const Advanced = () => {


  return (
    <div>
      <TitleSub>Premium Project</TitleSub>
      <div>
        <Paragraph>
          Everything that is more sophisticated and does not fit into previous
          projects.
        </Paragraph>
        <Paragraph>
          In addition to what can be seen in previous projects, these sites are
          integrated with other services and might seek to aggressively dominate
          keywords in search engines.
        </Paragraph>
        <Paragraph>
          They offer content in an organized way to the user, but with high
          speed. Panels for content management with different profiles and easy
          to use.
        </Paragraph>
        <Paragraph>
          They are often the best option for an already consolidated business
          that needs to improve its digital identity.
        </Paragraph>
        <Paragraph>
          They already have profiles responsible for generating the content,
          usually integrated with other digital properties, such as Instagram,
          Facebook, etc.
        </Paragraph>

        <Paragraph>
          Or, businesses that are starting, but already know where they want to
          go and the difficulties they need to face. The investment already
          starts high.
        </Paragraph>
        <Paragraph>
          The accommodation will hardly be free, even with low access. However,
          a good development can zero or keep the cost very low. As is the case
          with the examples below, which have zero cost.
        </Paragraph>
      </div>
      <div>
        <div>
          <a
            target="_blank"
            rel="noopener"
            href="https://neymar-new.ideias.dev/en"
          >
            <ImageProject
              width="500"
              height="333"
              src="/img/neymar.jpg"
              alt="projeto"
            />
          </a>
          <DescriptionProject>
            This is not Neymar's official website. It was an exercise I did to
            learn some new technologies. All of this on a lightweight website.
          </DescriptionProject>
          <DescriptionProject>
            It is not for sale, nor commercial use. More sophisticated sites are
            exemplified here.
          </DescriptionProject>
          <DescriptionProject>
            There is an efficient search engine, many interaction resources,
            transition animation between content manager pages with different
            profiles.
          </DescriptionProject>
          <DescriptionProject>
            It also has sophisticated language management, an in-depth
            interaction structure with search engines, as well as resources
            spread across different servers: content, images, and codes have
            different and redundant hosting services.
          </DescriptionProject>
          <DescriptionProject>
            All of this on a very fast website.
          </DescriptionProject>
        </div>
      </div>
      <LineBreakPj />
      <div>
        <div>
          <a
            target="_blank"
            rel="noopener"
            href="https://circus-berlin-bobarros.vercel.app/"
          >
            <ImageProject
              width="500"
              height="333"
              src="/img/circus.jpg"
              alt="projeto"
            />
          </a>
          <DescriptionProject>
            This example shows that a complex website may have a few pages. Like
            the previous one, it was done as an exercise on the official
            website.
          </DescriptionProject>
          <DescriptionProject>
            Unlike the previous example, the design was just improved and not
            rebuilt. However, only this page is much more complex than
            multi-page sites.
          </DescriptionProject>
          <DescriptionProject>
            Sites of this type are rare, as they are difficult to make with
            tools like WordPress, although this is the official version
            platform. Wich brings some inescapable problems.
          </DescriptionProject>
          <DescriptionProject>Tudo isso em um site leve.</DescriptionProject>
        </div>
      </div>
      <LineBreakPj />

      <Estimation>
        Delivery estimation varies a lot from one project to another, but
        milestones will be defined with the client.
      </Estimation>
    </div>
  );
};

export default Advanced;