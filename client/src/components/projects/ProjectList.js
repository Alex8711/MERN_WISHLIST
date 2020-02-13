import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getProjects,
  deleteProject,
  getProject,
  setProject
} from "../../store/reducers/projectReducer";
import { withRouter } from "react-router-dom";
import {
  Card,
  GridList,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import axios from "axios";

class ProjectList extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  onDeleteClick(id) {
    this.props.deleteProject(id);
  }

  onViewClick(id) {
    axios
      .get(`/api/projects/${id}`)
      .then(res => {
        const resProject = res.data;
        this.props.setProject(resProject);
      })
      .then(() => {
        this.props.history.push(`/projects/${id}`);
      });
  }

  onEditClick(id) {
    axios
      .get(`/api/projects/${id}`)
      .then(res => {
        const resProject = res.data;
        this.props.setProject(resProject);
      })
      .then(() => {
        this.props.history.push(`/projects/edit/${id}`);
      });
  }

  render() {
    const { projects } = this.props.project;
    return (
      <GridList>
        {projects.map(project => (
          <Card key={project._id} style={{ width: "345px" }}>
            <CardHeader title={project.title} />
            <CardContent>{project.content}</CardContent>
            <CardActions>
              <Button
                variant="contained"
                style={{ marginRight: "20px" }}
                onClick={this.onViewClick.bind(this, project._id)}
              >
                View
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "20px" }}
                onClick={this.onEditClick.bind(this, project._id)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.onDeleteClick.bind(this, project._id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </GridList>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default withRouter(
  connect(mapStateToProps, {
    getProjects,
    deleteProject,
    getProject,
    setProject
  })(ProjectList)
);
