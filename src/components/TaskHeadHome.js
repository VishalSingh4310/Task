import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Avatar } from "antd";

const TaskHeadHome = ({ name, defaultName }) => {
  return (
    <div>
      <div className="flex justify-end">
        <Avatar
          size="small"
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
          }}
        >
          U
        </Avatar>
      </div>
      <div className="flex items-center">
        <p className="bg-red-200 px-1 p-0 rounded-sm font-medium text-lg inline-block">
          {name === "A" ? defaultName : name}
        </p>
        <Button
          type="text"
          className="flex items-center  pb-2 font-bold text-lg ml-2"
        >
          ...
        </Button>
      </div>
      <div className="flex justify-end">
        <Button
          type="primary"
          style={{ background: "black", borderColor: "black" }}
          shape="round"
          icon={<PlusOutlined />}
          className="flex items-center text-white"
        >
          Create a project
        </Button>
      </div>
    </div>
  );
};

export default TaskHeadHome;
