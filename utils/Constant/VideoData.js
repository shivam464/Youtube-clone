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
// export function getChannelData(channerId){

// }
