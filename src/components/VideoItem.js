import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <p>Title:{video.snippet.title}</p>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.description}
      ></img>
    </div>
  );
};

export default VideoItem;
