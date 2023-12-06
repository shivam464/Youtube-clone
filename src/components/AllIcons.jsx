import React from "react";

export const VerifyIcon = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "none",
    display: "block",
  };
  return (
    <div style={svgStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="24"
        viewBox="0 0 24 24"
        // width="24"
        focusable="false"
        style={svgStyle}
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
      </svg>
    </div>
  );
};
export const RightIcon = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "pointer-events",
    display: "block",
  };
  return (
    <div style={svgStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="24"
        viewBox="0 0 24 24"
        // width="24"
        focusable="false"
        style={svgStyle}
      >
        <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
      </svg>
    </div>
  );
};

export const DisLike = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "pointer-events",
    display: "block",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // height="24"
      viewBox="0 0 24 24"
      // width="24"
      focusable="false"
      style={svgStyle}
    >
      <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
    </svg>
  );
};
export const LikeIcon = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "pointer-events",
    display: "block",
    transform: "rotate(180deg)",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      focusable="false"
      style={svgStyle}
    >
      <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
    </svg>
  );
};
export const ShareIcon = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "pointer-events",
    display: "block",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // height="24"
      viewBox="0 0 24 24"
      // width="24"
      focusable="false"
      style={svgStyle}
    >
      <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
    </svg>
  );
};
export const DotIcon = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "pointer-events",
    display: "block",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // height="24"
      viewBox="0 0 24 24"
      // width="24"
      focusable="false"
      style={svgStyle}
    >
      <path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
    </svg>
  );
};
export const SortIcon = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "pointer-events",
    display: "block",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      // height="24"
      viewBox="0 0 24 24"
      // width="24"
      focusable="false"
      style={svgStyle}
    >
      <path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path>
    </svg>
  );
};
export const CommentEmoji = ({ width, height, color }) => {
  const svgStyle = {
    width: width,
    height: height,
    fill: color,
    pointerEvents: "pointer-events",
    display: "block",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      // height="24"
      viewBox="0 0 24 24"
      // width="24"
      focusable="false"
      style={svgStyle}
    >
      <path d="M15.83 15c-.52 1.38-2.19 2-3.79 2-1.59 0-3.28-.62-3.85-2h7.64m.69-1H7.49c-.27 0-.49.22-.46.47C7.34 16.83 9.7 18 12.05 18c2.35 0 4.69-1.18 4.93-3.54.03-.25-.2-.46-.46-.46zM12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.94 9.73C7.19 9.25 7.72 9 8.5 9c.75 0 1.28.25 1.57.75.14.24.45.32.68.18.24-.14.32-.44.18-.68C10.6 8.68 9.91 8 8.5 8c-1.48 0-2.15.69-2.44 1.27-.13.25-.03.55.21.67.07.04.15.06.23.06.18 0 .36-.1.44-.27zm7 0c.25-.48.78-.73 1.56-.73.75 0 1.28.25 1.57.75.14.24.45.32.68.18.24-.14.32-.44.18-.68C17.6 8.68 16.91 8 15.5 8c-1.48 0-2.15.69-2.44 1.27-.13.25-.03.55.21.67.07.04.15.06.23.06.18 0 .36-.1.44-.27z"></path>
    </svg>
  );
};
export const HeartIcon = () => {
  const svgStyle = {
    width: "13px",
    height: "13px",
    fill: "red",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      focusable="false"
      style={svgStyle}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

// export default VerifyIcon;
