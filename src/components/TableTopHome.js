import React from "react";

import { Button, Avatar, Input, DatePicker } from "antd";
import DropDownMenu from "./DropDownMenu";
import moment from "moment";

const TableTopHome = ({ data }) => {
  const { TextArea } = Input;

  function onChangeDate(date, dateString) {}
  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex flex-col flex-1 pr-2">
        <p className="font-semibold pb-1">Approver</p>
        <div className="flex items-center">
          <Avatar
            size="small"
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              marginRight: "0.5rem",
            }}
          >
            {data.approve_name[0]}
          </Avatar>
          <p>{data.approve_name}</p>
        </div>
      </div>
      <div className="flex-1 px-2">
        <p className="font-semibold pb-1">Due date</p>
        <DatePicker
          defaultValue={moment(data.due_date)}
          onChange={onChangeDate}
          suffixIcon={false}
          format="ddd MMMM DD YYYY"
          style={{ border: "none", fontfamily: "inter", padding: 0 }}
        />
      </div>
      <div className="flex-1 px-2">
        <p className="font-semibold pb-1">Status </p>
        <DropDownMenu choosen={data.status} />
      </div>
      <div className="flex-1 flex justify-end pl-2">
        <Button shape="round">View</Button>
      </div>
    </div>
  );
};

export default TableTopHome;
