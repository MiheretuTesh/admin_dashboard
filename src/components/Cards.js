import React from "react";
import { Card, Col, Row, Typography } from "antd";
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
        <Card title="Card title" style={cardStyle}>
          <Row gutter={16}>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={12} style={colStyle}>
        <Card title="Card title" style={cardStyle}>
          <Row gutter={16}>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
            <Col span={6} style={colStyle}>
              lorem
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards;
