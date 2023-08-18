import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./views/user/home/Home";
import Episode from "./views/user/episode/Episode";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'read/episode/',
                element: <Episode />
            }
        ]
    }
])

export default router