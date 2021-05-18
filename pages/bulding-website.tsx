//////////////////////////////////////////////////////////////////////// Next

import Head from "next/head";

//////////////////////////////////////////////////////////////////////// React

import { useEffect, useState } from "react";

//////////////////////////////////////////////////////////// Local Components

import SimpleLayout from "../src/layouts/SimpleLayout";
import Intro from "../src/sections/simple/Intro/Intro";
import Chat from "components/simple/chat/Chat";
import Progress from "components/simple/progress/Progress";
import IndexBackground from "../src/sections/index/IndexBackground/IndexBackground";

//////////////////////////////////////////////////////////////////////// Page

export default function Home() {
  const [state, setState] = useState<string[]>([]);
  const qtdOfComponents = 4;

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("backgroundWrap")!.style.top = "-100vh";
    }, 1400);
  }, []);

  useEffect(() => {
    const measureProgress = ((state.length / qtdOfComponents) * 100) / 2;

    document.getElementById(
      "progressBar"
    )!.style.width = `calc(${measureProgress}% - 10px`;
  }, [state]);

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          />
        </noscript>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <meta
          name="description"
          content="What you need to know about Bruno Barros - WebDesigner"
        />
        <meta
          property="og:title"
          content="brunobarros.dev - Giving life to online interfaces!"
        />
        <meta
          property="og:description"
          content="What you need to know about Bruno Barros - WebDesigner"
        />
        <meta property="og:url" content="https://brunobarros.dev/" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image" content="/img/favicon.png" itemProp="image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@brunobarros.dev" />
        <meta
          name="twitter:title"
          content="brunobarros.dev - Giving life to online interfaces!"
        />
        <meta
          name="twitter:description"
          content="What you need to know about Bruno Barros - WebDesigner"
        />
        <meta name="twitter:image" content="/img/favicon.png" />

        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="128x128"
        />

        <title>Bruno Barros - Giving life to online interfaces!</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredJSON }}
        />
      </Head>
      <IndexBackground show />
      <SimpleLayout state={state} setState={setState}>
        <Intro state={state} setState={setState} />
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <p>Too bad</p>
        <Chat state={state} setState={setState} />
        <Progress />
      </SimpleLayout>
    </>
  );
}

const structuredJSON = `
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "mainEntityOfPage":{
    "@type":"WebPage",
    "@id":"https://brunobarros.dev/"
  },
    "image": {
    "@type": "ImageObject",
    "url": "https://brunobarros.dev/img/favicon.png",
    "height": 128,
    "width": 128,
    "author": {
    "@type": "Organization",
    "name": "brunobarros.dev"
  },
    "publisher": {
    "@type": "Organization",
    "name": "brunobarros.dev",
    "logo": {
    "@type": "ImageObject",
    "url": "https://brunobarros.dev/img/favicon.png",
    "width": 128,
    "height": 128
  },
  }
    "headline": "brunobarros.dev - Giving life to online interfaces!",
    "description": "What you need to know about Bruno Barros - WebDesigner"
  }
`;
