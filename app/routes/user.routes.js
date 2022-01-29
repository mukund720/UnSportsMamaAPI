module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    // Create a new Customer
    app.post("/user", user.create);

  // Create a new User profile
  app.post("/profile/createNew", user.create);
  
    // Retrieve all user
    app.get("/users", user.findAll);
  
    // Retrieve a single Customer with email
    app.get("/user/:email", user.findOne);
  
    // Update a Customer with email
    app.put("/user/:email", user.update);
  
    // Delete a Customer with email
    app.delete("/user/:email", user.delete);
  
    // delete all Customer
    app.delete("/user", user.deleteAll);
  };