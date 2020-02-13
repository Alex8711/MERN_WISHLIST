const express = require("express");
const router = express.Router();

//Project Model

const Project = require("../../models/Project");

// GET api/projects
//GET All projects
//access Public
router.get("/", (req, res) => {
  Project.find().then(projects => res.json(projects));
});

//GET api/projects/:id
//GET a project
//access public
router.get("/:id", (req, res) => {
  Project.findById(req.params.id).then(project => res.json(project));
});

// POST api/projects
//Create a project
//access Public
router.post("/", (req, res) => {
  const newProject = new Project({
    title: req.body.title,
    content: req.body.content
  });
  newProject.save().then(project => res.json(project));
});

//PUT api/projects/edit/:id
//update a project
//access public
router.put("/edit/:id", (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    project.title = req.body.title;
    project.content = req.body.content;
    project.save();
    res.json(project);
  });
});

// DELETE api/projects/:id
// DELETE a project
//access Public
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
