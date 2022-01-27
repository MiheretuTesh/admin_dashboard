import React, { useState } from "react";
import { Table, Tag, Space, Modal, Divider, Input } from "antd";
import Admin from "./Admin";

import { data, columns } from "./config/tableElements";

function TableAdmin() {
  const [visible, setVisible] = useState(false);
  const [modalTask, setModalTask] = useState({});

  const modalToggle = (record, rowIndex) => {
    setModalTask(record);
    setVisible(true);
  };
  return (
    <>
    
      <Table
        columns={columns}
        dataSource={data}
        style={{ fontSize: 30 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              modalToggle(record, rowIndex);
            }, // click row
          };
        }}
      />
      <Modal
        title="Edit profile"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
      >
        <label>Name:</label>
        <Input placeholder="Basic usage" value={modalTask.name} />
        <Divider />
        <label>Address:</label>
        <Input placeholder="Basic usage" value={modalTask.address} />
        <Divider />
        <label>Amount:</label>
        <Input placeholder="Basic usage" value={modalTask.amount} />
      </Modal>
    </>
  );
}

export default TableAdmin;
