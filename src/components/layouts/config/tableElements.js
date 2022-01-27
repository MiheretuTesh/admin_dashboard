import { Table, Tag, Space, Modal, Divider } from "antd";
const columns = [
    {
      title: "Company Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Role",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 6 ? "geekblue" : "green";
            if (tag === "delete") {
              color = "volcano";
            }
            if (tag === "update") {
              color = "geekblue";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: "1",
      name: "John Brown",
      amount: 32,
      address: "New York No. 1 Lake Park",
      tags: ["Create", "update"],
    },
    {
      key: "2",
      name: "Jim Green",
      amount: 42,
      address: "London No. 1 Lake Park",
      tags: ["delete"],
    },
    {
      key: "3",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update"],
    },
    {
      key: "4",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update"],
    },
    {
      key: "5",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update", "delete"],
    },
    {
      key: "6",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update"],
    },
    {
      key: "7",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update"],
    },
    {
      key: "8",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update"],
    },
    {
      key: "9",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update"],
    },
    {
      key: "10",
      name: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["create", "update"],
    },
  ];

  export {columns, data};