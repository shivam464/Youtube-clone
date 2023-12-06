// import { useEffect, useState } from "react";
import { RouterProvider, useRouteError } from "react-router-dom";
import "./App.css";
import React, { useEffect, useRef } from "react";
// import router from "../src/Routers";
import Header from "./layout/Header";
// import RightSide from "./components/RightSide";
import LeftSidebar from "./components/LeftSidebar";
import router from "./Routers";

// import DataDisplay from './components/DataDisplay';
function App() {
  const parentDivRef = useRef(null);
  function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang!</div>;
  }

  // const checkInUrl = () => {
  //   // console.log("window.location.href", window.location.href.indexOf("watch"));
  //   let ispresent=window.location.href.indexOf("watch")
  //   if(ispresent ==-1){
  //     return false;
  //   }
  //   return true
  // };
  return (
    <div className="h-[95vh] app">
      <Header />
      <div className="w-full flex  h-[calc(100vh-61.2px)]">
        {/* ------hide for now-------- */}
        <div className="lg:w-[17%] h-full overflow-hidden hover:overflow-y-scroll px-[6px] hidden md:block">
          <LeftSidebar />
        </div>
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
          className="w-[100%] h-full overflow-y-scroll right_section  px-6 "
        >
          <RouterProvider exact router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
