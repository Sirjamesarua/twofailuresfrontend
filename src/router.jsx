import { Navigate, createBrowserRouter } from "react-router-dom";
// Layout Imports -------------------------------------------------------------------
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout, { loader as AdminDashboardLoader } from "./layouts/AdminLayout";
import AmbassadorLayout, { loader as AmbDashboardLoader } from "./layouts/AmbassadorLayout";

// User Imports -------------------------------------------------------------------
import Home from "./views/user/home/Home";
import Episode, { loader as EpisodeLoader } from "./views/user/episode/Episode";
import { PrivacyPolicyPage } from "./views/user/policies/PrivacyPolicyPage";
import { CookiePolicyPage } from "./views/user/policies/CookiePolicyPage";

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

// Ambassador Imports -------------------------------------------------------------------
import AmbHome from "./views/ambassador/AmbHome";
import AmbDashboard from "./views/ambassador/AmbDashboard";
import AmbLogin from "./views/ambassador/AmbLogin";

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
                path: 'privacy-policy',
                element: <PrivacyPolicyPage />,
            },
            {
                path: 'cookie-policy',
                element: <CookiePolicyPage />,
            },

            // Admin routes
            {
                path: "admin/login",
                element: <AdminLogin />
            },

            // Ambaassador routes
            {
                path: 'ambassador/program',
                element: <AmbHome />
            },
            {
                path: 'ambassador/login',
                element: <AmbLogin />
            }
        ]
    },

    {
        path: '/ambassador/dashboard',
        element: <AmbassadorLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AmbDashboard />,

            }
        ]
    },

    // Admin Routes
    {
        path: '/admin',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/admin',
                element: <Navigate to={'/admin/dashboard'} />
            },
            {
                index: true,
                path: "dashboard",
                element: <AdminDashboard />,
                loader: AdminDashboardLoader
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