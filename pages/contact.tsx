//////////////////////////////////////////////////////////////////////// Next

import Head from "next/head";

///////////////////////////////////////////////////////////// Local Component

import BaseLayout from "../src/layouts/BaseLayout";

/////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  TextBlock,
  TitleHead,
  Paragraph
} from '../src/sections/contact/StyledContact';


//////////////////////////////////////////////////////////////////////// Page

export default function Contact() {
  return (
    <BaseLayout>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="128x128"
        />
        <title>Contact - Bruno Barros</title>
      </Head>

      <Wrap>
        <TextBlock>
          <TitleHead>Contact</TitleHead>
          <Paragraph> 
            I organize my time in a way that makes it possible to get maximum
            productivity.
          </Paragraph>
          <Paragraph>
            In a regular day, I read my emails only three times. At the
            beginning of the day (8h~9h), after lunch (13h~14h), and right after
            stopping to work (19h~20h). My time zone is UTC+3.
          </Paragraph>
          <Paragraph>
            I will answer you in less than 24 hours and at these times before
            mentioned. Thanks for reading this, your attention and for being
            interested in my work..
          </Paragraph>
          <Paragraph>I wish you an excellent day and all the best.</Paragraph>
          <Paragraph> Bruno Barros - <a target="_blank" rel="noopener" href="mailto:bruno.barros@ideias.dev">bruno.barros@ideias.dev</a> 
          </Paragraph>
        </TextBlock>
      </Wrap>
    </BaseLayout>
  );
}
