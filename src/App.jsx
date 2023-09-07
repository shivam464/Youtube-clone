import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

// import router from "../src/Routers";
import Header from "./layout/Header";
import RightSide from "./components/RightSide";
import LeftSidebar from "./components/LeftSidebar";

// import DataDisplay from './components/DataDisplay';
function App() {
  return (
    <div className="h-screen ">
      <Header />
      <div className="w-full flex  h-[calc(100vh-61.2px)]">
        <div className="w-[15%] h-full overflow-y-scroll ">
          <LeftSidebar />
        </div>
        <div className="w-[85%] h-full overflow-y-scroll  px-6 py-10">
          <RightSide />
        </div>
      </div>

      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
