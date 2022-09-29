/* eslint-disable @next/next/no-html-link-for-pages */
import Container from "components/Container";
import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";

import menuLinks from "json/menuLinks.json";

export default function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);
  const [onTop, setOnTop] = useState(false);

  useEffect(() => {
    if (scrollTop > 80) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
    const onScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className={`${s.navbarWrapper}`}>
      <div className={`${s.navbarSection} ${onTop ? s.navbarScroll : ""} view`}>
        <Container>
          <div className={s.navbarSectionContent}>
            {onTop ? (
              <img src="/logo-primary.png" alt="Logotipo Dentista do Bairro" />
            ) : (
              <img src="/logo-white.png" alt="Logotipo Dentista do Bairro" />
            )}
            <div className={s.navbarMenuLinks}>
              {menuLinks.map((menuLink) =>
                menuLink.info ? (
                  <div
                    className={`${s.navbarMenuLinksInfo} fc-w`}
                    key={`info-${menuLink.id}`}
                  >
                    <span className="body-ib">{menuLink.text}</span>
                    <img src="/assets/svg/phone.svg" alt="Ícone de telefone" />
                  </div>
                ) : (
                  <a
                    className="body-ib"
                    key={`link-${menuLink.id}`}
                    href={menuLink.link}
                  >
                    {menuLink.text}
                  </a>
                )
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
