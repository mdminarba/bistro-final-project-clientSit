import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../../../../Leaout/Main";
import Home from "../../Home/Home";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[

      {
        path:"/",
        element:<Home></Home>
      }
    ]
    
    }

    
]);