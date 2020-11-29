import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("cows");
  }

  onTermSubmit = async (query) => {
    const response = await youtube.get("/search", {
      params: { q: query },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Layout style={{ background: "white", height: "100vh" }}>
        <Header theme="light" style={{ background: "inherit" }}>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <SearchBar onTermSubmit={this.onTermSubmit} />
          </div>
        </Header>
        <Layout style={{ background: "inherit" }}>
          <Content>
            <VideoDetail video={this.state.selectedVideo} />
          </Content>
          <Sider style={{ background: "inherit" }} width="400">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </Sider>
        </Layout>
        {/* <Footer style={{ background: "red", position: "sticky", bottom: "0" }}>
          Footer
        </Footer> */}
      </Layout>
    );
  }
}

export default App;
