import "./skills.css";
import "boxicons";
import Footer from "../../components/Footer/Footer";

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
      description:
        "Tengo habilidades en HTML5, lo que me permite crear y diseñar sitios web modernos con una excelente estructura y semántica. ",
      image: "https://i.postimg.cc/zfvcLP1j/html5-logo.png",
      color: "#0D83B9",
    },
    {
      id: 2,
      title: "CSS3",
      description:
        " Puedo diseñar sitios web con estilo moderno y atractivo, utilizando animaciones, transiciones y otras técnicas avanzadas para mejorar la experiencia del usuario. Además, soy capaz de crear diseños responsivos que se adaptan a diferentes dispositivos y tamaños de pantalla.",
      image: "https://i.postimg.cc/wMkcHPVH/css3-logo.png",
      color: "#00A3E6",
    },
    {
      id: 3,
      title: "JavaScript",
      description:
        "Puedo crear interactividad y dinamismo en los sitios web. Soy capaz de crear efectos visuales, agregar formularios, crear validaciones y muchas otras funciones avanzadas que mejoran la experiencia del usuario.",
      image: "https://i.postimg.cc/zBGq0Hcj/javascript-logo.png",
      color: "#0D83B9",
    },
    {
      id: 4,
      title: "React",
      description:
        " Puedo crear interfaces de usuario interactivas y reutilizables para sitios web. Puedo utilizar componentes de React para dividir la página en pequeñas partes que pueden actualizarse de manera independiente, lo que me permite crear aplicaciones web rápidas y escalables.",
      image: "https://i.postimg.cc/CxKTypNh/react-logo.png",
      color: "#00A3E6",
    },
    {
      id: 5,
      title: "NodeJs",
      description:
        " Puedo crear aplicaciones de servidor escalables y eficientes. Puedo manejar solicitudes y respuestas HTTP, trabajar con bases de datos y crear aplicaciones en tiempo real.",
      image: "https://i.postimg.cc/d1hrg372/nodejs-logo.png",
      color: "#0D83B9",
    },
    {
      id: 6,
      title: "Mongo",
      description:
        "Tengo habilidades en MongoDB, lo que me permite crear y manejar bases de datos NoSQL. ",
      image: "https://i.postimg.cc/02YmTLNB/mongodb-logo.png",
      color: "#00A3E6",
    },
    {
      id: 7,
      title: "Redux",
      description:
        "Puedo manejar el estado de las aplicaciones web de manera predecible y fácil de razonar. Puedo crear acciones, reducers y selectores para manejar la lógica de la aplicación de manera clara y escalable.",
      image: "https://i.postimg.cc/ZY3yN165/redux-logo.png",
      color: "#0D83B9",
    },
    {
      id: 8,
      title: "Git",
      description:
        "Puedo controlar y rastrear los cambios en el código fuente de los proyectos de software. Puedo crear ramas, fusionar cambios y colaborar con otros desarrolladores de manera efectiva.",
      image: "https://i.postimg.cc/vHtgqfqR/git-logo.png",
      color: "#00A3E6",
    },
    {
      id: 9,
      title: "Tailwind",
      description:
        "Puedo diseñar y desarrollar aplicaciones web de manera rápida y eficiente. Puedo utilizar las clases predefinidas de Tailwind para crear diseños responsivos y personalizados.",
      image: "https://i.postimg.cc/y86JwxtD/tailwind-css-logo.png",
      color: "#0D83B9",
    },
    {
      id: 10,
      title: "Bootstrap",
      description:
        "Puedo diseñar y desarrollar aplicaciones web responsivas y adaptativas de manera sencilla y rápida. Puedo utilizar las clases predefinidas de Bootstrap para crear diseños atractivos y modernos.",
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
      <Footer />
    </div>
  );
}
