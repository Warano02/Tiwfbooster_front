import Home from "../pages/landing/Home"; 
import About from "../pages/landing/About";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
];
