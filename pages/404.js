import Head from "next/head";
import BaseLayout from "layouts/BaseLayout";

export default function ErrorPage() {
  return (
    <BaseLayout>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="brunobarros.dev" />

      <link
        rel="icon"
        type="image/png"
        href="/img/favicon.png"
        sizes="128x128"
      ></link>

      <title>404 Error</title>
    </Head>
    <div className="error">
      <p>
      404 - Not Found!
      </p>
    </div>
  </BaseLayout>

  );
}




