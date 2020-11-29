import React from "react";
import Loading from "./LoadingSpinner";
import { List, Avatar, Card } from "antd";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <Card style={{ margin: "10px" }}>
      <List
        itemLayout="horizontal"
        dataSource={videos}
        size="large"
        locale={{ emptyText: <Loading /> }}
        renderItem={(item) => (
          <List.Item
            style={{ cursor: "pointer" }}
            onClick={() => onVideoSelect(item)} // this smort
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  shape="square"
                  size={{
                    xs: 40,
                    sm: 100,
                    md: 100,
                    lg: 100,
                    xl: 100,
                    xxl: 100,
                  }} //better way of doing this?
                  src={item.snippet.thumbnails.default.url}
                  alt={item.snippet.title}
                />
              }
              title={item.snippet.title}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default VideoList;
