import React from "react";
import VideoCard from "../components/VideoCard";
const SearchResults = () => {
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="w-[70%]">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default SearchResults;
