import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/Slices/apiSlice";

const RightSide = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.api);
  const [images, setimages] = useState([
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      img: "https://i.ytimg.com/vi/iQXBBAj8DAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bWEzfB50DbiyC-7e3aWV3FQhHA",
      name: "How to become a web",
      channel: "Sonny Sangha",
      channel_log:
        "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj",
    },
  ]);

  useEffect(() => {
    dispatch(fetchData()).catch((err) => {
      // Handle the error here, e.g., show an error message
      console.error("Error fetching data:", err);
    });
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div className="" key={i}>
            <div className="rounded-[12px] overflow-hidden relative">
              <img src={img.img} alt="" className=" " />
              <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                19:22
              </span>
            </div>
            <a href="/">
              <div className="flex justify-start items-start py-3">
                <img
                  src={img.channel_log}
                  alt=""
                  className="w-[36px] h-[36px]"
                />
                <div>
                  <h5 className="text-[#0F0F0F] text-[16px] font-medium leading-[2.2rem]">
                    {img.name}
                  </h5>
                  <p className="text-[#606060] text-[14px]">
                    {img.channel}{" "}
                    <span className="text-[white] rounded-full bg-slate-400 w-3 h-3">
                      <AiOutlineCheck />
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
// components/DataDisplay.js
