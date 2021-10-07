const sql = require("./db");

// constructor
const User = function(user) {
    this.email = user.email;
    this.password = user.password;
  };

  User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("user: ", res);
      result(null, res);
    });
  };

  exports.findAll = (req, res) => {
    console.log('hey');
    User.getAll((err, data) => {
      if (err)
      {
        console.log('error');
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving user."
        });
      }
      else {
        console.log(data);
        res.send(data);}
    });
  };
  module.exports = User;
