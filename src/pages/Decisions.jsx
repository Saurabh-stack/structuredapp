import React from "react";
import { useParams, useNavigate } from "react-router";
import NewHieringRequest from "../features/DecisionInfo/components/NewHieringRequest";
const Decisions = () => {
  const params = useParams();
  const navigate = useNavigate();

  return <NewHieringRequest />;
};

export default Decisions;
