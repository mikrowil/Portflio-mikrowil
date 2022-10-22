import React from "react";
import { Box } from "@mui/material";

const Spacer = ({amount = 1}) => {
  return(
    <Box mt={amount}/>
  )
}

export default Spacer