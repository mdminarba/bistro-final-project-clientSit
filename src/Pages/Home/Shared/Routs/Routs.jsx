import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../../../../Leaout/Main";
import Home from "../../Home/Home";
import Errore from "../../../../Error";
import Regiser from "../../../Login/Regiser";

// import PrivateRoute from "../../../../providers/PrivateRoute";
import DashBboard from "../../../../Leaout/DashBboard/DashBboard";
import Cart from "../../../../Leaout/DashBboard/Cart/Cart";
import AllUsers from "../../../../Leaout/DashBboard/Allusers/AllUsers";
import AddItem from "../../../../Leaout/DashBboard/AddItem/AddItem";
import AdminRouts from "../../../../providers/AdminRouts";
import ManageItems from "../../../../Leaout/DashBboard/ManageItems/ManageItems";
// import Payment from "../../Payment/Payment";
import Login from "../../../Login/Login";
// import PaymentHistory from "../../Payment/PaymentHistory";
import AdminHome from "../../../../Leaout/DashBboard/AdminHome/AdminHome";
import UserHome from "../../../../Leaout/DashBboard/userHome/userHome";
import Menu from "../../../menu/menu";
import UpdateCard from "../../../../Leaout/DashBboard/UpdateItem/UpdateCard";

import AplicationCard from "../../Menu/Menu/AplicationCard";
import Data from "../../Home/Data";
import Application from "../../Menu/Menu/Application";



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
        path: "/jobOffer",
        element:<Data/>
        
      },
      {
        path: "/menu",
        element:<Menu/>
        
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Regiser/>
      },
      {
        path: "/application",
        element: <Application/>
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
      // {
      //   path:"payment",
      //   element:<Payment></Payment>

      // },
      {
        path:"userHome",
        element:<UserHome/>

      },
      {
        path:"menoo",
        element:<Menu/>
      },
      
      // {
      //   path:"paymintHestory",
      //   element:<PaymentHistory/>

      // },
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
        path:"aplicationCard",
        element:<AdminRouts><AplicationCard/></AdminRouts> 
      },
      {
        path:"updateCard/:id",
        element:<AdminRouts><UpdateCard/></AdminRouts> ,
       
      },
    ]
  }


]);