import React from "react";
import './SectionHeader.css'
import { css, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div(({theme})=>(css`
  border-bottom: 3px solid ${theme.palette.primary[500]};
  border-radius: 3px;
  display: flex;
`))

const Bullet = styled.div(({theme})=>(css`
  width: 20px;
  display: flex;
  margin: 0.75rem 0.75rem 0.75rem 0;
  background-color: ${theme.palette.primary[500]};
  border-radius: 5px;
`))

export default function SectionHeader({title}){

    return(
        <Container>
          <Bullet/>
            <Typography variant={"h2"}>
                {title}
            </Typography>
        </Container>
    )
}
