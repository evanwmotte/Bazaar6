import http from '../services/http';

export default {

   /// saves a user 
    saveUser: function(userData) {
      console.log("running")
      return http.post("/api/users", userData);
    },
      // Gets all users
      getUsers: function() {
        return http.get("/api/users/");
      },
      
      // Gets the user with the given id

      // getUser: function(id) {
      //   return axios.get("/api/users/" + id);
      // },

      // Deletes the user with the given id
      deleteUser: function(id) {
        return http.delete("/api/users" + id);
      },
      updateUser: function(query) {
        return http.put("/api/users", query)
      },
      getUser: function() {
        return http.get("/api/users")
      }
};