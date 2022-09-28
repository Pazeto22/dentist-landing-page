import Head from "next/head";
// Wrappers
import Container from "components/Container";

import s from "./styles.module.scss";

// Seções da página

function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="ColdPixel" key="title" />
        <meta
          name="description"
          content="Soluções WEB sob medida para o seu negócio. Lojas, landing pages e sistemas diversos."
        />
        <title>ColdPixel | Soluções Web</title>
      </Head>
      <div className={s.container}>
        <Container>
          <div className={s.subContainer}>
            <img className="u-none" src="logo/logo_white.png" alt="" />
            {/* <p className="title-h3 fc-w u-none">Site em construção</p> */}
            <p className="body-t fc-w u-none  ">
              Solicite um orçamento através de{" "}
              <span className="fw-b">contato@coldpixel.com.br</span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
