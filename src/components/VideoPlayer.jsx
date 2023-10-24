import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ rest }) => {
  return (
    <div className="w-full">
      <ReactPlayer {...rest} height="514px" width="914px" />
    </div>
  );
};

export default VideoPlayer;
