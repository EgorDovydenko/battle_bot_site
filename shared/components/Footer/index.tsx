import { links } from "@/shared/constants";
import "./index.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__contacts">
        <h3>Наши контакты</h3>

        <a href="tel:+375447835965">+375 (44) 783 59 65</a>
        <a href={links.telegramSupport}>@chain_club_support</a>

        <div className="footer__links footer__links--mobile">
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
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={30}
              height={30}
            />
          </a>
        </div>

        <p>© 2026 Бойцовский клуб «ЦЕПЬ». Все права защищены.</p>
      </div>

      <div className="footer__links footer__links--desktop">
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
