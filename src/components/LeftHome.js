import React from "react";
import {
  HighlightOutlined,
  PlusOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const LeftHome = ({ workspace, Work }) => {
  return (
    <div className="p-2">
      <div className="flex items-center my-2">
        <HighlightOutlined style={{ fontSize: "1.2rem" }} />
        <h1 className="ml-2 text-lg font-medium">My Task</h1>
      </div>
      <div>
        <div className="flex items-center justify-between mt-4 mb-2">
          <p className="font-medium">Workspace</p>
          <Button
            type="text"
            // size="small"
            icon={<PlusOutlined />}
            className="flex items-center justify-center"
          ></Button>
        </div>
        <div>
          {workspace.map((work, index) => (
            <div
              key={index}
              className="rounded-sm p-2 mb-2 flex items-center hover:bg-gray-200 cursor-pointer  "
              onClick={() => Work(work.project_id, work.name)}
            >
              <DesktopOutlined style={{ marginRight: "0.5rem" }} />
              <p>{work.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
