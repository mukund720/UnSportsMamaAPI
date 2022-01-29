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
        console.log(err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  };
  console.log(User);
  console.log(this.name);

  User.create = result => {
    console.log(User);
    // console.log(this.User);
    // console.log(User.name);
    // console.log(this.name);
    // console.log(this.User.name);
    let q="INSERT INTO `unsportsmama`.`user` (`id`, `name`, `email`, `mobile`, `policy`, `password`, `status`) VALUES (, '"+user.name+"', '"+this.email+"', '"+this.mobile+"', '"+this.policy+"', '"+this.password+"', '1');"
    console.log(q);
    sql.query(q, (err, res) => {
      if (err) {
        console.log(err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  };
  module.exports = User;
