import { createBrowserRouter } from "react-router-dom";
// Layout Imports
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout from "./layouts/AdminLayout";
// User Imports
import Home from "./views/user/home/Home";
import Episode from "./views/user/episode/Episode";
// Admin Imports
import AdminDashboard from "./views/admin/AdminDashboard";
import EpLayout from "./views/admin/episodes/EpLayout";
import AllEpisodes from "./views/admin/episodes/AllEpisodes";
import CreateEpisode from "./views/admin/episodes/CreateEpisode";
import EditEpisode from "./views/admin/episodes/EditEpisode";
import AdLayout from "./views/admin/adverts/AdLayout";
import AllAds from "./views/admin/adverts/AllAds";
import CreateAd from "./views/admin/adverts/CreateAd";
import EditAd from "./views/admin/adverts/EditAd"

const router = createBrowserRouter([
    // User Routes
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

    // Admin Routes
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
            },
            {
                path: "adverts",
                element: <AdLayout />,
                children: [
                    {
                        index: true,
                        element: <AllAds />
                    },
                    {
                        path: "create",
                        element: <CreateAd />
                    },
                    {
                        path: "edit/:adId",
                        element: <EditAd />
                    }
                ]
            }
        ]
    }
])

export default router