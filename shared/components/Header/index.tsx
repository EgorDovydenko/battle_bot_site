import { anchors, links } from "@/shared/constants";
import "./index.scss";

export const Header = () => {
  return (
    <header className="header">
      <a href={`#about`} className="header__link">
        {anchors.about}
      </a>
      <a href={`#faq`} className="header__link">
        {anchors.faq}
      </a>
      <a
        className="header__link"
        href={links.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        {anchors.contact}
      </a>
    </header>
  );
};
