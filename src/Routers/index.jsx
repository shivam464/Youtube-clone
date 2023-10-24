import { createBrowserRouter } from "react-router-dom";
import RightSide from "../components/RightSide";
import VideoDetailPage from "../pages/VideoDetailPage";
const router = createBrowserRouter([
  {
    path: "/:id",
    element: <VideoDetailPage />,
  },
  {
    path: "/",
    element: <RightSide />,
  },
]);

export default router;
