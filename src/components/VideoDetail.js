import React from "react";
import Loading from "./LoadingSpinner";
import { Card } from "antd";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <Card style={{ margin: "10px" }}>
        <Loading />;
      </Card>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Card style={{ margin: "10px", maxWidth: "800px" }}>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
        }}
      >
        <iframe
          title="video player"
          src={videoSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </Card>
  );
};

export default VideoDetail;
