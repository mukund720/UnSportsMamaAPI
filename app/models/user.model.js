const sql = require("./db");
// constructor
const User = function(user) {
    this.email = user.email;
    this.password = user.password;
  };
  User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      result(null, res);
    });
  };
  module.exports = User;
