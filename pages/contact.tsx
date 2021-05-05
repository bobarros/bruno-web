import Head from "next/head";
import BaseLayout from "../src/layouts/BaseLayout";

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

      <section>
        <div>
          <h2>Contact</h2>
          <p> 
            I organize my time in a way that makes it possible to get maximum
            productivity.
          </p>
          <p>
            In a regular day, I read my emails only three times. At the
            beginning of the day (8h~9h), after lunch (13h~14h), and right after
            stopping to work (19h~20h). My time zone is UTC+3.
          </p>
          <p>
            I will answer you in less than 24 hours and at these times before
            mentioned. Thanks for reading this, your attention and for being
            interested in my work..
          </p>
          <p>I wish you an excellent day and all the best.</p>
          <p> Bruno Barros - <a target="_blank" rel="noopener" href="mailto:bruno.barros@ideias.dev">bruno.barros@ideias.dev</a> 
          </p>
        </div>
      </section>
    </BaseLayout>
  );
}
