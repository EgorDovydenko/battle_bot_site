import Image from "next/image";
import "./index.scss";
import { links } from "@/shared/constants";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__left">
        <h2>ВАШ БОЙЦОВСКИЙ КЛУБ</h2>

        <div className="banner__buttons">
          <a href={links.telegram} className="banner__button">
            в бой
          </a>
          <a href="#about" className="banner__button banner__button--secondary">
            подробнее
          </a>
        </div>
      </div>

      <Image
        className="banner__image"
        src="/images/banner.png"
        alt="Fight Club Banner"
        width={600}
        height={330}
      />
    </div>
  );
};
