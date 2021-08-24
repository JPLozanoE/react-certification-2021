export const searchYouTube = async (q) => {
  let query = '';
  query = encodeURIComponent(q);
  const response = await fetch(
    `https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&type=video&q=${query}&maxResults=25&key=AIzaSyBcHKyJc52-Fe6zphwEW7gQOvlr6Ie5G8Q`
  );
  const body = await response.json();
  return body;
};
