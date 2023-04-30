import "./home.css";
import { Link as Anchor } from "react-scroll";
export default function Home() {
  return (
    <div className=" h-screen w-screen bg-img-home bg-cover bg-center bg-no-repeat flex flex-col gap-16 justify-end pb-8 px-36">
      <div className=" max-w-60">
        <h1 className=" text-6xl font-bold leading-title">
          Hola, Soy <span>Johan Zuluaga</span>
        </h1>
        <div className="text-animate">
          <h3>Desarrollador Full Stack MERN & Mobile App</h3>
        </div>
        <p className=" text-2sm mt-6 mb-8 w-tam">
          Soy un Desarrollador Full Stack MERN & Mobile App que disfruta
          aprendiendo y creando aplicaciones. Me gusta trabajar con metodologías
          ágiles y seguir las mejores prácticas de desarrollo. En mi portfolio
          encontrarás algunos ejemplos de lo que puedo hacer con MongoDB,
          Express JS, React JS y Node JS. Si quieres conocer más sobre mí y mi
          trabajo, ¡no dudes en contactarme!
        </p>

        <div className=" relative flex justify-between w-btn-home h-btn-home">
          <Anchor className="btn cursor-pointer relative inline-flex justify-center items-center w-wid-btn h h-hei-btn bg-btn2-color font-semibold text-xl tracking-widest text-color-base">
            CV
          </Anchor>
          <Anchor className="btn cursor-pointer relative inline-flex justify-center items-center w-wid-btn2 h h-hei-btn bg-btn2-color  font-semibold text-xl tracking-widest text-color-base">
            Conversemos
          </Anchor>
        </div>
      </div>
      <div className="redes flex justify-between pt-10">
        <Anchor className="red">
          <box-icon type="logo" name="facebook" id="col"></box-icon>
        </Anchor>
        <Anchor className="red">
          <box-icon name="instagram" type="logo"></box-icon>
        </Anchor>
        <Anchor className="red">
          <box-icon type="logo" name="linkedin"></box-icon>
        </Anchor>
        <Anchor className="red">
          <box-icon name="github" type="logo"></box-icon>
        </Anchor>
        <Anchor className="red">
          <box-icon name="figma" type="logo"></box-icon>
        </Anchor>
      </div>
      <div className=" imgHover absolute top-0 right-0 w-2/5 h-full bg-transparent"></div>
    </div>
  );
}
