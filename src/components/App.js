import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("sheep");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <Layout style={{ background: "white", height: "100vh" }}>
      <Header theme="light" style={{ background: "inherit" }}>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <SearchBar onTermSubmit={search} />
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
