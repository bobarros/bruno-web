
//////////////////////////////////////////////////////////////////////// Next

import Head from "next/head";
import Router from 'next/router'

//////////////////////////////////////////////////////////// Local Components

import BaseLayout from "../src/layouts/BaseLayout";
import Intro from "../src/sections/portfolio/Intro/Intro";
import Donts from "../src/sections/portfolio/Donts/Donts";
import Basic from "../src/sections/portfolio/Basic/Basic";
import Intermediate from "../src/sections/portfolio/Intermediate/Intermediate";
import Advanced from "../src/sections/portfolio/Advanced/Advanced";

/////////////////////////////////////////////////////////////////// Component

export default function Portfolio() {

  return (
    <BaseLayout>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" />
        </noscript>
        <meta     httpEquiv="Content-Type"      content="text/html; charset=UTF-8" />
        <meta     name="viewport"               content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta     httpEquiv="X-UA-Compatible"   content="ie=edge" />
        <meta     property="og:locale"          content="en_US" />
        <meta     property="og:site_name"       content="brunobarros.dev" />
        <meta     name="description"            content="Bruno's Portfolio" />
        <meta     property="og:title"           content="Bruno's Portfolio" />
        <meta     property="og:description"     content="Bruno's Portfolio" />
        <meta     property="og:url"             content="https://brunobarros.dev/portfolio" />
        <meta     property="og:image:type"      content="image/jpeg" />
        <meta     property="og:image"           content="/img/favicon.png" itemProp="image" />
        <meta     property="og:image:width"     content="1200" />
        <meta     property="og:image:height"    content="630" />
        <meta     property="og:type"            content="website" />
        <meta     property="og:site_name"       content="brunobarros.dev" />
        <meta     name="twitter:card"           content="summary" />
        <meta     name="twitter:site"           content="@brunobarros.dev" />
        <meta     name="twitter:title"          content="Bruno's Portfolio" />
        <meta     name="twitter:description"    content="Bruno's Portfolio" />
        <meta     name="twitter:image"          content="/img/favicon.png" />

        <link     rel="icon"                    type="image/png" href="/img/favicon.png" sizes="128x128"/>

        <title>Bruno's Portfolio</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredJSON }} />
      </Head>
      <Intro />
      <section id="projetos" className="wait">
        <div className="blocoTexto">
          <h1 className="pageName">Portfolio</h1>
          <p className="paragrafo">
          Here are some examples from projects that I own. You may click on elements to be redirected to the published version.
          </p>
          <div className="projetos">
            <Donts />
            <Basic />
            <Intermediate />
            <Advanced />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

/////////////////////////////////////////////////////////////////// Components

const structuredJSON = `
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "mainEntityOfPage":{
    "@type":"WebPage",
    "@id":"https://www.brunobarros.dev/portfolio"
    },
    "image": {
    "@type": "ImageObject",
    "url": "https://www.brunobarros.dev/img/favicon.png",
    "height": 128,
    "width": 128},
    "author": {
    "@type": "Organization",
    "name": "brunobarros.dev"
    },
    "publisher": {
    "@type": "Organization",
    "name": "brunobarros.dev",
    "logo": {
    "@type": "ImageObject",
    "url": "https://www.brunobarros.dev/img/favicon.png",
    "width": 128,
    "height": 128
    }
    },
    "headline": "Bruno's Portfolio",
    "description": "Bruno's Portfolio'"
  }
`;
