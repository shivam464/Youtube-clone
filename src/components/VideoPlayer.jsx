import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ id }) => {
  return (
    <div className="w-full">
      {/* <ReactPlayer
        ref={fircontrst}
        {...rest}
        height="514px"
        width="914px"
        playing={true}
      /> */}

      <iframe
        allow="picture-in-picture; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        width="914"
        height="514"
        allowFullScreen
      ></iframe>

      {/* <iframe
        id="YOUR-IFRAME-ID"
        ref={iframeRef}
        width="914"
        height="514"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        referrerPolicy="no-referrer|same-origin|strict-origin"
        allow="picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};

export default VideoPlayer;
