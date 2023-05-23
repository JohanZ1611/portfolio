import NavBar from "../../components/NavBar/NavBar";
import Home from "../../pages/Home/Home";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Home />
      <Outlet />
    </div>
  );
}
