import React, { useState } from "react";
import "./index.css";
import BgConchas from '@assets/bgConchasCalendar.png'
import Image from "next/image";

export default function Reservation() {
  const [hasChildren, setHasChildren] = useState("0");

  const handleChange = (e: any) => {
    setHasChildren(e.target.value);
  };

  return (
    <div className="reserves-container">
         <div className="bg-conchas">
            <Image src={BgConchas} alt="bgconchas"/>
          </div>
        <h3>SELECIONE A QUANTIDADE DE PESSOAS</h3>
      <div className="reserves">
        <div className="custom-select">
          <select name="adult" id="adult">
            <option className="black" value="">
              1 adulto
            </option>
            <option className="black" value="">
              2 adultos
            </option>
            <option className="black" value="">
              3 adultos
            </option>
            <option className="black" value="">
              4 adultos
            </option>
            <option className="black" value="">
              5 adultos
            </option>
          </select>
        </div>

        <div className="custom-select">
          <select onChange={handleChange} name="children" id="children">
            <option className="black" value="0">
              0 crianças
            </option>
            <option className="black" value="1">
              1 criança
            </option>
            <option className="black" value="2">
              2 crianças
            </option>
            <option className="black" value="3">
              3 crianças
            </option>
          </select>
        </div>

        <div className="custom-select">
          <select disabled={Number(hasChildren) < 1} name="age1" id="age1">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((age) => (
              <option className="black" key={age} value="">{`${age} ${
                age <= 1 ? "ano" : "anos"
              }`}</option>
            ))}
          </select>
        </div>

        <div className="custom-select">
          <select disabled={Number(hasChildren) < 2} name="age2" id="age2">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((age) => (
              <option className="black" key={age} value="">{`${age} ${
                age <= 1 ? "ano" : "anos"
              }`}</option>
            ))}
          </select>
        </div>

        <div className="custom-select">
          <select disabled={Number(hasChildren) < 3} name="age3" id="age3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((age) => (
              <option className="black" key={age} value="">{`${age} ${
                age <= 1 ? "ano" : "anos"
              }`}</option>
            ))}
          </select>
        </div>

      </div>
        <button className="search-btn">PESQUISAR</button>
    </div>
  );
}
