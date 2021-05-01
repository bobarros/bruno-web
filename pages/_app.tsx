import "styles/index/main.scss";

function MyApp(props:any) {  
  const { Component, pageProps } = props;
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
