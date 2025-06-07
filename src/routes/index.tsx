// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/about";
import StoryPage from "../pages/about/story";
import MissionPage from "../pages/about/mission";
import TeamPage from "../pages/about/team";

export const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage />,
    children: [
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
      }
    ]
  }
]);