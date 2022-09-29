import { ReactNode } from "react";

import s from "./styles.module.scss";

import Container from "components/Container";
// import SectionTitle from "components/UI/SectionTitle";

interface SectionProps {
  children: ReactNode;
  title?: string;
  firstSection?: boolean;
  navlink?: string;
  helpers?: string;
}

function Section({
  children,
  title,
  firstSection,
  navlink,
  helpers,
}: SectionProps) {
  return (
    <Container>
      <section
        id={navlink}
        className={`${s.sectionWrapper} ${firstSection && s.sectionFirst} ${
          helpers ? helpers : false
        }`}
      >
        {/* {title && <SectionTitle>{title}</SectionTitle>} */}
        {children}
      </section>
    </Container>
  );
}

export default Section;
