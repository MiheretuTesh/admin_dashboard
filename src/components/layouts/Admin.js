import React from "react";
import { Tabs } from "antd";

import TableAdmin from "./TableAdmin";
import UserTable from "./UserTable";
const { TabPane } = Tabs;
function Admin() {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Clients" key="1">
          <TableAdmin />
        </TabPane>
        <TabPane tab="Users" key="2">
          <UserTable />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
