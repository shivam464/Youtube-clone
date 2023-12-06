import React from "react";
import { DisLike, HeartIcon, LikeIcon } from "../AllIcons";

const Comment = () => {
  return (
    <div className="flex items-start my-5">
      <img
        src="https://yt3.ggpht.com/ytc/APkrFKYPIQu12KxF7DkAspO8sPunTjc3kNSC7rQuEg=s88-c-k-c0x00ffffff-no-rj"
        alt=""
        className="rounded-full h-10 w-10"
      />
      <div className="ml-3">
        <div className="flex items-center justify-start">
          <p className="text-[13px] text-[#0F0F0F] font-bold">@thehowerd8634</p>
          <span className="ms-3 text-[12px] text-[#606060]">
            1 year ago (edited)
          </span>
        </div>

        <p className="text-[14px] text-[#0F0F0F] mt-2">
          Earlier i completed a tutorial of yours in Udemy on rest apis and it
          was also very well explained. This video is the first one of yours i'm
          watching in YouTube and it is so nice.. anybody can understand it.
          This video deserves a 1000 likes and comment!! Thank you very much!!
        </p>
        <div className="flex items-center ">
          <LikeIcon height={"25px"} width={"25px"} color={"#000000"} />
          <span className="px-2 me-4">8</span>
          <DisLike height={"25px"} width={"25px"} color={"#000000"} />
          <div className="relative ms-4">
            <img
              src="https://yt3.ggpht.com/ytc/APkrFKZwRfP0aLSQVcX-8BFpsMfqdMa6ZpOOccvn5FbL=s176-c-k-c0x00ffffff-no-rj"
              alt=""
              className="w-[20px] h-[20px] rounded-full"
            />
            <span className="absolute bottom-[-4px] right-[-1px] ">
              <HeartIcon height={"14px"} width={"14px"} color={"red"} />
            </span>
          </div>
          <button className="font-bold text-[#0F0F0F] border-solid  rounded-full px-4 py-[6px] ms-4 text-[12px]">
            reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
