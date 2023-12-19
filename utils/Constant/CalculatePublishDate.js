// export const calculateVideoUploadDate = () => {};

export function calculateVideoUploadDate(publishedDate) {
  // Get today's date
  console.log("publishedDate", publishedDate);
  const today = new Date();

  // Parse the published date
  const videoPublishedDate = new Date(publishedDate);

  // Calculate the time difference in milliseconds
  const timeDifference = today - videoPublishedDate;

  // Calculate years, months, weeks, days, hours, and minutes
  const millisecondsPerMinute = 1000 * 60;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;
  const millisecondsPerWeek = millisecondsPerDay * 7;
  const millisecondsPerMonth = millisecondsPerDay * 30.44; // Approximate average month length
  const millisecondsPerYear = millisecondsPerDay * 365.25; // Approximate average year length

  const yearsDifference = Math.floor(timeDifference / millisecondsPerYear);
  const monthsDifference = Math.floor(timeDifference / millisecondsPerMonth);
  const weeksDifference = Math.floor(timeDifference / millisecondsPerWeek);
  const daysDifference = Math.floor(timeDifference / millisecondsPerDay);
  const hoursDifference = Math.floor(timeDifference / millisecondsPerHour);
  const minutesDifference = Math.floor(timeDifference / millisecondsPerMinute);

  if (yearsDifference !== 0) {
    return yearsDifference + " years ago";
  } else if (monthsDifference !== 0) {
    return `${monthsDifference} Month${monthsDifference === 1 ? "" : "s"} ago`;
  } else if (weeksDifference !== 0) {
    return `${weeksDifference} week${weeksDifference === 1 ? "" : "s"} ago`;
  } else if (daysDifference !== 0) {
    return `${daysDifference} day${daysDifference === 1 ? "" : "s"} ago`;
  } else if (hoursDifference !== 0) {
    return `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"} ago`;
  } else if (minutesDifference !== 0) {
    return `${minutesDifference} minute${
      minutesDifference === 1 ? "" : "s"
    } ago`;
  }
}
export function formatViews(views) {
  if (views >= 1e9) {
    // If views are in billions
    return Math.trunc((views / 1e9).toFixed(2)) + "B";
  } else if (views >= 1e6) {
    // If views are in millions
    let millions = (views / 1e6).toFixed(2);
    return Math.round(millions * 10) / 10 + "M";
  } else if (views >= 1e3) {
    let millions = (views / 1e3).toFixed(2);
    return Math.round(millions * 10) / 10 + "K";

    // If views are in thousands
    return Math.trunc((views / 1e3).toFixed(2)) + "K";
  } else {
    // If views are less than 1,000
    return views;
  }
}

export const formatVideoTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours > 0 ? `${hours} ` : "00";
  const formattedMinutes = minutes > 0 ? `${minutes}` : "00";
  const formattedSeconds = remainingSeconds > 0 ? `${remainingSeconds}` : "";

  return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
};

// 1- 'e8d5b6025dmsh9905c32f2c6d6dbp160642jsne9f34f6c1bdc'
// 2. '57c2dd9022mshef1259bff51e6f4p14ffb1jsn129a214b30ec'
