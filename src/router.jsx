import { createBrowserRouter } from "react-router-dom";
// Layout Imports -------------------------------------------------------------------
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout from "./layouts/AdminLayout";

// User Imports -------------------------------------------------------------------
import Home from "./views/user/home/Home";
import Episode, { loader as EpisodeLoader } from "./views/user/episode/Episode";

// Admin Imports -------------------------------------------------------------------
import AdminDashboard from "./views/admin/AdminDashboard";
import EpLayout, { loader as EpLayoutLoader } from "./views/admin/episodes/EpLayout";
import AllEpisodes from "./views/admin/episodes/AllEpisodes";
import CreateEpisode from "./views/admin/episodes/CreateEpisode";
import EditEpisode, { loader as EditEpisodeLoader } from "./views/admin/episodes/EditEpisode";
import AdLayout, { loader as AdLayoutLoader } from "./views/admin/adverts/AdLayout";
import AllAds from "./views/admin/adverts/AllAds";
import CreateAd from "./views/admin/adverts/CreateAd";
import EditAd, { loader as EditAdLoader } from "./views/admin/adverts/EditAd"
import AdminLogin from "./views/admin/auth/AdminLogin";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter([
    // User Routes
    {
        path: '/',
        element: <GuestLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'episodes/:episodeId',
                element: <Episode />,
                loader: EpisodeLoader
            },
            {
                path: "admin/login",
                element: <AdminLogin />
            },
        ]
    },

    // Admin Routes
    {
        path: '/admin',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "episodes",
                element: <EpLayout />,
                loader: EpLayoutLoader,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <AllEpisodes />,
                        loader: EpLayoutLoader,
                    },
                    {
                        path: "create",
                        element: <CreateEpisode />
                    },
                    {
                        path: ":episodeId/show",
                        element: <EditEpisode />,
                        loader: EditEpisodeLoader
                    }
                ]
            },
            {
                path: "adverts",
                element: <AdLayout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <AllAds />,
                        loader: AdLayoutLoader
                    },
                    {
                        path: "create",
                        element: <CreateAd />
                    },
                    {
                        path: ":adId/show",
                        element: <EditAd />,
                        loader: EditAdLoader
                    }
                ]
            }
        ]
    }
])

export default router