import React, { useEffect, useLayoutEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { apiConnector } from "../services/apiConnector";
import Loader from "./Loader";
import VideoPlayer from "./VideoPlayer";
import router from "../Routers";

import HomePageVideoCard from "./HomePageVideoCard";

const RightSide = () => {
  const [ProductData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nexttokens, setNexttokens] = useState(null);

  // const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    // Function to fetch the initial set of products
    const fetchInitialProducts = async () => {
      setLoading(true);
      try {
        // new api key='83dde0dc12msh4dcfc34a38f9b97p1d19bejsn58a438d56bf8'
        let headers = {
          "X-RapidAPI-Key":
            "57c2dd9022mshef1259bff51e6f4p14ffb1jsn129a214b30ec",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        };
        const res = await apiConnector(
          "GET",
          "https://youtube138.p.rapidapi.com/home/",
          null,
          headers,
          { hl: "en", gl: "IN" }
        );
        console.log("first res ", res);
        // nextapicall(res.data.cursorNext);
        setProductData(res.data);
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
  const nextapicall = async (nexttok) => {
    // console.log("nexttok>>>>..", nexttok);
    // console.log("type of", typeof nexttok);
    try {
      // new api key='83dde0dc12msh4dcfc34a38f9b97p1d19bejsn58a438d56bf8'
      let headers = {
        "X-RapidAPI-Key": "e8d5b6025dmsh9905c32f2c6d6dbp160642jsne9f34f6c1bdc",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      };
      const res = await apiConnector(
        "GET",
        "https://youtube138.p.rapidapi.com/home/?hl=en&gl=IN",
        null,
        headers,
        { cursor: nexttok }
      );
      console.log("after token res ", res);
      setProductData(res.data.items);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
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
          ProductData.contents.map((data, i) => (
            <HomePageVideoCard data={data.video} key={i} />
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
