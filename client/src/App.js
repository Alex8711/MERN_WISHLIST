import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";
import EditProject from "./components/projects/EditProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ paddingTop: "100px" }}>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/projects/edit/:id" component={EditProject} />
              <Route path="/projects/:id" component={ProjectDetails} />
              <Route path="/create" component={CreateProject} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
