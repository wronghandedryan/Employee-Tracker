import axios from "axios";
//all axios calls here!!!!!!
export default {
  // Gets all posts
  getemployeelist: function() {
    return axios.get("/api/employee");
  },
  // Gets the post with the given id
  getemployee: function(employee) {
    return axios.get("/api/employee/" + employee);
  },
  // Deletes the post with the given id
  deleteemployee: function(employee) {
    return axios.delete("/api/employee/" + employee);
  },
  // Saves a post to the database
  savePost: function(employeeData) {
    return axios.post("/api/employee", employeeData);
  }
};
