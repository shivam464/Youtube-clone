import React from "react";

import { RxHamburgerMenu } from "react-icons/Rx";
import { RiLiveLine } from "react-icons/Ri";
import { CiBellOn, CiSearch } from "react-icons/Ci";
import { MdKeyboardVoice, MdLiveTv, MdOutlineExplore } from "react-icons/Md";
const Header = () => {
  const Category_list = [
    {
      label: "All",
      Category: "all",
    },
    {
      label: "Live",
      Category: "Live",
    },
    {
      label: "News",
      Category: "News",
    },
    {
      label: "Javascript",
      Category: "Javascript",
    },
    {
      label: "Courts",
      Category: "Courts",
    },
    {
      label: "Website",
      Category: "Website",
    },
    {
      label: "Moon",
      Category: "Moon",
    },
  ];
  return (
    <div>
      <div className="custom-box-shadow">
        <div className="flex items-center justify-between px-3 py-1 md:px-6 md:py-2">
          <div className="flex justify-center items-center">
            <RxHamburgerMenu className="text-2xl cursor-pointer md:inline-block hidden" />
            <a href="/">
              <img
                src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                className="w-auto h-5 md:h-6 md:px-5 cursor-pointer"
                alt=""
              />
            </a>
          </div>
          <div className="w-[40%] md:flex justify-between items-center hidden ">
            <div className="flex items-center  border-solid border-2 rounded-full overflow-hidden w-[95%]">
              <input
                type="text"
                className="bg-transparent ml-2 flex-1  placeholder-gray-400 focus:outline-none px-4 py-2 w-[90%] border-r border-gray-300"
                placeholder="Search"
              />
              <div className="cursor-pointer flex items-center justify-center bg-[#f8f8f8] text-center h-[42px] w-[12%]">
                <CiSearch className="text-2xl inline-block" />
              </div>
            </div>
            <div className="rounded-full bg-slate-100 ml-4 p-2 cursor-pointer">
              <MdKeyboardVoice className="text-2xl" />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <MdLiveTv className="text-2xl hidden md:inline-block my-2 mx-5 font-light" />
            <CiBellOn className="text-2xl my-2 mx-5 font-light hidden md:inline-block" />
            <CiSearch className=" inline-block md:hidden text-[24px] my-2 mx-6 font-light" />
            <div className="rounded-full md:mx-4 h-[24px] w-[24px] md:h-8 md:w-8 flex items-center justify-center bg-[red] text-[white] text-[10px]">
              S
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 border-b  md:hidden border-[#b2b2b294] w-screen flex items-center justify-start no-scrollbar overflow-auto">
        <div className=" border-r-[1px] border-[#0000001A] px-4 mr-4">
          <div className="h-[32px] px-[12px] text-center rounded-lg bg-[#0000000D] flex items-center   ">
            <MdOutlineExplore className="text-2xl" />
          </div>
        </div>
        {Category_list.map(function (item, index) {
          return (
            <div
              key={index}
              className="h-[32px] flex items-center text-center mr-4 bg-[#0000000D] px-4 rounded-lg"
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
