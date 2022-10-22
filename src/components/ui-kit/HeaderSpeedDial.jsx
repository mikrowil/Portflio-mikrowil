import React, { useState } from "react";
import IconBase from "./IconBase";
import { SpeedDial, SpeedDialAction } from "@mui/material";

//constants
const SCROLL_OFFSET_Y = -70

const HeaderSpeedDial = ({projectsRef, aboutRef, formRef}) => {

  const [open, setOpen] = useState(false)

  const scroll = (ref) => {
    let position = ref.current.offsetTop;

    //Make sure to include the offset, because of the app bar.
    window.scrollTo({
      top: position + SCROLL_OFFSET_Y,
      behavior: 'smooth'
    })
  }

  const actions = [
    {
      icon: <IconBase name={"dashboard"}/>,
      name: 'Projects',
      navigate: () => {
        scroll(projectsRef)
      }
    },
    {
      icon: <IconBase name={"account_circle"}/>,
      name: 'About',
      navigate: () => {
        scroll(aboutRef)
      }
    },
    {
      icon: <IconBase name={"mail"}/>,
      name: 'Contact',
      navigate: () => {
        scroll(formRef)
      }
    },
  ];

  return(
    <SpeedDial
      ariaLabel={"SpeedDial sections"}
      direction={"right"}
      open={open}
      onClose={() => {
        setOpen(false)
      }}
      onOpen={() => {
        setOpen(true)
      }}
      icon={
        <IconBase name={"web"}/>
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          title={action.name}
          tooltipTitle={action.name}
          onClick={action.navigate}
        />
      ))}
    </SpeedDial>
  )
}

export default HeaderSpeedDial