import React from "react";
import './Title.css'
import {
  Typography,
  useTheme
} from "@mui/material";
import { motion } from 'framer-motion/dist/framer-motion'

//Animation variants
const varTitle = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const varSubTitle = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

export default function Title({ window }) {

  const theme = useTheme()

  return (
    <div className={"title"}>
      <motion.div
        variants={varTitle}
        initial={"hidden"}
        animate={"visible"}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <Typography
          variant={"h1"}
          color={theme.palette.primary[900]}
          textAlign={"center"}
        >
          Michael Wilson
        </Typography>
      </motion.div>
      <motion.div
        variants={varSubTitle}
        initial={"hidden"}
        animate={"visible"}
        transition={{ delay: 0.7, type: "spring" }}
      >
        <Typography variant={"h3"} color={theme.palette.primary[500]}>
          Full-Stack engineer
        </Typography>
      </motion.div>
    </div>
  )
}
