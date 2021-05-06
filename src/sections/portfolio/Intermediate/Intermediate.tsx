//////////////////////////////////////////////////////////////////////// Next

import Image from "next/image";

//////////////////////////////////////////////////////////////////////// React

import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////////////// Styled

import {
  Paragraph,
  TitleSub,
  ImageProject,
  DescriptionProject,
  LineBreakPj,
  Estimation,
  ImgAchor
} from "../../shared/StyledShared";

/////////////////////////////////////////////////////////////////// Component

const Intermediate = () => {

  const [load, setLoad] = useState("notReady");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    ////any calc to set the height and width that I want.
    if (width === 0 || height === 0) {
      const element = document.getElementById("interPrep") as HTMLDivElement;
      setHeight(element.offsetHeight);
      setWidth(element.offsetWidth); 
      setLoad("again" + Math.random());
    } else {
      setLoad("ready")
    }
  }, [load]);


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
          <ImgAchor
            target="_blank"
            rel="noopener"
            href="https://jujuwebsite.herokuapp.com/"
          >
            Smartphone and laptop
            {!(load === "ready") && (
              <img
                id="interPrep"
                src="/svg/project.svg"
                alt="Smartphone and laptop showing an website of some tourism business"
              />
            )}
            {load === "ready" && (
              <ImageProject>
                <Image
                  width={width}
                  height={height}
                  src="/img/juju.jpg"
                  alt="Smartphone and laptop showing an website of some tourism business"
                />
              </ImageProject>
            )}
          </ImgAchor>
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
          <ImgAchor
            target="_blank"
            rel="noopener"
            href="https://www.brunobarros.online/en"
          >
            brunobarros.online
            {load && (
              <ImageProject>
                <Image
                  width={width}
                  height={height}
                  src="/img/bob.jpg"
                  alt="Smartphone and laptop showing my personal blog at brunobarros.online"
                />
              </ImageProject>
            )}
          </ImgAchor>
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
