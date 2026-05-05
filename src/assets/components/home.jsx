import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.jpg";
import slide3 from "../img/slide3.jpg";

export function Home() {
  const slides = [
    {
      id: "1",
      image: slide1,
    },
    {
      id: "2",
      image: slide2,
    },
    {
      id: "3",
      image: slide3,
    },
  ];

  return (
    <Swiper
      id="Home"
      className=""
      modules={[EffectFade, Autoplay]}
      effect="fade"
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000, //time for switch slide
        disableOnInteraction: false, //shutdown slide autoplay
      }}
    >
      {slides.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="box-img lg:h-150 ">
            <img src={item.image} alt="" className="relative brightness-50" />
          </div>
          <div className="content absolute left-2 bottom-5 text-white text-[10px]">
            <span>Escritório de advocacia</span>

            <h2 className="text-2xl font-bold bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Sua causa,
              <br />
              nossa <i>dedicação.</i>
            </h2>
            <p className="w-50 text-left">
              {" "}
              Oferecemos assessoria personalizada para pessoas físicas e
              empresas. Acreditamos que cada cliente merece uma defesa
              comprometida, baseada em ética, técnica e resultados.
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
