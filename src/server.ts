const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())

import {prisma} from "./db"

app.get('/projects', async (req, res) => {
  const allProjects = await prisma.project.findMany
  res.json(allProjects)
})

app.post('/projects', async (req, res) => {
  const createdProject = await prisma.project.create({
    data: req.body
  })
  res.json(createdProject)
})

app.put('/projects/:id', async (req, res) => {
  const updatedProject = await prisma.project.update({
    where: req.params.id,
    data: req.body
  })
  res.json(updatedProject)
})

app.delete('/projects/:id', async (req, res) => {
  const deletedProject = await prisma.project.delete({
    where: req.params.id
  })
  res.json(deletedProject)
})



const port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, () => {
  console.log("Listening on port: ", port)
})