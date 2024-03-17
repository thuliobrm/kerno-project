"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import CarouselImg1 from "@assets/5.png";
import CarouselImg2 from "@assets/10.png";
import CarouselImg3 from "@assets/foto.png";
import CarouselImg4 from "@assets/1.jpg";
import CarouselImg5 from "@assets/2.jpg";
import CarouselImg6 from "@assets/4.jpg";
import Image from "next/image";

const cards = [
  {
    image: CarouselImg1,
    text: 'Mergulhe nas águas transparentes de Maragogi nestas férias de julho e viva uma aventura aquática inesquecível'
  },
  {
    image: CarouselImg2,
    text: 'Abra os braços para a diversão sob o sol do Caribe brasileiro'
  },
  {
    image: CarouselImg3,
    text: 'Saboreie os momentos refrescantes e felizes das férias escolares no Salinas!'
  },
  {
    image: CarouselImg4,
    text: 'Mergulhe nas águas transparentes de Maragogi nestas férias de julho e viva uma aventura aquática inesquecível.'
  },
  {
    image: CarouselImg5,
    text: 'Sinta a alegria e a liberdade das férias de julho em Maragogi no Salinas!'
  },
  {
    image: CarouselImg6,
    text: 'Deixe as ondas de felicidade envolverem seus pequenos nas férias de julho.'
  },
]

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-xlg py-20 bg-[#F4E3B3]"
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Image className="rounded-md" src={card.image} alt={card.text} />
              <p className="text-[#847758] text-center text-xs">{card.text}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext className="bg-[#F85600] "/> */}
    </Carousel>
  );
}
