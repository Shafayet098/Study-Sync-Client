import { createBrowserRouter } from "react-router"
import Root from "../Layouts/Root"
import Home from "../Pages/Home"
import Login from "../Components/Login"
import Register from "../Components/Register"

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home 
            },
            {
                path:'login',
                Component: Login
            },
            {
                path:'register',
                Component: Register
            }
        ]
    }
])