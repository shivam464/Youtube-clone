import React from "react";
import { useNavigate } from "react-router-dom";
import { VerifyIcon, LiveIcon } from "../components/AllIcons";
import {
  formatViews,
  formatVideoTime,
} from "../../utils/Constant/CalculatePublishDate";
// import Moment from 'react-moment';
const HomePageVideoCard = ({ data }) => {
  const navigate = useNavigate();
  const pushVideo = (id) => {
    navigate({
      pathname: "/watch",
      search: `?v=${id}`,
    });
  };
  // console.log(moment.duration(100, "seconds").format());
  return (
    <div className="" onClick={() => pushVideo(data.videoId)}>
      <div className="rounded-[12px] overflow-hidden relative">
        <img
          src={data?.thumbnails[1]?.url ?? data?.thumbnails[0]?.url}
          alt="thumbnail"
          className="aspect-ratio-180/101 "
        />
        <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
          {formatVideoTime(data.lengthSeconds)}
        </span>
      </div>
      <a href="/">
        <div className="flex justify-start items-start py-3">
          <div className="rounded-full flex justify-center items-center overflow-hidden w-[36px] h-[36px]">
            <img src={data?.author?.avatar[0]?.url} alt="channel thumbnail" />
          </div>
          <div className="ps-3 w-[90%]">
            <h5 className="text-[#0F0F0F] text-[15px] video_home_title abc">
              {data.title}
            </h5>
            <p className="text-[#606060] text-[14px] flex items-center mt-1">
              {/* {data.title} */}
              {data?.author?.title}
              {data?.author?.badges[0]?.text == "Verified" ? (
                <span className="ms-2">
                  <VerifyIcon
                    height={"14px"}
                    width={"14px"}
                    color={"#606060"}
                  />
                </span>
              ) : null}
            </p>
            <div>
              <p className="text-[14px] text-[#606060] flex items-center">
                {formatViews(data.stats?.views || data.stats?.viewers)} views
                {data.publishedTimeText && (
                  <span className="w-[2px] h-[2px] bg-[#606060] rounded mx-1"></span>
                )}
                {data.publishedTimeText && (
                  <span>{data.publishedTimeText}</span>
                )}
              </p>
              {data.badges.indexOf("LIVE") != -1 ? (
                <div className="flex items-center bg-[rgba(204,0,0,0.9)] w-fit text-[white] text-[12px] font-bold px-1 rounded-s-sm mt-[2px]">
                  <LiveIcon height={"14px"} width={"14px"} color={"white"} />
                  <span className="ms-1">LIVE</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomePageVideoCard;
