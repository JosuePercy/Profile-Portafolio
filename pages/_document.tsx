import Document, { Html, Head, Main, NextScript } from 'next/document';
import img from '../public/image/portada-header.png';

const origin = typeof window === "undefined" ? "" : window.location.origin;
console.log('origin ==>', origin);
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
          <meta property="og:image" content={`${origin}/image/viewpage.png`} />
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