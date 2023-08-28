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

const router = createBrowserRouter([
    // User Routes
    {
        path: '/',
        element: <GuestLayout />,
        errorElement: <div className="container mt-2">Error Occured <br /> <button className="err-btn" onClick={() => window.location.reload()}>Reload</button></div>,
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
        errorElement: <div className="container">Error Occured <br /> <button className="err-btn" onClick={() => window.location.reload()}>Reload</button></div>,
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
                errorElement: <div className="container">Error Occured <br /> <button className="err-btn" onClick={() => window.location.reload()}>Reload</button></div>,
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
                errorElement: <div className="container">Error Occured <br /> <button className="err-btn" onClick={() => window.location.reload()}>Reload</button></div>,
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