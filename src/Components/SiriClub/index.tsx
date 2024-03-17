import Image from "next/image";
import React from "react";
import BgSiri from "@assets/siriPraia.png";
import sunCloud from "@assets/sunCloud.png";
import sunCloudDesktop from "@assets/sunCloudDesktop.png";
import BeachAndSiri from "@assets/Component 1.png";
import ReserveBtn from "@assets/cta.png";
import "./index.css";
import SVGComponent from "../IconSvg";
import Link from "next/link";

export default function SiriClub() {
  const mockTextContent = [
    "Diversos jogos, oficinas e atividades ao ar livre para crianças de 4 a 12 anos.",
    "Colaboradores preparados para cuidar e garantir a diversão da criançada.",
    "Os tios e tias também acompanham as crianças no lanchinho da manhã, almoço e lanchinho da tarde.",
    "Estrutura pensada na diversão e segurança dos pequenos",
  ];
  return (
    <section className="siriclub-content">
      <div className="bg-siri">
        <Image className="sun-cloud" src={sunCloud} alt="sundloud" />
        <Image
          className="sun-cloud-desktop"
          src={sunCloudDesktop}
          alt="suncloudDesktop"
        />

        <div className="siriclub-context">
          <h2 className="siriclub-text-h2">CLUBINHO DO SIRI:</h2>
          <h3 className="siriclub-text-h3">
            O CLUBE INFANTIL QUE A
            CRIANÇADA AMA!
          </h3>

          <div className="siri-text-content">
            {mockTextContent.map((text) => (
              <div className="siri" key={text}>
                <div>
                  <SVGComponent />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="siri-text-content-desktop">
            <div className="left-siri-content">
              {mockTextContent.slice(0, 2).map((text) => (
                <div className="leftSiri" key={text}>
                  <div>
                    <SVGComponent />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="right-siri-content">
              {mockTextContent.slice(2).map((text) => (
                <div className="rightSiri" key={text}>
                  <div>
                    <SVGComponent />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="reserve-btn">
        <Image className="siri-mobile" src={BgSiri} alt="siri" />
        <Image
          className="beach-siri-desktop"
          src={BeachAndSiri}
          alt="beachandsiri"
        />
        <div className="reserve-btn-img ">
          <Link
            href="https://book.omnibees.com/hotelresults?c=5173&q=9098&hotel_folder=&NRooms=1&CheckIn=03072024&CheckOut=07072024&ad=2&ch=0&ag=1&child_age_input=&group_code=&Code=&loyalty_code=&lang=pt-BR&currencyId=16"
          >
            <Image 
              src={ReserveBtn} 
              alt="reserve" 
              style={{ width: '372px', height: '70px'}}/>
          </Link>
        </div>
      </div>
    </section>
  );
}
