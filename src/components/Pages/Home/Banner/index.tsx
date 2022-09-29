import s from "./styles.module.scss";

import Divider from "../../../../../public/assets/pages/home/svg/banner-divider.svg";

function Banner() {
  return (
    <div className={s.bannerWrapper}>
      <h1 className="title-banner fc-w u-none">Conheça a Dra. Ana</h1>
      <Divider />
    </div>
  );
}

export default Banner;
