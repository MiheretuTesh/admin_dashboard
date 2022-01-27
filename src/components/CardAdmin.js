import React from "react";
import { Card, Col, Row, Divider } from "antd";
import { Typography } from "antd";
import {
  DollarCircleFilled,
  UsergroupAddOutlined,
  PlusCircleFilled,
  StockOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const cardStyle = {
  // width: "360px",
  height: "210px",
  borderRadius: "16px",
  marginRight: "24px",

  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};
const colStyle = {
  paddingBottom: "20px",
};
function CardAdmin() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={6} style={colStyle}>
          <Card
            style={cardStyle}
            title={
              <Row justify="space-between">
                <Col span={4}>
                  <Title level={2}>Today’s Sales</Title>
                </Col>
                <Col span={4}>
                  <DollarCircleFilled style={{ fontSize: 40 }} />
                </Col>
              </Row>
            }
            bordered={false}
          >
            <Title level={1}>$53,000 +30%</Title>
          </Card>
        </Col>
        <Col span={6} style={colStyle}>
          <Card
            style={cardStyle}
            title={
              <Row justify="space-between">
                <Col span={4}>
                  <Title level={2}>Today’s Users</Title>
                </Col>
                <Col span={4}>
                  <UsergroupAddOutlined style={{ fontSize: 40 }} />
                </Col>
              </Row>
            }
            bordered={false}
          >
            <Title level={1}>3,200</Title>
          </Card>
        </Col>
        <Col span={6} style={colStyle}>
          <Card
            style={cardStyle}
            title={
              <Row justify="space-between">
                <Col span={4}>
                  <Title level={2}>New Clients</Title>
                </Col>
                <Col span={4}>
                  <PlusCircleFilled style={{ fontSize: 40 }} />
                </Col>
              </Row>
            }
            bordered={false}
          >
            <Title level={1}>+1,200</Title>
          </Card>
        </Col>
        <Col span={6} style={colStyle}>
          <Card
            style={cardStyle}
            title={
              <Row justify="space-between">
                <Col span={4}>
                  <Title level={2}>New Orders</Title>
                </Col>
                <Col span={4}>
                  <StockOutlined style={{ fontSize: 40 }} />
                </Col>
              </Row>
            }
            bordered={false}
          >
            <Title level={1}>$13,200 </Title>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardAdmin;
