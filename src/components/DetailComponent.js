import React from "react";
import { Breadcrumb, Input, Button, DatePicker } from "antd";
import DropDownMenu from "./DropDownMenu";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
const DetailComponent = ({ workName }) => {
  const { TextArea } = Input;
  const location = useLocation();

  const onChange = (e) => {};
  function onChangeDate(date, dateString) {}

  return (
    <div className="px-4">
      <div className="my-4">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link
              to={{
                pathname: "/",
                state: { workName: location.state.workName },
              }}
            >
              {location.state.workName}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Test Project</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p className="bg-red-200 px-1 p-0 mb-4 rounded-sm font-medium text-lg inline-block">
          {location.state.workName}
        </p>
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col flex-1 pr-2">
            <p className="font-semibold pb-1">Assignees</p>
            <div className="flex items-center">
              <Input
                placeholder={location.state.data.owner}
                allowClear
                onChange={onChange}
                style={{ border: "none", padding: 0 }}
              />
            </div>
          </div>
          <div className="flex-1 px-2">
            <p className="font-semibold pb-1">Due date</p>
            {/* <Input
              placeholder="Enter due Date"
              allowClear
              onChange={onChange}
              style={{ border: "none", padding: 0 }}
            /> */}
            <DatePicker
              defaultValue={moment(location.state.data.date)}
              onChange={onChangeDate}
              suffixIcon={false}
              format="ddd MMMM DD YYYY"
              style={{ border: "none", fontfamily: "inter", padding: 0 }}
            />
          </div>
          <div className="flex-1 px-2">
            <p className="font-semibold pb-1">Status </p>
            <DropDownMenu choosen={location.state.data.status} />
          </div>
          <div className="flex-1 px-2">
            <p className="font-semibold pb-1">Priority </p>
            <DropDownMenu choosen={location.state.data.priority} />
          </div>
          <div className="flex-1 flex justify-start pl-2">
            <Button shape="round">Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
