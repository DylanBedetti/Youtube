import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = ({ message }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

  return (
    <div
      style={{
        height: "100%",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Spin indicator={antIcon} />
      <div style={{ color: "rgba(0, 0, 0, 0.25)" }}>{message}</div>
    </div>
  );
};

export default Loading;
