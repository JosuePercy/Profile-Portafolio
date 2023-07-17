import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Saira:wght@500&display=swap"
            rel="stylesheet"
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Saira:wght@500&display=swap'
            rel="stylesheet"
          />
          <meta property="og:title" content="Portafolio" />
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/image/viewpage.png`} />
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
