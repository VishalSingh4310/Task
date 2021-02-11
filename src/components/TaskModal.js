import React, { useEffect, useState } from "react";
import { Modal, Input, Dropdown, Menu, DatePicker } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import * as taskAction from "../store/actions/Task";
import * as homeAction from "../store/actions/Home";
const TaskModal = ({ action, done, projectId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Enter status");
  const [prior, setPrior] = useState("Enter priority");
  const [date, setdate] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await dispatch(taskAction.addTask(projectId, date, prior, status, title));
    await dispatch(homeAction.fetchDataW());
    setIsModalVisible(false);
    done();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    done();
  };
  useEffect(() => {
    if (action) {
      showModal();
    }
  }, [action]);

  function onChange(date, dateString) {
    setdate(date._d.toISOString());
  }
  const link = (e) => {
    if (e.key === "item_0") {
      setStatus("Completed");
    } else if (e.key === "item_1") {
      setStatus("In progress");
    } else if (e.key === "item_2") {
      setStatus("Incomplete");
    }
    // e.preventDefault();
  };
  const link2 = (e) => {
    if (e.key === "item_0") {
      setPrior("Low");
    } else if (e.key === "item_1") {
      setPrior("Medium");
    } else if (e.key === "item_2") {
      setPrior("High");
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
  const menu2 = (
    <Menu>
      <Menu.Item onClick={link2}>Low</Menu.Item>
      <Menu.Item onClick={link2}>Medium</Menu.Item>
      <Menu.Item onClick={link2}>High</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Modal
        title="Add Task"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          className="mb-2"
          placeholder="Enter task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p>Enter Status</p>
            <Dropdown overlay={menu} className="mb-2 text-gray-400">
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {status} <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className="flex flex-col items-start justify-start mx-8">
            <p>Enter priority</p>
            <Dropdown overlay={menu2} className="mb-2  text-gray-400">
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {prior} <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <DatePicker onChange={onChange} />
        </div>
      </Modal>
    </div>
  );
};

export default TaskModal;
