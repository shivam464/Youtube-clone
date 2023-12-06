import React from "react";
import { RightIcon, VerifyIcon } from "../components/AllIcons";
import { Link } from "react-router-dom";
import ChannelTabs from "../components/ChannelTabs";

const ChannelDetail = () => {
  return (
    <div>
      <div className="w-[100%] flex justify-center items-center ">
        <div className="w-[84%]">
          <div className="rounded-[15px] overflow-hidden">
            <img
              src="https://yt3.googleusercontent.com/nQxZwEfVWgF8zhdqc3gWTFmnDY21uPt6KMxw0m0-pRgW_lOt8jjAAfmFsC6ZRkMjZO-MeCxN6Q=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              alt=""
            />
          </div>
          <div className="flex justify-start items-start my-6 ">
            <div className="rounded-full overflow-hidden mx-5">
              <img
                className="w-[160px] h-[160px]"
                src="https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-start ms-5">
              <div className="flex justify-start items-center">
                <h1 className="text-[36px] text-[#0f0f0f] font-semibold me-2 ">
                  Fireship
                </h1>
                <VerifyIcon height={"14px"} width={"14px"} color={"#606060"} />
              </div>
              <div className="flex justify-start items-center text-[14px] text-[#606060]">
                <span>@Fireship</span>
                <span className="w-[2px] h-[2px] bg-[#606060] rounded mx-2"></span>
                <span>2.53M subscribers</span>
                <span className="w-[2px] h-[2px] bg-[#606060] rounded mx-2"></span>
                <span>586 videos</span>
              </div>
              <div className="text-[15px] cursor-pointer">
                <span className="flex justify-start items-center">
                  <p className="text-[#606060] overflow-ellipsis max-w-[630px] leading-loose">
                    High-intensity ⚡ code tutorials and tech news to help you
                    ship your app faster. New videos every week covering the
                    topics every programmer should know. programmer should know.
                  </p>
                  <RightIcon height={"25px"} width={"25px"} color={"#606060"} />
                </span>

                <p>
                  <Link className="text-[#065fd4]" to="">
                    fireship.io{" "}
                  </Link>
                  <span className="text-[#0F0F0F] text-[15px] font-semibold ">
                    and 5 more links
                  </span>
                </p>
              </div>
              <div className="mt-2">
                <button className="bg-[black] w-fit text-[white] border-solid border-[1px] rounded-full px-4 py-[6px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <ChannelTabs />
      </div> */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="">
            <div className="rounded-[12px] overflow-hidden relative">
              <img
                src="https://i.ytimg.com/vi/ANCm3oG7htM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhU7IIDvWwHbWVjiLjPk00e_Erg"
                alt=""
                className="aspect-ratio-180/101 "
              />
              <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                19:22
              </span>
            </div>
            <a href="/">
              <div className="flex justify-start items-start py-3">
                {/* <img src="" alt="" className="w-[36px] h-[36px] mr-[12px]" /> */}
                <div>
                  <p className="text-[#0F0F0F] video_home_title text-[14px] leading-relaxed">
                    10 JavaScript changes you missed in 2023
                  </p>

                  <div className="text-[#606060] text-[13px] leading-loose">
                    <p className="flex items-center ">
                      122k views <span>.</span> 3 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="">
            <div className="rounded-[12px] overflow-hidden relative">
              <img
                src="https://i.ytimg.com/vi/ANCm3oG7htM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhU7IIDvWwHbWVjiLjPk00e_Erg"
                alt=""
                className="aspect-ratio-180/101 "
              />
              <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                19:22
              </span>
            </div>
            <a href="/">
              <div className="flex justify-start items-start py-3">
                {/* <img src="" alt="" className="w-[36px] h-[36px] mr-[12px]" /> */}
                <div>
                  <p className="text-[#0F0F0F] video_home_title text-[14px] leading-relaxed">
                    10 JavaScript changes you missed in 2023
                  </p>

                  <div className="text-[#606060] text-[13px] leading-loose">
                    <p className="flex items-center ">
                      122k views <span>.</span> 3 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="">
            <div className="rounded-[12px] overflow-hidden relative">
              <img
                src="https://i.ytimg.com/vi/ANCm3oG7htM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhU7IIDvWwHbWVjiLjPk00e_Erg"
                alt=""
                className="aspect-ratio-180/101 "
              />
              <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                19:22
              </span>
            </div>
            <a href="/">
              <div className="flex justify-start items-start py-3">
                {/* <img src="" alt="" className="w-[36px] h-[36px] mr-[12px]" /> */}
                <div>
                  <p className="text-[#0F0F0F] video_home_title text-[14px] leading-relaxed">
                    10 JavaScript changes you missed in 2023
                  </p>

                  <div className="text-[#606060] text-[13px] leading-loose">
                    <p className="flex items-center ">
                      122k views <span>.</span> 3 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="">
            <div className="rounded-[12px] overflow-hidden relative">
              <img
                src="https://i.ytimg.com/vi/ANCm3oG7htM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhU7IIDvWwHbWVjiLjPk00e_Erg"
                alt=""
                className="aspect-ratio-180/101 "
              />
              <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                19:22
              </span>
            </div>
            <a href="/">
              <div className="flex justify-start items-start py-3">
                {/* <img src="" alt="" className="w-[36px] h-[36px] mr-[12px]" /> */}
                <div>
                  <p className="text-[#0F0F0F] video_home_title text-[14px] leading-relaxed">
                    10 JavaScript changes you missed in 2023
                  </p>

                  <div className="text-[#606060] text-[13px] leading-loose">
                    <p className="flex items-center ">
                      122k views <span>.</span> 3 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="">
            <div className="rounded-[12px] overflow-hidden relative">
              <img
                src="https://i.ytimg.com/vi/ANCm3oG7htM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhU7IIDvWwHbWVjiLjPk00e_Erg"
                alt=""
                className="aspect-ratio-180/101 "
              />
              <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                19:22
              </span>
            </div>
            <a href="/">
              <div className="flex justify-start items-start py-3">
                {/* <img src="" alt="" className="w-[36px] h-[36px] mr-[12px]" /> */}
                <div>
                  <p className="text-[#0F0F0F] video_home_title text-[14px] leading-relaxed">
                    10 JavaScript changes you missed in 2023
                  </p>

                  <div className="text-[#606060] text-[13px] leading-loose">
                    <p className="flex items-center ">
                      122k views <span>.</span> 3 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="">
            <div className="rounded-[12px] overflow-hidden relative">
              <img
                src="https://i.ytimg.com/vi/ANCm3oG7htM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhU7IIDvWwHbWVjiLjPk00e_Erg"
                alt=""
                className="aspect-ratio-180/101 "
              />
              <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                19:22
              </span>
            </div>
            <a href="/">
              <div className="flex justify-start items-start py-3">
                {/* <img src="" alt="" className="w-[36px] h-[36px] mr-[12px]" /> */}
                <div>
                  <p className="text-[#0F0F0F] video_home_title text-[14px] leading-relaxed">
                    10 JavaScript changes you missed in 2023
                  </p>

                  <div className="text-[#606060] text-[13px] leading-loose">
                    <p className="flex items-center ">
                      122k views <span>.</span> 3 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
