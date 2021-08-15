const fetch = require("node-fetch");
const baseURL = "https://api.itariq.dev/memes";

module.exports = async function getArMemes(type) {
  if (typeof type !== "string") {
    throw new TypeError("[Memes Scapper] Type must be string.");
  }
  if (type === "image") {
    const req = await fetch(baseURL);
    const res = await req.json();
    const images = res.ar.images.forEach((img) => console.log(img));
  } else if (type === "video") {
    const req = await fetch(baseURL);
    const res = await req.json();
    const videos = res.ar.videos.forEach((vid) => console.log(vid));
  }
};
