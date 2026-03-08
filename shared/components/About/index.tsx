import Image from "next/image";
import "./index.scss";
import { links } from "@/shared/constants";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__left">
        <div className="about__images-left">
          <Image
            src="/images/about1.webp"
            alt="About Image 1"
            width={300}
            height={200}
          />
          <Image
            src="/images/about2.webp"
            alt="About Image 2"
            width={300}
            height={200}
          />
        </div>

        <div className="about__images-right">
          <Image
            src="/images/about3.webp"
            alt="About Image 3"
            width={300}
            height={200}
          />
        </div>
      </div>

      <div className="about__right">
        <h2>О клубе</h2>
        <p>
          Бойцовский клуб «ЦЕПЬ» — это площадка для тех, кто хочет испытать
          себя, получить реальный бойцовский опыт и стать частью закрытого
          сообщества единомышленников. Мы создаём честные и прозрачные условия
          для проведения поединков, где каждый участник знает, за что он выходит
          на ринг и какие возможности открываются перед ним после боя.
          <br />
          <br />
          Наш клуб открыт как для новичков, так и для опытных бойцов — уровень
          подготовки не является ограничением, поскольку подбор соперников
          осуществляется индивидуально, с учётом физических данных и навыков.
          Все бои проходят под контролем рефери и медицинского персонала, что
          обеспечивает безопасность участников и соблюдение правил.
          <br />
          <br />
          Для зрителей бойцовский клуб — это не просто шоу, а живые эмоции,
          настоящая атмосфера и возможность стать частью происходящего. Мы
          развиваем сообщество, в котором ценятся характер, честная конкуренция
          и уважение к сопернику. Становясь частью нашего проекта, вы получаете
          не только участие в мероприятиях, но и доступ к новым возможностям —
          от денежных боёв и закрытых событий до клубного членства с особыми
          привилегиями.
        </p>
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
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
