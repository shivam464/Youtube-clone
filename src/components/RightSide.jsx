import React, { useEffect, useLayoutEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { apiConnector } from "../services/apiConnector";
import Loader from "./Loader";
import VideoPlayer from "./VideoPlayer";
import router from "../Routers";
import {
  createSearchParams,
  generatePath,
  useNavigate,
} from "react-router-dom";

const RightSide = () => {
  const navigate = useNavigate();
  const [ProductData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [url, seturl] = useState("");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await apiConnector(
  //         "GET",
  //         "https://www.googleapis.com/youtube/v3/videos",
  //         null,
  //         null,
  //         {
  //           part: "snippet,contentDetails,statistics,status,statistics,topicDetails",
  //           chart: "mostPopular",
  //           maxResults: 30,
  //           key: "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E",
  //         }
  //       );
  //       console.log("res", res.data.items);
  //       setProductData(res.data.items);

  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const loader = document.getElementById("product_loader"); // Assuming you have an element with the id 'loader'
  //     // console.log("loader", loader);
  //     if (loader) {
  //       const loaderTop = loader.getBoundingClientRect().top;
  //       // console.log("loaderTop", loaderTop, "---", window.innerHeight);
  //       if (loaderTop - window.innerHeight <= 0) {
  //         // Loader is in or near the viewport, load more products
  //         fetchMoreVideos();
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const fetchMoreVideos = async () => {

  //   try {
  //     const res = await apiConnector(
  //       "GET",
  //       "https://www.googleapis.com/youtube/v3/videos",
  //       null,
  //       null,
  //       {
  //         part: "snippet,contentDetails,statistics,status,statistics,topicDetails",
  //         chart: "mostPopular",
  //         maxResults: 10,
  //         key: "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E",
  //         pageToken: nextPageToken, // Use the next page token
  //       }
  //     );

  //     // Update the nextPageToken for the next API request
  //     setNextPageToken(res.data.nextPageToken);
  //     console.log("res", res);

  //     // Append the new video data to the existing data
  //     console.log("res.data", ProductData);
  //     setProductData((prevData) => [...prevData, ...res.data.items]);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };
  useLayoutEffect(() => {
    // Function to fetch the initial set of products
    const fetchInitialProducts = async () => {
      try {
        const res = await apiConnector(
          "GET",
          "https://www.googleapis.com/youtube/v3/videos",
          null,
          null,
          {
            part: "snippet,contentDetails,statistics,status,statistics,topicDetails",
            chart: "mostPopular",
            maxResults: 10,
            key: "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E", // Replace with your actual API key
          }
        );

        setProductData(res.data.items);
        setNextPageToken(res.data.nextPageToken);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Function to fetch more products

    // Fetch the initial set of products
    fetchInitialProducts();
  }, []);

  // useEffect(() => {
  //   // console.log("nextPageToken----", nextPageToken);
  //   // const handleScroll = () => {
  //   //   const loader = document.getElementById("product_loader"); // Assuming you have an element with the id 'product_loader'
  //   //   // console.log("loader", loader);
  //   //   if (loader) {
  //   //     const loaderTop = loader.getBoundingClientRect().top;
  //   //     if (loaderTop - window.innerHeight <= 0) {
  //   //       // console.log("nextPageToken", nextPageToken);
  //   //       // Loader is in or near the viewport, load more products
  //   //       fetchMoreVideos();
  //   //     }
  //   //   }
  //   // };
  //   // let myDiv = document.getElementById("video_section");
  //   // console.log("myDiv", myDiv);
  //   // myDiv?.addEventListener("scroll", handleScroll);
  //   if (parentDivRef.current) {
  //     const scrollPosition = parentDivRef.current.scrollTop;
  //     console.log('Parent Div Scroll Position:', scrollPosition);
  //   }
  //   return () => {
  //     myDiv.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const clickhandler = () => {
  //   console.log("nextPageToken", nextPageToken);
  //   fetchMoreVideos(nextPageToken);
  // };
  const getId = (id) => {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
    seturl(id);
    console.log("id", id, "videoUrl", videoUrl);

    // Open the URL in a new tab or window
    // window.open(videoUrl, "_blank");
  };
  const handleScroll = () => {
    if (parentDivRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = parentDivRef.current;

      // Check if the user has scrolled to the bottom of the parent div
      if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
        // Load more content
        setIsLoading(true);
        setTimeout(() => {
          // Simulating an API call to load more data
          setIsLoading(false);
          setPage(page + 1);
          fetchMoreVideos();
        }, 1000);
      }
    }
  };
  useEffect(() => {
    // parentDivRef.current.addEventListener("scroll", handleScroll);
    // return () => {
    //   parentDivRef.current.removeEventListener("scroll", handleScroll);
    // };
  }, [page, isLoading]);
  const fetchMoreVideos = async () => {
    let pagetoken = nextPageToken;
    console.log("data", pagetoken);
    if (pagetoken === null) {
      return; // No more data to fetch
    }

    try {
      const res = await apiConnector(
        "GET",
        "https://www.googleapis.com/youtube/v3/videos",
        null,
        null,
        {
          part: "snippet,contentDetails,statistics,status,statistics,topicDetails",
          chart: "mostPopular",
          maxResults: 3,
          key: "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E",
          pageToken: pagetoken,
        }
      );

      // Update the nextPageToken for the next API request
      setNextPageToken(res.data.nextPageToken);

      // Append the new video data to the existing data
      console.log("res.data===========", res.data);
      setProductData((prevData) => [...prevData, ...res.data.items]);
    } catch (error) {
      setError(error);
    }
  };
  const pushVideo = (id) => {
    // router.navigate("");
    // navigate(`/${id}`);
    // navigate({
    //   pathname: "watch",
    //   search: createSearchParams({
    //     v: id,
    //   }).toString(),
    // });
    navigate({
      pathname: "/watch",
      search: `?v=${id}`,
    });
    // console.log("id", id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {ProductData &&
          ProductData.map((data, i) => (
            <div className="" key={i} onClick={() => pushVideo(data.id)}>
              <div className="rounded-[12px] overflow-hidden relative">
                <img
                  src={data.snippet.thumbnails?.maxres?.url}
                  alt=""
                  className="aspect-ratio-180/101 "
                  onClick={() => getId(data.id)}
                />
                <span className="absolute text-[12px] bg-[black] px-[4px] py-[3px] bottom-[6px] rounded-[4px] right-[9px] text-[white]">
                  19:22
                </span>
              </div>
              <a href="/">
                <div className="flex justify-start items-start py-3">
                  <img
                    src={data.snippet.thumbnails.default.url}
                    alt=""
                    className="w-[36px] h-[36px] mr-[12px]"
                  />
                  <div>
                    <h5 className="text-[#0F0F0F] text-[13px] video_home_title ">
                      {data.snippet.title}
                    </h5>
                    <p className="text-[#606060] text-[14px]">
                      {data.snippet.channelTitle}
                      <span className="text-[white] rounded-full bg-slate-400 w-3 h-3">
                        <AiOutlineCheck />
                      </span>
                    </p>
                    <div>
                      <p>
                        122k views <span>.</span> 3 weeks ago
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
      <div
        id="product_loader"
        className="w-full py-4 flex justify-center align-middle"
      >
        <Loader
          height={30}
          width={30}
          color={"gray"}
          secondaryColor={"light"}
        />
      </div>
    </div>
  );
};

export default RightSide;
// components/DataDisplay.js
