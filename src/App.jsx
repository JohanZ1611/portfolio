import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Skills from "./pages/Skills/Skills";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}
