import React from "react";
import { Box, css } from "@mui/material";
import styled from "@emotion/styled";

const Container=styled(Box)(({theme})=>(css`
  position: relative;
  height: 40vh;
  margin-top: 10vh;
  margin-bottom: 30vh;
`))

const ImageContainer = styled(Box)(({theme})=>(css`
  background-image: url("https://www.volt.com/uploadedImages/Blog/how_to_get_a_job_as_a_video_game_tester_banner.jpg");
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  height: 30vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`))

const FixedImageBanner = () => {
  return(
    <Container>
      <ImageContainer>

      </ImageContainer>
    </Container>
  )
}

export default FixedImageBanner