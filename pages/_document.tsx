import Document, { Html, Head, Main, NextScript } from 'next/document';
import img from '../public/image/portada-header.png';
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta property="./../public/image/viewpage.png" content="https://profile-portafolio.vercel.app/" />
          <link
            href="https://fonts.googleapis.com/css2?family=Saira:wght@500&display=swap"
            rel="stylesheet"
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Saira:wght@500&display=swap'
            rel="stylesheet"
          />
          <meta property="og:image" content='../image/portada-header.png' />
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