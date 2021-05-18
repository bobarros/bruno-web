//////////////////////////////////////////////////////////////////////// Next

import Head from "next/head";
import { useRouter } from 'next/router'

//////////////////////////////////////////////////////////////////////// React

import { useState } from "react";

//////////////////////////////////////////////////////////// Local Components

import Cover from "../src/sections/index/Cover/Cover";
import IndexBackground from "../src/sections/index/IndexBackground/IndexBackground";

//////////////////////////////////////////////////////////////////////// Page


export default function Home() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState<undefined | string>(undefined);

  const closeCover = (ev: any) => {
    const hitElement = ev.target as HTMLElement;
    const command = hitElement.getAttribute("aria-label");

    const questionWrap = document.getElementById("questionWrap") as HTMLElement;
    questionWrap.classList.add("disappearBox");

    const classQuestionBox = document.getElementById("questionBox")!.classList;
    setTimeout(() => {
      //If the client is not certain, I will show a message saying what
      //to expect and then closing the cove box
      if (command === "no") {
        const animationTime = 12000;
        setIsClicked("no");
        setTimeout(() => {          
          classQuestionBox.add("rotateAndReduce");  
        }, animationTime);

        setTimeout(() => {
          document.getElementById("backgroundWrap")!.style.left = "0";
        }, animationTime + 700);

        setTimeout(() => {
          document.getElementById("animationLogo")!.style.transform = "scaleY(1)"
        }, animationTime + 1400);

        setTimeout(() => {
          router.push('/bulding-website');
        }, animationTime + 2100);
        //If the client already wants to hire me, I'm just closing the box
        //with some smaller and unanimated message.
      } else {
        const animationTime = 1500;
        setIsClicked("yes");
        setTimeout(() => {
          classQuestionBox.add("rotateAndReduce");
        }, animationTime);      

        setTimeout(() => {
          document.getElementById("backgroundWrap")!.style.left = "0";
        }, animationTime + 700);

        setTimeout(() => {
          document.getElementById("animationLogo")!.style.transform = "scaleY(1)"
        }, animationTime + 1400);

        setTimeout(() => {
          router.push('/home');
        }, animationTime + 2100);
      }
      questionWrap.style.display = "none";
    }, 1000);
  };

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
      <Cover isClicked={isClicked} closeCover={closeCover} />   
      <IndexBackground/>
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
