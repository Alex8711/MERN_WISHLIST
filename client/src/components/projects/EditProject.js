import React, { Component } from "react";
import { connect } from "react-redux";
import { getProject, editProject } from "../../store/reducers/projectReducer";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class EditProject extends Component {
  state = {
    id: "",
    title: "",
    content: ""
  };
  componentDidMount() {
    const { project } = this.props.project;
    this.setState({
      id: project._id,
      title: project.title,
      content: project.content
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newProject = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content
    };
    this.props.editProject(newProject);
  };
  render() {
    // const { project } = this.props.project;
    return (
      <div className="container">
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="title"
              label="Wish Title"
              multiline
              rowsMax="4"
              onChange={this.handleChange}
              defaultValue={this.state.title}
              variant="outlined"
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <TextField
              id="content"
              label="Wish Content"
              multiline
              rows="4"
              onChange={this.handleChange}
              defaultValue={this.state.content}
              variant="outlined"
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Summit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProject, editProject })(
  EditProject
);
