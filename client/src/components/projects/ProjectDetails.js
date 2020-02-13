import React, { Component } from "react";
import { connect } from "react-redux";
import { getProject } from "../../store/reducers/projectReducer";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";

class ProjectDetails extends Component {
  render() {
    const { project } = this.props.project;
    return (
      <Grid container justify="center">
        <Card style={{ width: "345px" }}>
          <CardHeader title={project.title} />
          <CardContent>{project.content}</CardContent>
        </Card>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProject })(ProjectDetails);
