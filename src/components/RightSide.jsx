import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { apiConnector } from "../services/apiConnector";

const RightSide = () => {
  const [ProductData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiConnector(
          "GET",
          "https://www.googleapis.com/youtube/v3/videos",
          null,
          null,
          {
            part: "snippet,contentDetails,statistics,status,statistics,topicDetails",
            chart: "mostPopular",
            maxResults: 30,
            key: "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E",
          }
        );
        console.log("res", res.data);
        setProductData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          ProductData.items.map((data, i) => (
            <div className="" key={data.id}>
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
    </div>
  );
};

export default RightSide;
// components/DataDisplay.js
