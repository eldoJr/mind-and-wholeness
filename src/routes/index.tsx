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
import EventsPage from "../components/sections/programs/events/Events";
import ArticlesSection from "../pages/programs/articles";
import BookStore from "../components/sections/bookstore/BookStore";
import ContactSection from "../pages/Contact";
import Signup from "../pages/signup/signup";
import HealingMeditations from "../components/sections/programs/meditations/topic/healing";
import JoyMeditations from "../components/sections/programs/meditations/topic/joy";
import PresenceMeditations from "../components/sections/programs/meditations/topic/presence";
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
        path: "/programs/articles",
        element: <ArticlesSection />
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