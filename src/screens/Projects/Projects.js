import React, { useEffect, useState } from "react";
import './Projects.css'
import Project from "./Project/Project";
import portfolioApi from "../../api/portfolioApi";
import SectionHeader
  from "../../components/SectionHeader/SectionHeader";
import {
  Autocomplete,
  css,
  Grid,
  Stack,
  TextField
} from "@mui/material";
import Spacer from "../../layout/Spacer";
import styled from "@emotion/styled";
import { motion } from 'framer-motion/dist/framer-motion'

const Container = styled.div(({ theme }) => (css`
  min-height: 100vh;
  margin: 3rem 0;
`))

//Animation variants
const varProject = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const tags = [
  { label: "AWS" },
  { label: "Axios" },
  { label: "Bootstrap" },
  { label: "CSS" },
  { label: "Cryptography" },
  { label: "Firebase" },
  { label: "Flask" },
  { label: "Gitlab" },
  { label: "HTML" },
  { label: "JSP" },
  { label: "Java" },
  { label: "JavaScript" },
  { label: "Material design" },
  { label: "MySQL" },
  { label: "PHP" },
  { label: "Python" },
  { label: "React" },
  { label: "React-native" },
  { label: "Redux" },
  { label: "Restful API" },
  { label: "Spring MVC" },
]

export default function Projects() {

  const [projects, setProjects] = useState([])
  const [activeProjects, setActiveProjects] = useState([])
  const [options, setOptions] = useState([])
  const [filters, setFilters] = useState({ search: null, tags: [] })
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  useEffect(() => {
    const getProjects = async () => {
      const res = await portfolioApi.get('/projects')
      setProjects(res.data)
      setActiveProjects(res.data)

      res.data.forEach((x) => {
        setOptions((prev) => [...prev, { label: x.title }])
      })
    }

    getProjects().then()
  }, [selectedProject])

  const toggleModal = (project = {}) => {
    setSelectedProject(project)
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    if (!filters.search && options.length <= 0) {
      setActiveProjects(projects)
    } else {
      let newProjects = projects

      if (filters.search) {
        newProjects = newProjects.filter((x) => x.title.includes(filters.search.label))
      }

      if (filters.tags.length > 0) {
        newProjects = newProjects.filter(x => {

          let found = false

          x.technologies.forEach(j => {
            if (filters.tags.find(l => l.label === j)) {
              found = true
            }
          })

          return found
        })
      }

      setActiveProjects(newProjects)
    }
  }, [filters, options.length, projects])

  return (
    <Container>
      <SectionHeader title={"Projects"}/>
      <Spacer amount={4}/>
      <Stack direction={"row"} spacing={2}>
        <Autocomplete freeSolo
                      value={filters.search}
                      onChange={(e, newValue) => {
                        let newFilters = {
                          search: newValue,
                          tags: filters.tags
                        }
                        setFilters(newFilters)
                      }}
                      style={{ maxWidth: 350, width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Project"/>)}
                      options={options}
        />
        <Autocomplete multiple
                      value={filters.tags}
                      onChange={(e, v) => {
                        let newFilters = {
                          search: filters.search,
                          tags: v
                        }
                        setFilters(newFilters)
                      }}
                      style={{ maxWidth: 350, width: "100%" }}
                      renderInput={
                        (params) =>
                          <TextField {...params} label="Tags"/>}
                      options={tags}
        />
      </Stack>
      <Spacer amount={4}/>
      <Grid spacing={2} container>
        {activeProjects.map((project) => (
          <Grid key={project._id} item xs={12} md={6} width={"100%"} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Project project={project}
                       showModal={toggleModal}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
