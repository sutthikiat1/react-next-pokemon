import React from "react";
import Head from "next/head";

interface SetTagMetaProps {
  titleWeb: string;
  descriptionWeb: string;
  urlShare: string;
  keywords: string;
  imageShare: string;
  author: string;
  siteName: string;
}
const SetTagMeta = (props: SetTagMetaProps) => {
  return (
    <Head>
      <meta name="theme-color" content="#eb362d" />
      <meta name="google" content="notranslate" />
      <title>{props.titleWeb}</title>
      <meta name="description" content={props.descriptionWeb} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />

      <meta property="og:site_name" content={props.siteName} />
      <meta property="og:title" content={props.titleWeb} />
      <meta property="og:url" content={props.urlShare} />
      <meta property="og:image" content={props.imageShare} />
      <meta property="og:description" content={props.descriptionWeb} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:title" content={props.titleWeb} />
      <meta name="twitter:description" content={props.descriptionWeb} />
      <meta name="twitter:image" content={props.imageShare} />
      <meta name="twitter:card" content="summary_large_image" />

      <link
        rel="icon"
        type="image/png"
        href="/image/logo/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/image/logo/favicon-32x32.png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/image/logo/pokemon_logo.png"
      />
      <link
        rel="mask-icon"
        href="/image/logo/pokemon_logo.png"
        color="#002240"
      />
      <link rel="shortcut icon" href="/image/logo/pokemon_logo.png" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SetTagMeta;
