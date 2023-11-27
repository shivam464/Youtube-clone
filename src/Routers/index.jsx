import { createBrowserRouter } from "react-router-dom";
import RightSide from "../components/RightSide";
import VideoDetailPage from "../pages/VideoDetailPage";
import SearchVideos from "../pages/SearchVideos";
const router = createBrowserRouter([
  {
    path: "/watch",
    element: <VideoDetailPage />,
  },
  {
    path: "/",
    element: <RightSide />,
  },
  {
    path: "/results",
    element: <SearchVideos />,
  },
]);

export default router;
