const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = Project = mongoose.model("project", ProjectSchema);
