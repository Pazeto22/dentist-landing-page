import Head from "next/head";

import Section from "components/Section";

// Componentes
import Banner from "components/Pages/Home/Banner";

function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Dentista" key="title" />
        <meta
          name="description"
          content="Landing page desenvolvida com React, Next e Typescript. Hospedado na Vercel."
        />
        <title>Dentista | Landing Page</title>
      </Head>
      <Banner />
    </>
  );
}

export default Home;
