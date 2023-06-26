import "./about.css";
import { Link as Anchor } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <div className=" h-screen bg-second-color flex justify-center items-center flex-col gap-4 pt-20">
      <h2 className=" text-6xl font-bold text-center">
        Sobre <span className=" text-btn2-color">Mí</span>
      </h2>
      <div>
        <img
          className="imgAbout ml-10"
          src="https://i.postimg.cc/rpTd8Yg3/imgAbout.png"
          alt="about"
        />
      </div>
      <div className=" text-center flex flex-col items-center justify-center ">
        <h3 className=" text-4xl font-semibold">
          Desarrollador Full Stack MERN & Mobile App!
        </h3>
        <p className=" text-xl mt-8 mr-0 mb-12 w-3/4">
          Soy un apasionado desarrollador con experiencia en tecnologías como
          MERN, React Native. Además, poseo habilidades blandas como el trabajo
          en equipo, la comunicación efectiva y la resolución de problemas, lo
          que me permite aplicar metodologías ágiles y entregar proyectos tanto
          individuales como grupales de calidad que satisfacen las necesidades
          del cliente.
        </p>
        <div className=" inine-flex justify-between w-btn-home h-btn-home">
          <Anchor className="btn btn2 cursor-pointer relative inline-flex justify-center items-center w-wid-btn h h-hei-btn bg-btn2-color font-semibold text-xl tracking-widest text-color-base">
            Leer Más
          </Anchor>
        </div>
      </div>
      <Footer />
    </div>
  );
}
