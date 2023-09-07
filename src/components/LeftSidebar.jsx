import React from "react";

import { GoHomeFill, GoHistory } from "react-icons/Go";
// import {
//   AiOutlineLike,
//   AiOutlineShopping,
//   AiOutlineBulb,
// } from "react-icons/Ai";
// import { FaFire } from "react-icons/Fa";
// import { GiHanger } from "react-icons/Gi";
// import { PiQuestionLight } from "react-icons/Pi";
// import { RiFeedbackLine } from "react-icons/Ri";
// import { HiOutlineNewspaper } from "react-icons/hi";
// import { SiYoutubegaming } from "react-icons/Si";
// import { CiTrophy, CiFlag1 } from "react-icons/Ci";
// import { IoMusicalNoteOutline, IoSettingsOutline } from "react-icons/Io";
// import {
//   MdOutlineSubscriptions,
//   MdVideoLibrary,
//   MdOutlineWatchLater,
//   MdMovie,
// } from "react-icons/Md";

// const leftsidedata = [
//   {
//     maincate: [
//       {
//         icon: <GoHomeFill />,
//         label: "Home",
//       },
//       {
//         icon: "https://static.wikia.nocookie.net/logopedia/images/4/4e/YouTube_Shorts_%28Outline%29.svg/revision/latest?cb=20221201213331",
//         label: "Shorts",
//       },
//       {
//         icon: <MdOutlineSubscriptions />,
//         label: "Subscriptions",
//       },
//       {
//         icon: <MdVideoLibrary />,
//         label: "Library",
//       },
//       {
//         icon: <GoHistory />,
//         label: "History",
//       },
//       {
//         icon: <MdOutlineWatchLater />,
//         label: "Watch Later",
//       },
//       {
//         icon: <AiOutlineLike />,
//         label: "Liked Videos",
//       },
//     ],
//   },
//   {
//     Explore: [
//       {
//         icon: <FaFire />,
//         label: "Tranding",
//       },
//       {
//         icon: <AiOutlineShopping />,
//         label: "shopping",
//       },
//       {
//         icon: <IoMusicalNoteOutline />,
//         label: "music",
//       },
//       {
//         icon: <MdMovie />,
//         label: "Movies",
//       },
//       {
//         icon: "",
//         label: "Live",
//       },
//       {
//         icon: <SiYoutubegaming />,
//         label: "Gaming",
//       },
//       {
//         icon: <HiOutlineNewspaper />,
//         label: "News",
//       },
//       {
//         icon: <CiTrophy />,
//         label: "Sports",
//       },
//       {
//         icon: <AiOutlineBulb />,
//         label: "Learning",
//       },
//       {
//         icon: <GiHanger />,
//         label: "Fashion & Beauty",
//       },
//     ],
//   },
//   {
//     more_from_youtube: [
//       {
//         icon: "https://logowik.com/content/uploads/images/youtube-premium8029.logowik.com.webp",
//         label: "Youtube Premium",
//       },
//       {
//         icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/768px-Youtube_Music_icon.svg.png?20230802004652",
//         label: "Youtube Music",
//       },
//       {
//         icon: "https://www.pngitem.com/pimgs/m/179-1793195_youtube-kids-logo-hd-png-download.png",
//         label: "Youtube Kids",
//       },
//     ],
//   },
//   {
//     others: [
//       {
//         icon: <IoSettingsOutline />,
//         label: "Settings",
//       },
//       {
//         icon: <CiFlag1 />,
//         label: "Report History",
//       },
//       {
//         icon: <PiQuestionLight />,
//         label: "Send feedback",
//       },
//       {
//         icon: <RiFeedbackLine />,
//         label: "Help",
//       },
//     ],
//   },
// ];

const LeftSidebar = () => {
  return (
    <div className="w-[100%] px-3 py-2">
      <div className="flex items-center justify-start bg-[#f8f8f8] rounded-lg p-[12px] text-[#0f0f0f]">
        <GoHomeFill className="text-[24px] mr-[24px]" />
        <span>Home</span>
      </div>
      <div className="flex items-center justify-start  rounded-lg p-[12px] text-[#0f0f0f]">
        {/* <img
          src="https://static.wikia.nocookie.net/logopedia/images/4/4e/YouTube_Shorts_%28Outline%29.svg/revision/latest?cb=20221201213331"
          alt="YouTube Shorts Logo"
        /> */}

        {/* <GoHomeFill className="text-[24px] mr-[24px]" /> */}
        <span>Shorts</span>
      </div>
      <div className="flex items-center justify-start hover:bg-[#f8f8f8] rounded-lg p-[12px] text-[#0f0f0f]">
        <GoHomeFill className="text-[24px] mr-[24px]" />
        <span>Home</span>
      </div>
      <div className="flex items-center justify-start hover:bg-[#f8f8f8] rounded-lg p-[12px] text-[#0f0f0f]">
        <GoHomeFill className="text-[24px] mr-[24px]" />
        <span>Home</span>
      </div>
      <div className="flex items-center justify-start hover:bg-[#f8f8f8] rounded-lg p-[12px] text-[#0f0f0f]">
        <GoHomeFill className="text-[24px] mr-[24px]" />
        <span>Home</span>
      </div>
      <div className="flex items-center justify-start hover:bg-[#f8f8f8] rounded-lg p-[12px] text-[#0f0f0f]">
        <GoHomeFill className="text-[24px] mr-[24px]" />
        <span>Home</span>
      </div>
      <div className="flex items-center justify-start hover:bg-[#f8f8f8] cursor-pointer rounded-lg p-[12px] text-[#0f0f0f]">
        <GoHomeFill className="text-[24px] mr-[24px]" />
        <span>Home</span>
      </div>
    </div>
  );
};

export default LeftSidebar;
