import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CotegoryNews from "../pages/CotegoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetils from "../pages/NewsDetils";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CotegoryNews></CotegoryNews>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path: "/news/:id",
        element: <NewsDetils></NewsDetils>,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
               path: "/auth/register",
               element: <Register></Register>,
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
])



export default router;