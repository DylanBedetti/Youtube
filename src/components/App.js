import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("sheep");
  }, []);

  const onTermSubmit = async (query) => {
    const response = await youtube.get("/search", {
      params: { q: query },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <Layout style={{ background: "white", height: "100vh" }}>
      <Header theme="light" style={{ background: "inherit" }}>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <SearchBar onTermSubmit={onTermSubmit} />
        </div>
      </Header>
      <Layout style={{ background: "inherit" }}>
        <Content>
          <VideoDetail video={selectedVideo} />
        </Content>
        <Sider style={{ background: "inherit" }} width="400">
          <VideoList
            videos={videos}
            onVideoSelect={setSelectedVideo} // same as (video) => setSelectedVideo(video)
          />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
