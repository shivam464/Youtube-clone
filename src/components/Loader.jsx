import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ height, width, color, secondaryColor }) => {
  return (
    <div>
      <Oval
        height={height}
        width={width}
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={secondaryColor}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
