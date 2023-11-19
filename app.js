const express = require('express')
const app = express()
const port = 4000

const _ = require('lodash');

const projects = [
    {
        id: 1,
        name: "Alpha",
        description: "API Management Service"
    },
    {
        id: 2,
        name: "Beta",
        description: "File Storage Service"
    },
    {
        id: 3,
        name: "Gamma",
        description: "Fast Messaging Service",
    },
    {
        id: 4,
        name: "Delta",
        description: "Security and Threat Management Service"
    }
]

app.get('/projects', (req, res) => {
  res.send(projects)
})

app.get('/projects/:projectId', (req, res) => {
    const projectId = req.params.projectId;
    if (!projectId) {
        res.status(400).send('Bad Request');
    } else {
        const project = _.find(projects, {id: parseInt(projectId)});
        if (!project) {
            res.status(404).send('Not Found');
        } else {
            res.send(project);
        }
    }
  })

app.listen(port, () => {
  console.log(`Projects service listening on port ${port}`)
})