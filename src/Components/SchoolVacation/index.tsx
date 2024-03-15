import React from "react";
import VacationImages from "@assets/topicos.png";
import VacationImagesDesktop from "@assets/Frame 31.png";
import Image from "next/image";
import "./index.css";

export default function SchoolVacation() {
  return (
    <section className="school-vacation-content">
      <div className="h3-content">
        <h3 className="vacation-text-h3">
          FÉRIAS ESCOLARES COM SABOR DE DIVERSÃO!
        </h3>
      </div>
      <div className="vacation-images">
        <Image src={VacationImages} alt="vacationimage" />
      </div>

      <div className="vacation-images-desktop">
        <Image src={VacationImagesDesktop} alt="vacationimage" />
      </div>
    </section>
  );
}
