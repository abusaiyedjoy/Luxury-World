import { createBrowserRouter } from "react-router-dom";
import Home from './../Home/Home';
import Root from './../Root/Root';
import Login from './../Login/Login';
import Register from './../Register/Register';
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactUs from "../Contact/Contact";
import Service from "../Service/Service";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CarDetails from "../CarDetails/CarDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/service",
            element: <PrivateRoute><Service></Service></PrivateRoute>
        },
        {
            path: "/contact",
            element: <ContactUs></ContactUs>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: '/CarDetails/:id',
            loader: () => fetch('/data.json'),
            element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>
        },
      ]
    },
  ]);
  export default router;