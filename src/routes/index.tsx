// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/Home";
import AboutPage from "../pages/about/index";
import StoryPage from "../pages/about/story";
import MissionPage from "../pages/about/mission";
import TeamPage from "../pages/about/team";
import JoinPage from "../pages/about/join";
import BeginJourney from "../pages/BeginJourney";
import BlogSection from "../pages/blog/blog";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/about/story",
        element: <StoryPage />,
      },
      {
        path: "/about/mission",
        element: <MissionPage />,
      },
      {
        path: "/about/team",
        element: <TeamPage />,
      },
      {
        path: "/about/join",
        element: <JoinPage />,
      },
      {
        path: "/blog",
        element: <BlogSection />,
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>,
      },
    ],
  },
]);