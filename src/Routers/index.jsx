import { createBrowserRouter } from "react-router-dom";
import RightSide from "../components/RightSide";
import VideoDetailPage from "../pages/VideoDetailPage";
import SearchVideos from "../pages/SearchVideos";
import SearchResults from "../pages/SearchResults";
import ChannelDetail from "../pages/ChannelDetail";
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
  {
    path: "/SearchResults",
    element: <SearchResults />,
  },
  {
    path: "/ChannelDetail",
    element: <ChannelDetail />,
  },
]);

export default router;
