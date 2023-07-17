import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./views/guest/home/Home";
import Episode from "./views/guest/episode/Episode";

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