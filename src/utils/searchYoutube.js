export const searchYouTube = async (q) => {
  let query = '';
  query = encodeURIComponent(q);
  const response = await fetch(
    `https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&type=video&q=${query}&maxResults=24&key=AIzaSyCQUJrHf92vQ7ho_ebgMpfaXurIYda5oMc`
  );
  const body = await response.json();
  return body;
};
