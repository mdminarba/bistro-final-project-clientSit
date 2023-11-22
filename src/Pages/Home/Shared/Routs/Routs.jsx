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
import Payment from "../../Payment/Payment";
import Login from "../../../Login/Login";
import PaymentHistory from "../../Payment/PaymentHistory";
import AdminHome from "../../../../Leaout/DashBboard/AdminHome/AdminHome";
import UserHome from "../../../../Leaout/DashBboard/userHome/userHome";



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
        element: <Login/>
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
      {
        path:"payment",
        element:<Payment></Payment>

      },
      {
        path:"userHome",
        element:<UserHome/>

      },
      {
        path:"paymintHestory",
        element:<PaymentHistory/>

      },
      // Add min routs
      {
        path:"users",
        element:<AdminRouts><AllUsers/></AdminRouts> 
      },
      {
        path:"adminHome",
        element:<AdminRouts><AdminHome/></AdminRouts> 
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
        loader: ({params})=> fetch(`https://bistro-finel-project-serve.vercel.app/menu/${params.id}`)
      },
    ]
  }


]);