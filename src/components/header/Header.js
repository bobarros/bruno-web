import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <meta property="og:locale" content="pt_BR"/>
      <meta property="og:site_name" content="seushabitos.com.br"/>
      <meta name="robots" content="index, follow"/>
      <link rel="icon" type="image/png" href="/img/favicon.png" sizes="128x128"></link>
    </Head>
  );
};

export default Header;
