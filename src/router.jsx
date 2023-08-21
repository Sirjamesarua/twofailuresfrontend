import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./views/user/home/Home";
import Episode from "./views/user/episode/Episode";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./views/admin/AdminDashboard";
import EpLayout from "./views/admin/episodes/EpLayout";
import AllEpisodes from "./views/admin/episodes/AllEpisodes";
import CreateEpisode from "./views/admin/episodes/CreateEpisode";
import EditEpisode from "./views/admin/episodes/EditEpisode";

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
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "episodes",
                element: <EpLayout />,
                children: [
                    {
                        index: true,
                        element: <AllEpisodes />
                    },
                    {
                        path: "create",
                        element: <CreateEpisode />
                    },
                    {
                        path: "edit/:episodeId",
                        element: <EditEpisode />
                    }
                ]
            }
        ]
    }
])

export default router