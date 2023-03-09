import type { AppProps } from "next/app";
import "../styles/main.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Etteplan Weather Radar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <h1>Etteplan Weather Radar</h1>
      </header>
      <Component {...pageProps} />
    </>
  );
}
