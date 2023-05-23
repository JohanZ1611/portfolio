import MainLayout from "../Layouts/MainLayout/MainLayout";
import About from "./About/About";
import Proyects from "./Proyects/Proyects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/About", element: <About /> },
      { path: "/Proyects", element: <Proyects /> },
      { path: "/Skills", element: <Skills /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);
