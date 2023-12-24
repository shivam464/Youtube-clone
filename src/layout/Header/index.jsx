import React, { useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/Rx";
import { RiLiveLine } from "react-icons/Ri";
import { CiBellOn, CiSearch } from "react-icons/Ci";
import { MdKeyboardVoice, MdLiveTv, MdOutlineExplore } from "react-icons/Md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../components/AllIcons";
import { apiConnector } from "../../services/apiConnector";

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
const Header = () => {
  // const navigate = useNavigate();
  const [SearchInput, setSearchInput] = useState("");
  const [autoComplete, setautoComplete] = useState([]);

  useEffect(() => {
    let searchINPUT = setTimeout(() => {
      if (SearchInput) {
        FetchAutoComplete();
      }
    }, 200);

    return () => clearTimeout(searchINPUT);
  }, [SearchInput]);

  const FetchAutoComplete = async () => {
    try {
      const res = await apiConnector(
        "GET",
        "https://clients1.google.com/complete/search",
        null,
        null,
        {
          client: "youtube",
          gs_ri: "youtube",
          ds: "yt",
          q: SearchInput,
        }
      );
      // const res = await fetch(
      //   `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${SearchInput}`
      // );
      // console.log("res", res);
      const str = res.data;

      // Parse JSON safely
      let arr;
      try {
        arr = JSON.parse(
          str.substring(str.indexOf("["), str.indexOf("])") + 1)
        );
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return []; // Return an empty array in case of parsing error
      }

      // Use array indexing directly
      let suggestionsTuple = [];
      if (Array.isArray(arr) && Array.isArray(arr[1])) {
        suggestionsTuple = arr[1];
      }

      const suggestions = suggestionsTuple
        .flatMap((suggestion) => suggestion)
        .filter((suggestion) => typeof suggestion === "string");
      console.log("suggestions", suggestions);
      setautoComplete(suggestions);
      // return suggestions;
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return []; // Return an empty array in case of fetch error
    }
  };
  const SearchButtonHandler = () => {
    console.log("SearchInput", SearchInput);
    // navigate({
    //   pathname: "/results",
    //   search: `?search_query=${SearchInput}`,
    // });
  };
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
            <div className="relative w-[95%]">
              <div className="flex items-center  border-solid border-2 rounded-full  w-full overflow-hidden">
                <div className="w-full ">
                  <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={SearchInput}
                    type="text"
                    className="bg-transparent ml-2 flex-1  placeholder-gray-400 focus:outline-none px-4 py-2  border-r border-gray-300 w-full"
                    placeholder="Search"
                  />
                </div>

                <div
                  className="cursor-pointer flex items-center justify-center bg-[#f8f8f8] text-center h-[42px] w-[12%] border-l-[1.6px] border-gray-200 border-solid "
                  onClick={() => SearchButtonHandler()}
                >
                  <CiSearch className="text-2xl inline-block" />
                </div>
              </div>
              {autoComplete?.length != 0 && SearchInput ? (
                <div className="w-full h-auto left-0 right-0 border-solid absolute top-[45px]">
                  <div>
                    <ul className="text-[1.1rem] text-[#222] bg-[#fff] py-[16px]  rounded-lg border border-solid border-gray-300  shadow-md cursor-default">
                      {autoComplete &&
                        autoComplete.map((label, index) => {
                          return (
                            <li
                              key={index}
                              className="px-[15px] py-[2px] suggestion_list"
                            >
                              <div className="flex items-center w-full justify-start">
                                <div className="me-4">
                                  <SearchIcon width={"18px"} height={"18px"} />
                                </div>
                                <div>{label}</div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              ) : null}
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
