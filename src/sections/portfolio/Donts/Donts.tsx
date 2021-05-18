  /////////////////////////////////////////////////////////// Styled Components

import {
  TextBlock,
  Paragraph,
  TitleSub 
} from "../../shared/StyledShared";

  /////////////////////////////////////////////////////////////////// Component

const Donts = () => {
    return (
    <TextBlock id="donts">
      <TitleSub>What I don't do</TitleSub>
      <Paragraph>
        To save your time, it's important to know projects that I don't work.
      </Paragraph>
      <Paragraph>
        I'm not a software developer of all sorts. I will not build complex
        services for your site, like crypto applications.
      </Paragraph>
      <Paragraph>
        Another good example would be a website with some small business managing
        solution.
      </Paragraph>
      <Paragraph>
        If your project contains logged areas, e-commerce, etc, I can build the
        way that you deliver the services and make the integration. I have no
        interest in building some custom advanced system.
      </Paragraph>
      <Paragraph>
        I also don't use WordPress, but I can use the content that is already hosted
        there, which I will access via API if there is already a current
        website.
      </Paragraph>
    </TextBlock>
  );
};

export default Donts;
