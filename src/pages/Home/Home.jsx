import "./home.css";
import { Link as Anchor } from "react-scroll";
export default function Home() {
  return (
    <div className=" h-screen w-screen bg-color-base flex flex-col gap-16 justify-end pb-8 px-36">
      <div className=" max-w-60">
        <h1 className=" text-6xl font-bold leading-title">
          Hola, Soy <span>Johan Zuluaga</span>
        </h1>
        <div className="text-animate">
          <h3>Desarrollador Full Stack MERN & Mobile App</h3>
        </div>
        <p className=" text-2sm mt-6 mb-8 w-tam">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nemo
          enim quibusdam deserunt, a laudantium accusantium ut quas molestiae,
          deleniti natus debitis veritatis? Nam reprehenderit placeat vero
          delectus similique ipsa.
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
        <Anchor>
          <box-icon type="logo" name="facebook"></box-icon>
        </Anchor>
        <Anchor>
          <box-icon name="instagram" type="logo"></box-icon>
        </Anchor>
        <Anchor>
          <box-icon type="logo" name="linkedin"></box-icon>
        </Anchor>
        <Anchor>
          <box-icon name="github" type="logo"></box-icon>
        </Anchor>
        <Anchor>
          <box-icon name="figma" type="logo"></box-icon>
        </Anchor>
      </div>
    </div>
  );
}
