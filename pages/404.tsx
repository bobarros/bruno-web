//////////////////////////////////////////////////////////////////////// Next

import Head from "next/head";

//////////////////////////////////////////////////////////// Third Parties

import styled from "styled-components";

//////////////////////////////////////////////////////////// Local Components

import BaseLayout from "../src/layouts/BaseLayout";

//////////////////////////////////////////////////////////// Styled Component

const Error = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 4rem;
  line-height: 5.5rem;
`;

//////////////////////////////////////////////////////////////////////// Page

export default function ErrorPage() {
  return (
    <BaseLayout>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="brunobarros.dev" />
      <link rel="icon" type="image/png" href="/img/favicon.png" sizes="128x128" />
      <title>404 Error</title>
    </Head>
    <Error>
      <p>404 - Not Found!</p>
    </Error>
  </BaseLayout>

  );
}




