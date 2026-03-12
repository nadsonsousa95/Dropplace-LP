import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/foto-1.JPG",
    description: "Construa soluções digitais de forma rápida e escalável."
  },
  {
    image: "/foto-2.JPG",
    description: "Utilize IA para acelerar processos e inovação."
  },
  {
    image: "/foto-3.JPG",
    description: "Arquiteturas modernas para produtos digitais."
  }
];

export default function Carousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        navigation
        effect="fade"
        loop
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            
            <div className="relative w-full h-[250px] md:h-[350px]">

              {/* imagem */}
              <Image
                src={slide.image}
                className="object-cover"
                alt={slide.description}
                fill
              />

              {/* overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"></div>

              {/* conteúdo */}
              <div className="relative z-10 flex h-full items-center px-10 md:px-20">
                
                <div className="max-w-xl text-white items-end">


                  {/* <p className="text-lg md:text-xl text-gray-200">
                    {slide.description}
                  </p> */}

                  {/* <button className="
                    mt-4
                    px-6 py-3
                    rounded-lg
                    bg-white text-black
                    font-semibold
                    hover:bg-gray-200
                    transition
                  ">
                    {slide.button}
                  </button> */}

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}