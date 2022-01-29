const sql = require("./db");
// constructor
const User = function(user) {
    this.name=user.name
    this.email = user.email;
    this.mobile=user.mobile;
    this.policy=user.policy;
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
