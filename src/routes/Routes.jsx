import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import Packages from "../pages/Packages/Packages";
import Offerings from "../pages/Offerings/Offerings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/details/:id', 
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/packages',
                element: <PrivateRoute><Packages></Packages></PrivateRoute>
            },
            {
                path: '/offerings',
                element: <PrivateRoute><Offerings></Offerings></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;
