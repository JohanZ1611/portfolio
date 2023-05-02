import "./skills.css";
import "boxicons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";
SwiperCore.use([EffectCoverflow, Navigation]);

export default function Skills() {
  const slides = [
    {
      id: 1,
      title: "HTML5",
      description: "description1",
      image: "https://i.postimg.cc/zfvcLP1j/html5-logo.png",
      color: "#0D83B9",
    },
    {
      id: 2,
      title: "CSS3",
      description: "description1",
      image: "https://i.postimg.cc/wMkcHPVH/css3-logo.png",
      color: "#00A3E6",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "description1",
      image: "https://i.postimg.cc/zBGq0Hcj/javascript-logo.png",
      color: "#0D83B9",
    },
    {
      id: 4,
      title: "React",
      description: "description1",
      image: "https://i.postimg.cc/CxKTypNh/react-logo.png",
      color: "#00A3E6",
    },
    {
      id: 5,
      title: "NodeJs",
      description: "description1",
      image: "https://i.postimg.cc/d1hrg372/nodejs-logo.png",
      color: "#0D83B9",
    },
    {
      id: 6,
      title: "Mongo",
      description: "description1",
      image: "https://i.postimg.cc/02YmTLNB/mongodb-logo.png",
      color: "#00A3E6",
    },
    {
      id: 7,
      title: "Redux",
      description: "description1",
      image: "https://i.postimg.cc/ZY3yN165/redux-logo.png",
      color: "#0D83B9",
    },
    {
      id: 8,
      title: "Git",
      description: "description1",
      image: "https://i.postimg.cc/vHtgqfqR/git-logo.png",
      color: "#00A3E6",
    },
    {
      id: 9,
      title: "Tailwind",
      description: "description1",
      image: "https://i.postimg.cc/y86JwxtD/tailwind-css-logo.png",
      color: "#0D83B9",
    },
    {
      id: 10,
      title: "Bootstrap",
      description: "description1",
      image: "https://i.postimg.cc/dVW7vvc4/bootstrap-logo.png",
      color: "#00A3E6",
    },
  ];

  return (
    <div className=" h-screen bg-color-base justify-center items-center flex flex-col gap-10 pt-20">
      <h2 className=" text-6xl font-bold text-center">
        Mis <span className=" text-btn2-color">Habilidades</span>
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        autoplay={{ delay: 1000 }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ backgroundColor: slide.color }}>
            <div className="card">
              <img src={slide.image} alt={slide.title} />
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
