// import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import React, { useRef } from "react";
// import router from "../src/Routers";
import Header from "./layout/Header";
// import RightSide from "./components/RightSide";
import LeftSidebar from "./components/LeftSidebar";
import router from "./Routers";

// import DataDisplay from './components/DataDisplay';
function App() {
  const parentDivRef = useRef(null);
  return (
    <div className="h-[95vh] app">
      <Header />
      <div className="w-full flex  h-[calc(100vh-61.2px)]">
        {/* ------hide for now-------- */}
        {/* <div className="w-[17%] h-full overflow-y-scroll px-[6px]">
          <LeftSidebar />
        </div> */}
        {/* <div
          id="video_section"
          ref={parentDivRef}
          className="w-[85%] h-full overflow-y-scroll right_section  px-6 py-10"
        >
          <RouterProvider router={router} />
        </div> */}
        <div
          id="video_section"
          ref={parentDivRef}
          className="w-[100%] h-full overflow-y-scroll right_section  px-6 py-10"
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
