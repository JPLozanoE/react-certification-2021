export const searchYouTube = async (q) => {
  let query = '';
  query = encodeURIComponent(q);
  const response = await fetch(
    `https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&type=video&q=${query}&maxResults=24&key=AIzaSyC1ZzXO8WTf_rNDZbxiR7_C10WiDJGAISQ`
  );
  const body = await response.json();
  return body;
};
