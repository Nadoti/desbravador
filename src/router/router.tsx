import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Repository } from "../pages/Repository";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "repository/:nameId/:id",
    element: <Repository />
  }
])