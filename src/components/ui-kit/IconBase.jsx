import React from "react";
import styled from "@emotion/styled";

const Icon = styled.span(({ theme }) => ({
  color: theme.palette.primary[600]
}))

const IconBase = ({ name }) => {
  return (<Icon className="material-symbols-rounded">
    {name}
  </Icon>)
}

export default IconBase