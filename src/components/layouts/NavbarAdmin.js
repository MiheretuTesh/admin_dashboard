import React from "react";
import { Row, Col } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined, UserOutlined, BellFilled } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const icon = "BellFilled";
function NavbarAdmin() {
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Row justify="end">
        <Col span={1}></Col>
        <Col span={2}>
          {" "}
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 160, paddingTop: "1rem" }}
          />
        </Col>
        <Col span={2}>
          <Avatar
            style={{
              cursor: "pointer",
              backgroundColor: "#333",
              marginRight: 5,
            }}
            icon={<UserOutlined />}
          />
          <span style={{ cursor: "pointer" }}>Sing up</span>
        </Col>
      </Row>
    </div>
  );
}

export default NavbarAdmin;
