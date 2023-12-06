import React from "react";
import { useNavigate } from "react-router-dom";
import { VerifyIcon } from "../components/AllIcons";

const HomePageVideoCard = ({ data }) => {
  const navigate = useNavigate();
  const pushVideo = (id) => {
    navigate({
      pathname: "/watch",
      search: `?v=${id}`,
    });
  };
  return (
    <div className="" onClick={() => pushVideo(data.id)}>
      <div className="rounded-[12px] overflow-hidden relative">
        <img
          src={data.snippet.thumbnails?.maxres?.url}
          alt=""
          className="aspect-ratio-180/101 "
        />
        <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
          19:22
        </span>
      </div>
      <a href="/">
        <div className="flex justify-start items-start py-3">
          <div className="rounded-full flex justify-center items-center overflow-hidden w-[36px] h-[36px]">
            <img
              src={
                "https://yt3.ggpht.com/ytc/APkrFKZkZXoBCHoZnv2HohC8bbKiGO1F8l4PJqTpWZeI=s68-c-k-c0x00ffffff-no-rj"
              }
              alt=""
            />
          </div>
          <div className="ps-3 w-[90%]">
            <h5 className="text-[#0F0F0F] text-[13px] video_home_title abc">
              Why I Deleted All My Videos All My Videos All My VideosAll My
              VideosAll abcndndcfdafadsafdfwfger...
            </h5>
            <p className="text-[#606060] text-[14px] flex items-center">
              {data.snippet.channelTitle}
              <span className="ms-2">
                <VerifyIcon height={"14px"} width={"14px"} color={"#606060"} />
              </span>
            </p>
            <div>
              <p className="text-[14px] text-[#606060] flex items-center">
                122k views
                <span className="w-[2px] h-[2px] bg-[#606060] rounded mx-1"></span>
                3 weeks ago
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomePageVideoCard;
