import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../../../../Leaout/Main";
import Home from "../../Home/Home";
import Menu from "../../Menu/Menu/menu";
import OurShop from "../../OurShop/OurShop";
import Errore from "../../../../Error";
import Regiser from "../../../Login/Regiser";
import SingnIn from "../../../Login/SingnIn";
import PrivateRoute from "../../../../providers/PrivateRoute";
import DashBboard from "../../../../Leaout/DashBboard/DashBboard";
import Cart from "../../../../Leaout/DashBboard/Cart/Cart";
import AllUsers from "../../../../Leaout/DashBboard/Allusers/AllUsers";
import AddItem from "../../../../Leaout/DashBboard/AddItem/AddItem";
import AdminRouts from "../../../../providers/AdminRouts";
import ManageItems from "../../../../Leaout/DashBboard/ManageItems/ManageItems";
import UpdateItem from "../../../../Leaout/DashBboard/UpdateItem/UpdateItem";


export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errore/>,
    children: [

      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/menu",
        element:<Menu/>
      },
      {
        path: "/oderNow/:category",
        element:<PrivateRoute><OurShop/></PrivateRoute> 
        
      },
      {
        path: "/login",
        element: <SingnIn/>
      },
      {
        path: "/register",
        element: <Regiser/>
      },
    ]

  },
  {
    path:'dashBboard',
    element:<DashBboard/>,
    children:[
      {
        path:"cart",
        element:<Cart></Cart>

      },
      // Add min routs
      {
        path:"users",
        element:<AdminRouts><AllUsers/></AdminRouts> 
      },
      {
        path:"manageitems",
        element:<AdminRouts><ManageItems/></AdminRouts> 
      },
      {
        path:"addItems",
        element:<AdminRouts><AddItem/></AdminRouts> 
      },
      {
        path:"updateItem/:id",
        element:<AdminRouts><UpdateItem/></AdminRouts> ,
        loader: ({params})=> fetch(`http://localhost:5002/menu/${params.id}`)
      },
    ]
  }


]);