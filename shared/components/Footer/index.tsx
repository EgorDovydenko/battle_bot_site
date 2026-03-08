import { links } from "@/shared/constants";
import "./index.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Бойцовский клуб ЦЕПЬ. Все права защищены.</p>

      <div className="footer__links">
        <a href={links.telegram} target="_blank" rel="noopener noreferrer">
          <Image src="/icons/tg.svg" alt="Telegram" width={30} height={30} />
        </a>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/insta.svg"
            alt="Instagram"
            width={30}
            height={30}
          />
        </a>
        <a href={links.tiktok} target="_blank" rel="noopener noreferrer">
          <Image src="/icons/tiktok.svg" alt="TikTok" width={30} height={30} />
        </a>
      </div>
    </footer>
  );
};
