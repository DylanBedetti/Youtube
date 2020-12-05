import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (query) => {
    const response = await youtube.get("/search", {
      params: { q: query },
    });

    setVideos(response.data.items);
  };

  return [videos, search] //following react conventions, a piece of state, and a method to update that piece of state
};

export default useVideos;
