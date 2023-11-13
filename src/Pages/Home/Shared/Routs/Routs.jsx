import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../../../../Leaout/Main";
import Home from "../../Home/Home";
import Menu from "../../Menu/Menu/menu";
import OurShop from "../../OurShop/OurShop";
import Errore from "../../../../Error";
import Login from "../../../Login/Login";
import Regiser from "../../../Login/Regiser";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errore/>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "/oderNow/:category",
        element: <OurShop></OurShop>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Regiser/>
      },
    ]

  }


]);