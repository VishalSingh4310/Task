import React, { useEffect, useState } from "react";
import { Table, Button, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DropDownMenu from "./DropDownMenu";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from "../store/actions/Home";
import moment from "moment";
import TaskModal from "./TaskModal";

const Righttable = ({ Tabledata, workName }) => {
  const tasks = useSelector((state) => state.user.tasks);
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };
  const onDelete = (ev, e) => {
    const d = tempArray.find((task) => task.key === ev);
    history.push({
      pathname: `/d/${ev}`,
      state: { data: d, workName: workName },
    });
  };
  function onChangeDate(date, dateString) {}
  useEffect(() => {
    dispatch(homeActions.fetchDataT(Tabledata.tasks));
  }, [Tabledata, open]);

  if (tasks.length === 0) {
    return <div>loading....</div>;
  }

  const columns = [
    {
      title: "Task",
      dataIndex: "title",
    },
    {
      title: "Task owner",
      dataIndex: "owner",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Due date",
      dataIndex: "date",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
      render: (text, record) => {
        return (
          <DatePicker
            defaultValue={moment(text)}
            onChange={onChangeDate}
            suffixIcon={false}
            format="ddd MMMM DD YYYY"
            style={{ border: "none", fontfamily: "inter", padding: 0 }}
          />
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      render: (text, record) => <DropDownMenu choosen={text} />,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      render: (text, record) => <DropDownMenu choosen={text} />,
    },
    {
      title: "",
      dataIndex: "delete ",
      render: (text, record) => (
        <span
          className="underline text-center cursor-pointer"
          onClick={(e) => {
            onDelete(record.key, e);
          }}
        >
          View
        </span>
      ),
    },
  ];
  let tempArray = [];
  tasks.forEach((task) => {
    let temp = {
      key: task.id,
      title: task.title,
      owner: "sdcs",
      date: task.due_date,
      status: task.status,
      priority: task.priority,
    };
    tempArray.push(temp);
  });

  function onChange(filters, sorter, extra) {}
  return (
    <div>
      <div style={{ maxHeight: "40vh", overflowY: "auto" }}>
        <Table
          columns={columns}
          dataSource={tempArray}
          onChange={onChange}
          pagination={{
            total: tempArray.length,
            pageSize: tempArray.length,
            hideOnSinglePage: true,
          }}
        />
      </div>
      <TaskModal action={open} done={openModal} projectId={Tabledata.id} />
      <Button
        shape="round"
        icon={<PlusOutlined />}
        className="flex items-center text-black my-2"
        onClick={openModal}
      >
        Create a task
      </Button>
    </div>
  );
};

export default Righttable;
