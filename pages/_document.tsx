import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  public render() {
    return (
      <Html lang="pt-BR">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
