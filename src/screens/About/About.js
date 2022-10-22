import React from "react";
import './About.css'
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { css, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div(({theme})=>(css`
  min-height: 100vh;
  margin: 3rem 0;
`))

export default function About() {
  return (
    <Container>
      <SectionHeader title={"About"}/>
      <div className={""}>
        <p
          className={"uk-text-right"}
          uk-scrollspy="cls: uk-animation-slide-right;delay:500 ;repeat: false">
          <em>A fiery passion for programming.</em>
        </p>
        <hr/>
        <Typography variant={"body1"}>
          While in high school, coding was something I started too
          follow as a hobby. That hobby eventually turned into college,
          where A spark was ignited. Since then, I have been pushing
          myself as a programmer, to learn as much as I can while
          building my own applications and personal projects.
          Programming to me is the perfect mix of logic and creative
          thinking, that allows me to always think outside the box.
        </Typography>
      </div>
    </Container>
  )
}
