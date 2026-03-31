import { createBrowserRouter } from "react-router"
import Root from "../Layouts/Root"
import Home from "../Pages/Home"
import Login from "../Components/Login"
import Register from "../Components/Register"
import Assignment from "../Components/Assignment"
import Assignments from "../Pages/Assignments"
import CreateAssignment from "../Pages/CreateAssignment"
import AssignmentDetails from "../Pages/AssignmentDetails"
import MySubmitted from "../Pages/MySubmitted"
import PendingAssignments from "../Pages/PendingAssignments"

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path:'login',
                Component: Login
            },
            {
                path:'register',
                Component: Register
            },
            {
                path: 'assignments',
                Component: Assignments 
            },
            {
                path: '/assignment/:id',
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
                Component: AssignmentDetails
            },
            {
                path: 'createAssignment',
                Component: CreateAssignment
            },
            {
                path: 'mysubmitted',
                Component: MySubmitted
            },
            {
                path: 'pending-assignments',
                Component: PendingAssignments
            }
        ]
    }
])