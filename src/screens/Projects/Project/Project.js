import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Spacer from "../../../layout/Spacer";
import styled from "@emotion/styled";

const ProjectContainer = styled(Paper)`
  width: 100%;
  transition: all 200ms linear;

  :hover {
    width: 98%;
    height: 98%;
  }
`

export default function Project({ project }) {

  const [hovered, setHovered] = useState(5)

  return (
    <ProjectContainer
      onMouseOver={() => {
        setHovered(1)
      }}
      onMouseLeave={() => {
        setHovered(5)
      }}
      elevation={hovered}
    >
      <Box p={2}>
        <Typography variant={"h5"}>
          {project.title}
        </Typography>
        <Box display={"flex"} style={{ flexWrap: "wrap" }}>
          {
            project.technologies.map((tech) => (
              <Typography key={tech} variant={"caption"} m={1}>
                {tech}
              </Typography>
            ))
          }
        </Box>
        <Spacer/>
        <Typography variant={"body2"}>
          Open {project.title}
        </Typography>
      </Box>
    </ProjectContainer>
  )
}
