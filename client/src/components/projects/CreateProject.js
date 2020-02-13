import React, { Component } from "react";
import { addProject } from "../../store/reducers/projectReducer";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newProject = { title: this.state.title, content: this.state.content };
    this.props.addProject(newProject);
  };
  render() {
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
              defaultValue=""
              variant="outlined"
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Create a New Wish
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

export default connect(mapStateToProps, { addProject })(CreateProject);
