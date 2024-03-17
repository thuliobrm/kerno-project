import React from "react";
import PlayerLocationImg from "@assets/player.png";
import BgYellow from "@assets/bg.png";
import BgYellowDesktop from "@assets/bg-video-desktop.png";
import AllInclusive from "@assets/Frame 41.png";
import CriancaaGratis from "@assets/Frame 42.png";
import EstruturaCompleta from "@assets/Frame 43.png";
import PeNaAreia from "@assets/Frame 44.png";
import DiversaoTodasAsIdades from "@assets/Frame 45.png";
import EmAte10x from "@assets/Frame 46.png";
import BlueWaves from "@assets/blue-waves.png";
import BgConchas from "@assets/conchasVideo.png";
import Image from "next/image";
import "./index.css";

export default function OfferedServices() {
  return (
    <section className="services">
      <h2 className="services-h2-text">
        MOTIVOS NÃO FALTAM PARA PASSAR AS FÉRIAS DE JULHO POR AQUI!
      </h2>

      <div className="bg-conchas-desktop">
        <Image src={BgConchas} alt="bgconchas" />
      </div>

      <div className="player">
        <div className="player-content">
          <div className="player-img">
            <Image
              src={PlayerLocationImg}
              alt="player"
              style={{ width: "350px" }}
            />
          </div>

          <div className="player-video">
            <iframe
              style={{ width: "320px", height: "565px" }}
              src="https://www.youtube.com/embed/2c7rTB4Z1Vs?si=1DhHWPOhadapi6Ig"
            />
          </div>
        </div>

        <div className="bg-yellow">
          <Image src={BgYellow} alt="bg" />
        </div>

        <div className="bg-yellow-desktop">
          <Image src={BgYellowDesktop} alt="bg" />
        </div>
      </div>
      <div className="bluewave-img">
        <Image src={BlueWaves} alt="waves" />
      </div>
      <div className="offered-services-margin"></div>

      <div className="offered-services">
        <Image src={AllInclusive} alt="allinclusive" />
        <Image src={CriancaaGratis} alt="criancagratis" />
        <Image src={EstruturaCompleta} alt="estruturacompleta" />
        <Image src={PeNaAreia} alt="penaareia" />
        <Image src={DiversaoTodasAsIdades} alt="diversaoparatodasidades" />
        <Image src={EmAte10x} alt="emate10x" />
      </div>
    </section>
  );
}
