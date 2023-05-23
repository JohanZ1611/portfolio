import "./navBar.css";
import "boxicons";
import { Link as Anchor } from "react-router-dom";

function NavBar() {
  return (
    <div className=" bg-TRANSPARENT fixed left-0 top-0 w-screen py-6 px-28 flex justify-between items-center z-10">
      <Anchor
        className=" text-2xl font-semibold text-white cursor-pointer"
        to="/"
      >
        J<span className=" text-btn-color">Z</span>.
      </Anchor>

      <box-icon
        name="menu-alt-right"
        color="#ffffff"
        size="md"
        id="menu-icon"
      ></box-icon>

      <div>
        <Anchor to="/" className="anchor active">
          Inicio
        </Anchor>
        <Anchor to="/About" className="anchor">
          Sobre mi
        </Anchor>
        <Anchor to="/Skills" className="anchor">
          Habilidades
        </Anchor>
        <Anchor to="/Proyects" className="anchor">
          Proyectos
        </Anchor>
        <Anchor to="/Contact" className="anchor">
          Contacto
        </Anchor>
      </div>
    </div>
  );
}

export default NavBar;
