import Head from "next/head";
import bgImage from "public/ogp.png";
import { useTranslation } from "react-i18next";

type MetaTagProps = {
  title?: string;
  description?: string;
  site_name?: string;
  image?: string;
  children?: React.ReactNode;
};

export default function MetaTags(props: MetaTagProps | undefined) {
  const { t } = useTranslation();
  const defaultContents = {
    title: `${t("constants.appName")}`,
    description: `${t("AN_INCLUSIVE_AND_TRANSPARENT_TOKEN_LAUNCHPAD")}`.replace(
      /\n/g,
      "",
    ),
    site_name: `${t("constants.appName")}`,
    image: undefined,
    children: undefined,
  };
  const contents = !props ? defaultContents : { ...defaultContents, ...props };

  return (
    <Head>
      <title>{contents.title}</title>
      <meta name="robots" content="noindex" />
      <meta name="description" content={contents.description} />
      <meta property="og:title" content={contents.title} />
      <meta property="og:description" content={contents.description} />
      <meta property="og:site_name" content={contents.site_name} />
      <meta
        property="og:image"
        content={contents.image ? contents.image : `${bgImage.src}`}
      />
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="@" /> */}
      <meta name="twitter:title" content={contents.title} />
      <meta name="twitter:description" content={contents.description} />
      <meta
        name="twitter:image"
        content={contents.image ? contents.image : `${bgImage.src}`}
      />
      <link rel="icon" href="/favicon.ico" />
      {!!contents.children && contents.children}
    </Head>
  );
}
