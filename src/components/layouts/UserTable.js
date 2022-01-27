import { React, useState } from "react";
import { Table, Tag, Space, Modal, Divider, Input } from "antd";

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["nice"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
function UserTable() {
  const [visible, setVisible] = useState(false);
  const [modalTask, setModalTask] = useState({});

  const modalToggle = (record, rowIndex) => {
    setModalTask(record);
    setVisible(true);
  };

  return (
    <>
      <Table
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              modalToggle(record, rowIndex);
            }, // click row
          };
        }}
      >
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
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

export default UserTable;
