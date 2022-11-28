import { Box, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { paths } from "../../utils/paths";
import { BsCurrencyDollar } from "react-icons/bs";

const Sales = () => {
  return (
    <Box component={"main"}>
      <Header title="Deals">
        <Link to={paths.addDeal}>
          <IconButton color="primary" aria-label="Add company">
            <BsCurrencyDollar />
          </IconButton>
        </Link>
      </Header>
    </Box>
  );
};

export default Sales;
