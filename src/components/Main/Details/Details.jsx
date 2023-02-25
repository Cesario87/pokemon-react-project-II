import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = JSON.parse(decodeURIComponent(searchParams.get("data")));

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>ID: {data.id}</p>
      <p>Type 1: {data.typeOne}</p>
      <p>Type 2: {data.typeTwo ? data.typeTwo : "none"}</p>
    </div>
  );
};

export default Details;
