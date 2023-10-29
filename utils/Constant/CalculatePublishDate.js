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
