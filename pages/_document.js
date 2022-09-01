import Document, { Head, Html, Main, NextScript } from "next/document";

class Doc extends Document {
  static async getInitialProps(ctx) {
    const initProps = await Document.getInitialProps(ctx);
    return { ...initProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen font-manrope overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
