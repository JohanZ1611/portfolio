import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Proyects from "./pages/Proyects/Proyects";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <div>
      <NavBar />
      {/* <Home />
      <About />
      <Skills />
      <Proyects /> */}
      <Contact />
    </div>
  );
}
