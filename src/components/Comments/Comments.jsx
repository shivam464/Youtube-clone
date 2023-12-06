import React, { useState, useRef, useEffect } from "react";
import {
  CommentEmoji,
  DisLike,
  HeartIcon,
  LikeIcon,
  SortIcon,
} from "../AllIcons";
import EmojiPicker from "emoji-picker-react";
import Comment from "./Comment.jsx";

const Comments = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  //   const commentInputRef = useRef(null);

  const handleEmojiClick = () => {
    setOpenEmoji(!openEmoji);
  };

  const handleOutsideClick = (event) => {
    console.log("calling");

    setOpenEmoji(false);
  };

  useEffect(() => {
    // when use click outside from emoji to close the emoji option
    if (openEmoji) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [openEmoji]);

  return (
    <div className="mt-7">
      <div className="flex">
        <h1 className="font-semibold">445 Comments</h1>
        <button className="flex ms-7 w-fit items-center">
          <SortIcon height={"24px"} width={"24px"} color={"#606060"} />
          <span className="ms-3">Sort by</span>
        </button>
      </div>
      <div className="flex mt-4">
        <img
          src="https://yt3.ggpht.com/ytc/APkrFKYPIQu12KxF7DkAspO8sPunTjc3kNSC7rQuEg=s88-c-k-c0x00ffffff-no-rj"
          alt=""
          className="rounded-full h-10 w-10"
        />
        <div
          className="ml-3 flex flex-col"
          style={{ width: "-webkit-fill-available" }}
        >
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            className="border-0 border-b-2 p-2  border-[#909090]"
          />
          <div className="flex justify-between items-center mt-3">
            <div
              onClick={handleEmojiClick}
              className="emoji cursor-pointer relative "
            >
              <CommentEmoji height={"24px"} width={"24px"} color={"#606060"} />
            </div>
            <div className="flex">
              <button className="border-0 text-[#000000] border-solid  rounded-full px-4 py-[6px] ">
                Cancel
              </button>
              <button className="bg-[#0000000D] text-[#909090] border-solid  rounded-full px-4 py-[6px] ms-4">
                Comment
              </button>
            </div>
          </div>
          {openEmoji && (
            <div className="absolute bottom-0">
              <EmojiPicker
                autoFocusSearch={true}
                Theme={"auto"}
                lazyLoadEmojis={true}
                searchPlaceholder={"Search emoji"}
              />
            </div>
          )}
        </div>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
