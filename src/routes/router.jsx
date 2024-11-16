import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CotegoryNews from "../pages/CotegoryNews";


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
        path: "/news",
        element: <h1>News Loyout</h1>
    },
    {
        path: "/auth",
        element: <h1>Login</h1>,
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
])



export default router;