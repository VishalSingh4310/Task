import React, { useState, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDownMenu = ({ choosen }) => {
  const [label, setLabel] = useState("Select status");
  const link = (e) => {
    if (e.key === "item_0") {
      setLabel("Completed");
    } else if (e.key === "item_1") {
      setLabel("In progress");
    } else if (e.key === "item_2") {
      setLabel("Incomplete");
    }
    // e.preventDefault();
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={link}>Completed</Menu.Item>
      <Menu.Item onClick={link}>In progress</Menu.Item>
      <Menu.Item onClick={link}>Incomplete</Menu.Item>
    </Menu>
  );

  useEffect(() => {
    setLabel(choosen);
  }, [choosen]);

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link flex items-center">
        <span className="text-gray-400 pr-4">{label}</span>
        <DownOutlined className="text-gray-400" />
      </a>
    </Dropdown>
  );
};
export default DropDownMenu;
