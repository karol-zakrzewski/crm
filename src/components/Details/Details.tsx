import { Box } from "@mui/system";
import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="container__details">
      <Box
        sx={{
          width: 1 / 4,
          height: 500,
          margin: 3,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      ></Box>
      <Box
        sx={{
          width: 1 / 2,
          height: 500,
          margin: 3,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      ></Box>
      <Box
        sx={{
          width: 1 / 4,
          height: 500,
          margin: 3,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      ></Box>
    </div>
  );
};

export default Details;
