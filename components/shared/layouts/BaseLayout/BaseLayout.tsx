import Head from "next/head";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";

interface LayoutProps {
  title?: string;
  description?: string;
}

const BaseLayout: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    LayoutProps
> = ({ children, title = "Fr0ntierX", description = "Fr0ntierX" }) => {
  return (
    <div className="bg-primary w-full">
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <meta name="description" content={description} />
      </Head>
      <Nav />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
