import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Josefin+Sans&family=Montserrat&family=Poiret+One&family=Raleway:wght@200&family=Sacramento&family=Sail&display=swap"
                rel="stylesheet"
            />
            {/* <link
                href="https://fonts.googleapis.com/css2?family=**Josefin+Sans**"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=**Montserrat**"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=**Poiret+One**"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=**Raleway**"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=**Sail**"
                rel="stylesheet"
            /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;