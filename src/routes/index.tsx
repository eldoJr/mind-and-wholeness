// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/Home";
import JoinPage from "../pages/about/practice";
import BeginJourney from "../pages/BeginJourney";
import AboutPage from "../pages/about/about";
import TeamPage from "../pages/about/team";
import PracticePage from "../pages/about/practice";
import ProgramsPage from "../components/sections/programs/podcasts/Podcasts";
import DailyMeditations from "../components/sections/programs/meditations/Meditations";
import PodcastsPage from "../components/sections/programs/podcasts/Podcasts";
import HostPodcastPage from "../components/sections/programs/podcasts/HostPodcastPage";
import EventsPage from "../components/sections/programs/events/Events";
import ArticlesSection from "../pages/programs/articles";
import BookStore from "../components/sections/bookstore/BookStore";
import ContactSection from "../pages/Contact";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";
import HealingMeditations from "../components/sections/programs/meditations/topic/healing";
import JoyMeditations from "../components/sections/programs/meditations/topic/joy";
import PresenceMeditations from "../components/sections/programs/meditations/topic/presence";
import { Privacy } from "../pages/privacy";
import { Terms } from "../pages/terms";
import ProfilePage from "../pages/Profile";
import ResetPasswordPage from "../pages/ResetPassword";
import NotFound from "../pages/404/NotFound";
import InstitutePage from "../pages/institute/institute";
import Newsletter from "../pages/Newsletter";
import HelpPage from "../pages/Help";
import SubscribePage from "../pages/Subscribe";
import CommunityHealth from "../pages/programs/CommunityHealth";
import StoriesPage from "../pages/Stories";
import AdminProtectedRoute from "../admin/components/layout/AdminProtectedRoute";
import AdminLayout from "../admin/components/layout/AdminLayout";
import Dashboard from "../admin/pages/dashboard/Dashboard";
import Users from "../admin/pages/users/Users";
import Content from "../admin/pages/content/Content";
import Settings from "../admin/pages/settings/Settings";
import AddCourse from "../admin/pages/courses/AddCourse";
import AddPodcast from "../admin/pages/podcasts/AddPodcast";
import AddBook from "../admin/pages/books/AddBook";
import AddArticle from "../admin/pages/articles/AddArticle";

import CoursePage from "../pages/institute/course/CoursePage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/begin-journey",
        element: <BeginJourney />,
      },
      {
        path: "/about/join",
        element: <JoinPage />,
      },
      {
        path: "/programs",
        element: <ProgramsPage />,
      },
      {
        path: "/about/about",
        element: <AboutPage />,
      },
      {
        path: "/about/team",
        element: <TeamPage />,
      },
      {
        path: "/about/practice",
        element: <PracticePage />,
      },
      {
        path: "/programs/meditations",
        element: <DailyMeditations />,
      },
      {
        path: "/programs/podcasts",
        element: <PodcastsPage />,
      },
      {
        path: "/programs/podcasts/:hostId",
        element: <HostPodcastPage />,
      },
      {
        path: "/programs/events",
        element: <EventsPage />,
      },
      {
        path: "/programs/meditations/healing",
        element: <HealingMeditations />,
      },
      {
        path: "/programs/meditations/joy",
        element: <JoyMeditations />,
      },
      {
        path: "/programs/meditations/presence",
        element: <PresenceMeditations />,
      },
      {
        path: "/programs/community-health",
        element: <CommunityHealth />,
      },
      {
        path: "/stories",
        element: <StoriesPage />,
      },
      {
        path: "/programs/articles",
        element: <ArticlesSection />,
      },
      {
        path: "/programs/institute",
        element: <InstitutePage />,
      },
      {
        path: "/programs/institute/:slug",
        element: <CoursePage />,
      },
      {
        path: "/bookstore/bookstore",
        element: <BookStore />
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
      {
        path: "/subscribe",
        element: <SubscribePage />,
      },
      {
        path: "/signup/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <AdminProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "/admin", element: <Dashboard /> },
          { path: "/admin/users", element: <Users /> },
          { path: "/admin/content", element: <Content /> },
          { path: "/admin/settings", element: <Settings /> },
          { path: "/admin/courses/add", element: <AddCourse /> },
          { path: "/admin/podcasts/add", element: <AddPodcast /> },
          { path: "/admin/books/add", element: <AddBook /> },
          { path: "/admin/articles/add", element: <AddArticle /> },
        ],
      },
    ],
  },
]);