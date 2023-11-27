// export function getvideodata(){
// const axios = require('axios');
// }
import axios from "axios";
export function getvideodata(channelId) {
  const apiKey = "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E";
  const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;

  return axios
    .get(apiUrl)
    .then((response) => {
      const thumbnailUrl = response.data.items[0];
      return thumbnailUrl;
    })
    .catch((error) => {
      throw new Error("Error fetching channel thumbnail: " + error);
    });
}
export function SuggestionVideos(videoId) {
  const apikey = "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E";
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${videoId}&key=${apikey}`;
  try {
    return axios.get(apiUrl).then((response) => {
      const suggestionVideos = response.data.items;
      return suggestionVideos;
    });
  } catch (error) {
    throw new Error("Error fetching suggestion videos: " + error);
  }
}
