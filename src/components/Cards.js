import React from "react";
import { Card, Col, Row, Typography, Statistic } from "antd";
import { Progress } from "antd";
import DemoLine from "./layouts/DemoLine";
import {
  DollarCircleFilled,
  UsergroupAddOutlined,
  PlusCircleFilled,
  StockOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
const cardStyle = {
  // width: "360px",
  //   height: "300px",
  borderRadius: "16px",
  marginRight: "24px",

  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};
const colStyle = {
  paddingBottom: "20px",
};
function Cards() {
  return (
    <Row gutter={16}>
      <Col span={12} style={colStyle}>
        <Card
          title={
            <Row justify="space-between">
              <Col span={4}>
                <Title level={2}>Current status</Title>
              </Col>
              <Col span={4}>
                <PlusCircleFilled style={{ fontSize: 40 }} />
              </Col>
            </Row>
          }
          style={cardStyle}
        >
          <Row gutter={16}>
            <Col span={8} style={colStyle}>
              <Progress type="circle" percent={30} width={150} />
            </Col>
            <Col span={8} style={colStyle}>
              <Progress
                type="circle"
                percent={70}
                width={150}
                status="exception"
              />
            </Col>
            <Col span={8} style={colStyle}>
              <Progress type="circle" percent={100} width={150} />
            </Col>
            <Col span={12}>
              <Card style={cardStyle}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card style={cardStyle}>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            {/* <Col span={6} style={colStyle}>
              lorem
            </Col> */}
          </Row>
        </Card>
      </Col>
      <Col span={12} style={colStyle}>
        <Card title={<Title level={2}>Current statistics</Title>} style={cardStyle}>
          <Row gutter={16}>
            <Col span={24} style={colStyle}>
              <DemoLine />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards;
