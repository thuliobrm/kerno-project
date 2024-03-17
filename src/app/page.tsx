import React from "react";
import Calendar from "../Components/Calendar";
import OfferedServices from "@/Components/OfferedServices";
import SiriClub from "@/Components/SiriClub";
import SchoolVacation from "@/Components/SchoolVacation";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { CarouselSize } from "@/Components/Carousel/Index";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Calendar />
        <OfferedServices />
        <SiriClub />
        <SchoolVacation />
        <CarouselSize />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
