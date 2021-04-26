import Head from "next/head";
import IndexLayout from "layouts/IndexLayout";

import How from "html/index/How";
import What from "html/index/What";
import IndexHeader from "html/index/IndexHeader";

export default function Home() {
  const structuredJSON = `
  {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "mainEntityOfPage":{
  "@type":"WebPage",
  "@id":"https://brunobarros.dev/en"
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
  }
  },
  "headline": "brunobarros.dev - Giving life to online interfaces!",
  "description": "What you need to know about Bruno Barros - WebDesigner"
}
`;

  return (
    <IndexLayout>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <meta name="robots" content="index, follow" />
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
        <meta property="og:url" content={`https://brunobarros.dev/`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image"
          itemProp="image"
          content={`/img/favicon.png`}
        />
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
        ></link>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredJSON }}
        />

        <title>Bruno Barros - Giving life to online interfaces!</title>
      </Head>
      <IndexHeader />
      <What />
      <How />
    </IndexLayout>
  );
}