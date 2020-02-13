import axios from "axios";

//action types
const GET_PROJECTS = "GET_PROJECTS";
const GET_PROJECT = "GET_PROJECT";
const SET_PROJECT = "SET_PROJECT";
const DELETE_PROJECT = "DELETE_PROJECT";
const ADD_PROJECT = "ADD_PROJECT";
const EDIT_PROJECT = "EDIT_PROJECT";

//action creators
export function getProjects() {
  return dispatch => {
    return axios.get("/api/projects").then(res => {
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      });
    });
  };
}

export const getProject = id => dispatch => {
  axios.get(`/api/projects/${id}`).then(res => {
    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });
  });
};

export const setProject = project => dispatch => {
  dispatch({
    type: SET_PROJECT,
    payload: project
  });
};

export const editProject = project => dispatch => {
  axios.put(`/api/projects/edit/${project.id}`, project).then(res => {
    dispatch({
      type: EDIT_PROJECT,
      payload: {
        id: project.id,
        newTitle: project.title,
        newContent: project.content
      }
    });
  });
};

export const deleteProject = id => dispatch => {
  axios.delete(`/api/projects/${id}`).then(res =>
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    })
  );
};

export const addProject = project => dispatch => {
  axios.post("/api/projects", project).then(res =>
    dispatch({
      type: ADD_PROJECT,
      payload: res.data
    })
  );
};

const initState = {
  projects: [],
  project: {}
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.payload
        )
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case EDIT_PROJECT:
      return {
        ...state,
        projects: state.projects.map(item => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              title: action.payload.newTitle,
              content: action.payload.newContent
            };
          }
          return item;
        })
      };

    default:
      return state;
  }
};

export default projectReducer;
