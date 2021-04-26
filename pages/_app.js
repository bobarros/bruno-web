import "styles/index/main.scss";
import TagManager from "react-gtm-module";

function MyApp(props) {
  const tagManagerArgs = {
    gtmId: "GTM-W9N54M7",
  };

  const { Component, pageProps } = props;
  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
