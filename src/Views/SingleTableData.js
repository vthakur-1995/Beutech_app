import React from "react";
import { useParams } from "react-router-dom";
import { TABLE_DATA } from "../data/TableData";

const SingleTableData = (props) => {
  const { id } = useParams();

  const data = TABLE_DATA.find((item) => item.id == id);
  console.log(data);

  return (
    <div>
      <h1 style={{ color: "#fff" }}>student id : {data.id}</h1>
      <h1 style={{ color: "#fff" }}>{data.student_name}</h1>
      <h1 style={{ color: "#fff" }}>{data.marks}</h1>{" "}
      <h1 style={{ color: "#fff" }}>{data.stream}</h1>
      <h1 style={{ color: "#fff" }}>{data.school}</h1>{" "}
      <h1 style={{ color: "#fff" }}>{data.state}</h1>
    </div>
  );
};

export default SingleTableData;
