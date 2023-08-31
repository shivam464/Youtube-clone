import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <div>about</div>,
  },
  {
    path: "/",
    element: <div>home</div>,
  },
]);

export default router;
