// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/Home";
import AboutPage from "../pages/about/index";
import StoryPage from "../pages/about/story";
import MissionPage from "../pages/about/mission";
import TeamPage from "../pages/about/team";
import JoinPage from "../pages/about/join";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        children: [
          {
            index: true,
            element: <AboutPage />,
          },
          {
            path: "story",
            element: <StoryPage />,
          },
          {
            path: "mission",
            element: <MissionPage />,
          },
          {
            path: "team",
            element: <TeamPage />,
          },
          {
            path: "join",
            element: <JoinPage />,
          },
        ],
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>,
      },
    ],
  },
]);
