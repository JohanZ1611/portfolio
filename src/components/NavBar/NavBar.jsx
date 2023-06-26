import "./navBar.css";
import "boxicons";
import { Link as Anchor } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState("Inicio");

  const handleAnchorClick = (anchor) => {
    setActive(anchor);
  };

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
        <Anchor
          to="/"
          className={active === "Inicio" ? "anchor active" : "anchor"}
          onClick={() => handleAnchorClick("Inicio")}
        >
          Inicio
        </Anchor>
        <Anchor
          to="/About"
          className={active === "Sobre mi" ? "anchor active" : "anchor"}
          onClick={() => handleAnchorClick("Sobre mi")}
        >
          Sobre mi
        </Anchor>
        <Anchor
          to="/Skills"
          className={active === "Habilidades" ? "anchor active" : "anchor"}
          onClick={() => handleAnchorClick("Habilidades")}
        >
          Habilidades
        </Anchor>
        <Anchor
          to="/Proyects"
          className={active === "Proyectos" ? "anchor active" : "anchor"}
          onClick={() => handleAnchorClick("Proyectos")}
        >
          Proyectos
        </Anchor>
        <Anchor
          to="/Contact"
          className={active === "Contacto" ? "anchor active" : "anchor"}
          onClick={() => handleAnchorClick("Contacto")}
        >
          Contacto
        </Anchor>
      </div>
    </div>
  );
}

export default NavBar;
