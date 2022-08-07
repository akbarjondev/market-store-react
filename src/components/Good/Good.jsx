import React from "react";
import { useParams } from "react-router-dom";

function Good() {
  const { goodId } = useParams();

  return <div>Good: {goodId}</div>;
}

export default Good;
