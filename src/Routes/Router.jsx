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
import PrivateRoute from "./PrivateRoute"
import Evaluation from "../Pages/Evaluation"

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
                element:
                <PrivateRoute>
                    <AssignmentDetails></AssignmentDetails>
                </PrivateRoute>
            },
            {
                path: 'createAssignment',
                element:
                <PrivateRoute>
                    <CreateAssignment></CreateAssignment>
                </PrivateRoute>
            },
            {
                path: 'mysubmitted',
                element:
                <PrivateRoute>
                    <MySubmitted></MySubmitted>
                </PrivateRoute>
            },
            {
                path: 'pending-assignments',
                 element:
                <PrivateRoute>
                    <PendingAssignments></PendingAssignments>
                </PrivateRoute>
            },
            {
                path: 'evaluation/:id',
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/user?id=${params.id}`),
                 element:
                <PrivateRoute>
                    <Evaluation></Evaluation>
                </PrivateRoute>
            }
        ]
    }
])