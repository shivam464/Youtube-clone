import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { apiConnector } from "../services/apiConnector";
import axios from "axios";
const VideoDetailPage = () => {
  const { id } = useParams();
  // const getVideoDetails = async () => {
  //   const res = await apiConnector(
  //     "GET",
  //     "https://www.googleapis.com/youtube/v3/videos",

  //     null,
  //     null,
  //     {
  //       id: id,
  //       part: "snippet",
  //       // chart: "mostPopular",
  //       // maxResults: 10,
  //       key: "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E", // Replace with your actual API key
  //     }
  //   );
  //   console.log("res=...........", res.data.items[0].snippet);
  // };
  // const videoId = id;
  const apiKey = "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E";
  useEffect(() => {
    const videoURL = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=snippet`;

    axios
      .get(videoURL)
      .then((response) => {
        const videoData = response.data.items[0].snippet;
        console.log("videoData=...........", videoData);
        // setVideoData(videoData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // useEffect(async () => {
  //   try {
  //     // getVideoDetails();
  //   } catch (error) {
  //     console.log("error=...........", error);
  //   }
  // }, [id]);

  return (
    <div className="w-full flex  px-[60px]">
      <div className="w-[70%] ">
        <VideoPlayer
          key={id}
          rest={{
            controls: true,
            url: `https://www.youtube.com/embed/${id}`,
            style: { borderRadius: "15px" },
            className: "max-h-514 max-w-914 rounded-full   overflow-hidden",
          }}
        />
      </div>
      <div className="w-[30%] ">
        {Array(18)
          .fill()
          .map((_, index) => (
            <div key={index} className="flex mb-3">
              <div className="max-w-168 rounded-[8px] overflow-hidden max-h-94">
                <img
                  className="w-full h-full"
                  src="https://i.ytimg.com/vi/VjiWpGR82t0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf5bhMnVSOhcnqnH9grjM73e6oYw"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start px-2">
                <p className="font-semibold text-[#0f0f0f] text-[15px]">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <div className="mt-2 flex justify-start items-center">
                  <p className="text-[#606060] text-[13px]">CodingPhase</p>
                  <div
                    className="ms-1 text-[gray]"
                    style={{
                      width: "14px",
                      height: "14px",
                      fill: "currentcolor",
                    }}
                  >
                    <svg
                      height="14px"
                      viewBox="0 0 24 24"
                      width="14px"
                      focusable="false"
                      style={{
                        pointerEvents: "none",
                        display: "block",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[#606060] text-[13px]">
                  <p>1.2M views</p>
                  <span className="w-[3px] h-[3px] bg-[#606060] rounded-full"></span>
                  <p>1 year ago</p>
                </div>
              </div>
            </div>
          ))}

        {/* <div className="flex">
          <div className="max-w-168 rounded-[8px] overflow-hidden max-h-94 ">
            <img
              className="w-full h-full"
              src="https://i.ytimg.com/vi/VjiWpGR82t0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf5bhMnVSOhcnqnH9grjM73e6oYw"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-start px-2">
            <p className="font-semibold  text-[#0f0f0f] text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className=" mt-2 flex justify-start align-middle">
              <p className="text-[#606060] text-[13px]">CodingPhase</p>
              <div
                className="ms-1 text-[gray]"
                style={{ width: "14px", height: "14px", fill: "currentcolor" }}
              >
                <svg
                  height="14px"
                  viewBox="0 0 24 24"
                  width="14px"
                  focusable="false"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center text-[#606060] text-[13px]">
              <p>1.2M views</p>
              <span className="w-[3px] h-[3px] bg-[#606060] rounded-full"></span>
              <p>1 year ago</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VideoDetailPage;
