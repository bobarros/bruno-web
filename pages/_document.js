import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body className="night">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
