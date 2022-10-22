import React from "react";
import {
  AppBar,
  useScrollTrigger
} from "@mui/material";
import HeaderSpeedDial from "./ui-kit/HeaderSpeedDial";
import styled from "@emotion/styled";

const InnerContainer = styled.div`
  max-width: 1300px;
  margin: 10px 0;
  width: 100%;
`

const AppHeader = ({projectsRef, aboutRef, formRef}) => {

  const ElevationScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return(
    <ElevationScroll>
      <AppBar style={{backgroundColor:"white", alignItems:"center"}} variant={"elevation"}>
        <InnerContainer>
            <HeaderSpeedDial projectsRef={projectsRef} aboutRef={aboutRef} formRef={formRef}/>
        </InnerContainer>
      </AppBar>
    </ElevationScroll>
  )
}

export default AppHeader