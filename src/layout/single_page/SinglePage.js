import React, { useRef } from "react";
import './SinglePage.css'
import About from "../../screens/About/About";
import AppHeader from "../../components/AppHeader";
import FormOMine from '../../screens/FormOMine/FormOMine'
import Projects from "../../screens/Projects/Projects";
import Title from "../../screens/Title/Title";
import styled from "@emotion/styled";

const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  display: "flex",
  flexDirection: "column",
  paddingBottom: "12rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "relative",
}))

const InnerContainer = styled.div`
  align-self: center;
  max-width: 1300px;
`

export default function SinglePage() {

  const refAbout = useRef(null)
  const refForm = useRef(null)
  const refProjects = useRef(null)

  return (
    <Container>
      <AppHeader projectsRef={refProjects} aboutRef={refAbout}
                 formRef={refForm}/>
      <InnerContainer>
        <Title/>
        <div ref={refProjects}>
          <Projects/>
        </div>
        <div ref={refAbout}>
          <About/>
        </div>
        <div ref={refForm}>
          <FormOMine/>
        </div>
      </InnerContainer>
    </Container>
  )
}
