import React from "react";

const VideoCard = () => {
  const svgStyle = {
    width: "14px",
    height: "14px",
    fill: "currentcolor",
    pointerEvents: "none",
    display: "block",
  };
  return (
    <div className="flex justify-start items-start mb-[20px]">
      <div className="max-w-[360px] mr-[20px] rounded-lg overflow-hidden">
        <img
          src="https://i.ytimg.com/vi/6mcAg0zNLmI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6afhxC7OMLWS2vVmWyPwpyqNnBg"
          alt=""
        />
      </div>
      <div>
        <h4 className="text-[18px] text-[#0F0F0F]">
          GAME (Full Video) Shooter Kahlon | Sidhu Moose Wala | Hunny PK Films |
          Gold Media | 5911 Records
        </h4>
        <div className="flex justify-between items-center text-[#626262] text-[12px] max-w-[17%] mt-[3px]">
          <p>888k views</p>
          <span className="w-[3px] h-[3px] rounded-full bg-[gray]"></span>
          <p>3 year ago</p>
        </div>
        <div className="flex justify-start items-center my-[15px] text-[#626262]">
          <div className=" w-[24px] h-[24px] rounded-full overflow-hidden">
            <img
              className="max-w-[100%]"
              src="https://yt3.ggpht.com/ytc/APkrFKY8wf5AURpsURfn9d6LezFBWzku4lauBVGyoqK7rA=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <p className="mx-[12px] text-[12px]">Total Gaming</p>
          <div style={svgStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={svgStyle}
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
            </svg>
          </div>
        </div>

        <p className="text-[12px] text-[#626262] mb-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          nulla dolores suscipit distinctio modi qui laboriosam provident animi
        </p>
        <div className="px-[4px] py-[0px] bg-[#e5e5e5] text-[#262626] text-[12px] max-w-min rounded">
          New
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
