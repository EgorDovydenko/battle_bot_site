import { anchors, links } from "@/shared/constants";
import "./index.scss";

export const Header = () => {
  return (
    <header className="header">
      {/* <a href={`#about`} className="header__link">
        {anchors.about}
      </a> */}
      <a href={`#faq`} className="header__link">
        {anchors.faq}
      </a>
      <a href={links.fightersRequestForm} className="header__link">
        Стать бойцом
      </a>
      <a href={links.viewersTicketsForm} className="header__link">
        Стать зрителем
      </a>
      <a href={links.fightersTrainingForm} className="header__link">
        Тренировочные бои
      </a>
      {/* <a
        className="header__link"
        href={links.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        {anchors.contact}
      </a> */}
    </header>
  );
};
