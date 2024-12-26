import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLauout from "../layouts/Auth-lauout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
    element: <AuthLauout></AuthLauout>,
    children:[
      {
        path:"/auth/login",
        element:<h2>login page</h2>
      },
      {
        path:"/auth/resister",
        element:<h2>resister page</h2>
      },
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
