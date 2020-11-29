import axios from "axios";

// const KEY1 = "AIzaSyB4tGn1bcn7lYTbFKzYabxzbi5I9ZTaEyY";
const KEY = "AIzaSyAg1_NHIZphGOR1BmZCC3MpWs1kbYSo3VE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
