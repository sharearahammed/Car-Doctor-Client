import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../assets/Pages/Home/Home";
import Login from "../assets/Pages/Login.jsx/Login";
import SignUp from "../assets/Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/Signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);
  
  export default router;