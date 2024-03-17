import React from "react";
import "./index.css";
import Image from "next/image";
import OrangeWaves from "@assets/rodape.png";
import SocialsDesktop from "@assets/SocialsDesktop.png";
import LogoAmarante from "@assets/logoSalinas.png";
import Amarante from "@assets/amarante.png";
import Socials from "@assets/social.png";
import Link from "next/link";

export default function Footer() {
  const mockTextContent = [
    "*Criança de 0 a 12 anos de idade, hospedada com dois adultos pagantes na mesma acomodação, conforme capacidade da categoria. A criança deverá ter até 12 anos de idade no momento da hospedagem.",
    "**Cancelamento grátis até 30 dias antes do check-in. Em caso de cancelamento após este prazo, será cobrada uma multa no valor correspondente a primeira diária. Em caso de no show, será cobrado o valor total da reserva.",
    "Valor exibido é referente ao apartamento Standard Duplo já calculado o desconto de 5% do programa Tô de Volta, disponível após login no processo de compra.",
    "No ato da reserva será cobrado do seu cartão de crédito o valor total da hospedagem podendo ser dividido em até 10x.",
    "Você pode encontrar mínimo de noites e preços diferentes em alguns períodos.",
  ];
  return (
    <section className="footer-content">
      <div className="wave-img">
        <Image src={OrangeWaves} alt="waves" />
      </div>

      <div className="bg-container">
        <div className="logo-btn-socials">
          <div className="logo-amarante-content">
            <Image src={LogoAmarante} alt="salinasamarante" />
          </div>

          <div className="btn-other-periods">
            <Link
              target="_blank"
              href="https://www.salinas.com.br/pt/maragogi/promocoes"
            >
              {" "}
              <button>VEJA OUTROS PERIODOS</button>
            </Link>
          </div>

          <div className="socials">
            <Image src={Socials} alt="socials" />
          </div>
        </div>

        <div className="hr">
          <div className="line"></div>
        </div>

        <div className="footer-context-p">
          {mockTextContent.map((text) => (
            <div className="texts" key={text}>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="hr">
          <div className="line"></div>
        </div>

        <div className="privacy-policy-content">
          <h4 className="privacy-policy">Politica de privacidade </h4>
          <p className="copyright">
            Copyright 2023 © Grupo Amarante. Todos os direitos
            reservados.
          </p>
        </div>
        <div className="amarante">
          <Image src={Amarante} alt="amarante" />
        </div>
      </div>
    </section>
  );
}
