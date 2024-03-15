"use client";
import React, { useState } from "react";
import "./index.css";
import Reservation from "../Reservation";
import BgConchas from '@assets/bgConchasCalendar.png'
import Image from "next/image";

export default function Calendar() {
  const [method, setMethod] = useState("calendar");
  const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

  const rendDays = () => {
    const days = [];

    let firstDay = 1;

    for (let i = 1; i <= 31; i++) {
      days.push(
        <div key={i} className="day">
          {i}
        </div>
      );

      firstDay++;
      if (firstDay > 7) {
        firstDay = 1;
      }
    }

    return days;
  };
  return (
    <section className="calendar-section">
      <h2 className="calendar-section-vacation-text">
         FÉRIAS DE JULHO NO SALINAS MARAGOGI <br />É DIVERSÃO GARANTIDA 
      </h2>

      <div className="calendar-section-container-text">
        <p className="calendar-section-phrase-text">
          Férias de Julho é sinônimo de diversão em família! No Salinas
          Maragogi,{" "}
          <span>as crianças são superestrelas com estadia grátis*</span>,
          Clubinho Infantil repleto de atividades, buffet especialmente pensado
          para os pequenos paladares e muito mais!
        </p>
      </div>

      <h3 className="calendar-section-dailys-text-value">
        DIARIAS A PARTIR DE <br />
        <span>R$1.819*</span>
      </h3>

      {method === "calendar" ? (
        <div>
          <h3 className="calendar-section-reservation-period-text">
            SELECIONE O PERIODO DA SUA RESERVA
          </h3>

          <div className="bg-conchas">
            <Image src={BgConchas} alt="bgconchas"/>
          </div>

          <div className="calendar-container">
            <div className="calendar">
              <div className="days-of-week">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="day-week">
                    {day}
                  </div>
                ))}
              </div>

              <div className="days">{rendDays()}</div>

              <div className="calendar-btn">
                <button
                  onClick={() => setMethod("reservation")}
                  className="btn"
                >
                  AVANCAR
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Reservation />
      )}
    </section>
  );
}
