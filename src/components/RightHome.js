import React from "react";
import { DownOutlined, PushpinOutlined } from "@ant-design/icons";
// import { Button, Tooltip, Avatar, Input } from "antd";
import Righttable from "./Righttable";
import TableTopHome from "./TableTopHome";
import TaskHeadHome from "./TaskHeadHome";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const RightHome = ({ workspace, workName }) => {
  const projects = useSelector((state) => state.user.project);
  const location = useLocation();
  return (
    <div className="px-4 py-2">
      {projects.map((project) => (
        <div key={project.id}>
          <TaskHeadHome
            name={workName}
            defaultName={
              location.state === undefined ? "A" : location.state.workName
            }
          />
          <div className="mt-4">
            <div className="flex items-center justify-between py-4">
              <h2 className="font-bold text-lg">{project.name}</h2>
              <div>
                <PushpinOutlined
                  style={{
                    marginRight: "1rem",
                    fontSize: "1.2rem",
                    color: "#999",
                  }}
                />
                <DownOutlined style={{ fontSize: "0.9rem", color: "#999" }} />
              </div>
            </div>

            <TableTopHome data={project} />
            <Righttable Tabledata={project} workName={workName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightHome;
