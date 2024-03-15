import React from "react";
import Calendar from "../Components/Calendar";
import OfferedServices from "@/Components/OfferedServices";
import SiriClub from "@/Components/SiriClub";
import SchoolVacation from "@/Components/SchoolVacation";
import Carousel from "@/Components/Carousel/Index";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Calendar />
        <OfferedServices />
        <SiriClub />
        <SchoolVacation />
        <Carousel />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
