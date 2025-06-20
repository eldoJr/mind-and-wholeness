// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/Home";
import JoinPage from "../pages/about/practice";
import BeginJourney from "../pages/BeginJourney";
import AboutPage from "../pages/about/about";
import TeamPage from "../pages/about/team";
import FocusAreasPage from "../pages/about/focus-areas";
import PracticePage from "../pages/about/practice";
import ProgramsPage from "../components/sections/programs/Podcasts";
import DailyMeditations from "../components/sections/programs/Meditations";
import PodcastsPage from "../components/sections/programs/Podcasts";
import EventsPage from "../components/sections/programs/Events";
import BlogSection from "../pages/blog/blog";
import ContactSection from "../pages/Contact";
import Signup from "../pages/signup/signup";
import NotFound from "../pages/404/NotFound";

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
        path: "/about/focus-areas",
        element: <FocusAreasPage />,
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
        path: "/programs/events",
        element: <EventsPage />,
      },
      {
        path: "/blog",
        element: <BlogSection />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
      {
        path: "/signup/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);