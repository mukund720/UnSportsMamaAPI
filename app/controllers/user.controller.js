const User = require("../models/user.model.js");
// console.log(User);
// Create and Save a new user
exports.create = (req, res) => {  
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
};

// Find a single user with a userId
exports.findOne = (req, res) => {  
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {  
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {  
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {  
};

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };