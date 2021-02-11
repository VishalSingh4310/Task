import React, { useEffect, useState } from "react";

import { Row, Col } from "antd";
import LeftHome from "./LeftHome";
import DetailComponent from "./DetailComponent";
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from "../store/actions/Home";

const DetailPage = () => {
  const dispatch = useDispatch();
  const WorkSpace = useSelector((state) => state.user.workspace);
  const pending = useSelector((state) => state.user.process);
  const [workRight, setWorkRight] = useState("A");

  useEffect(() => {
    dispatch(homeActions.fetchDataW());
  }, []);

  const projectsIDsHandler = async (ids, work) => {
    setWorkRight(work);
    if (pending === "complete") {
      await dispatch(homeActions.fetchDataP(ids));
    }
  };
  return (
    <Row className="font-inter">
      <Col xs={24} sm={6} style={{ minHeight: "100vh" }} className="border-r-2">
        <LeftHome workspace={WorkSpace} Work={projectsIDsHandler} />
      </Col>
      <Col xs={24} sm={18}>
        <DetailComponent workName={workRight} />
      </Col>
    </Row>
  );
};

export default DetailPage;
