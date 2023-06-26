import "./contact.css";
import "../../components/Footer/Footer";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <div className=" h-screen bg-color-base flex flex-col gap-8 pt-10 justify-center items-center">
      <h2 className=" text-6xl font-bold text-center">
        Contactate <span className=" text-btn2-color">Conmigo!</span>
      </h2>
      <form className=" max-w-3xl text-center z-0">
        <div className=" relative flex justify-between flex-wrap">
          <div className=" relative w-input my-3 mx-0">
            <input
              className=" w-full h-full p-6 text-base text-white bg-transparent  rounded-lg  borde"
              type="text"
              placeholder="Nombre Completo"
              required
            />
            <span className="focus"></span>
          </div>
          <div className=" relative w-input my-3 mx-0">
            <input
              type="text"
              placeholder="Correo Electrónico"
              className=" w-full h-full p-6 text-base text-white bg-transparent  rounded-lg  borde"
              required
            />
            <span className=" focus"></span>
          </div>
        </div>
        <div className="relative flex justify-between flex-wrap">
          <div className=" relative w-input my-3 mx-0">
            <input
              className=" w-full h-full p-6 text-base text-white bg-transparent  rounded-lg borde"
              type="number"
              placeholder="Número de Teléfono"
              required
            />
            <span className=" focus"></span>
          </div>
          <div className=" relative w-input my-3 mx-0">
            <input
              className=" w-full h-full p-6 text-base text-white bg-transparent rounded-lg borde"
              type="text"
              placeholder="Asunto del Correo"
              required
            />
            <span className=" focus"></span>
          </div>
        </div>

        <div className=" relative flex my-3 mx-0">
          <textarea
            className=" resize-none w-full h-text p-6 text-base text-white bg-transparent rounded-lg borde"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="tu Mensaje"
            required
          ></textarea>
          <span className="focus"></span>
        </div>
        <div className=" w-full h-btn-home flex justify-center items-cente">
          <button
            type="submit"
            className="btn cursor-pointer relative inline-flex justify-center items-center w-wid-btn h-hei-btn bg-btn2-color  font-semibold text-xl tracking-widest text-color-base"
          >
            Enviar
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
