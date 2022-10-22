import { css, IconButton, Typography } from "@mui/material";
import IconBase from "./IconBase";
import React from "react";
import styled from "@emotion/styled";

const BtnAnchor = styled(IconButton)(({ theme }) => (
  css`
    .MuiTypography-body1 {
      font-size: 18px;
      color: ${theme.palette.primary[600]};
      transition: ${theme.transitions.create(['font-size'], {
        duration: theme.transitions.duration.standard,
      })};
    }

    .material-symbols-rounded {
      font-size: 26px;
      transition: ${theme.transitions.create(['font-size'], {
        duration: theme.transitions.duration.standard,
      })};
    }

    &:hover {
      .material-symbols-rounded {
        font-size: 36px;
      }

      .MuiTypography-body1 {
        font-size: 24px;
      }
    }
  `
))

const AnchorButton = React.forwardRef(({style, label}, ref) => {
  return (
    <BtnAnchor
      sx={style}
      onClick={() => {
        ref.current.scrollIntoView({ behavior: "smooth" })
      }}
      style={{
        borderRadius: "50vw",
        display: "flex",
        flexDirection: "column",
        height: 110,
        marginTop: 50,
        padding: 10,
        width: 110,
      }}>
      <Typography variant={"body1"}>
        {label}
      </Typography>
      <IconBase name={"arrow_downward"}/>
    </BtnAnchor>
  )
})

export default AnchorButton