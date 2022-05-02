const service = require("../services/users_services.js");

const login = async (req, res) => {
  var users = await service.getUsers();
  const userExists = (user) =>
    user.username == req.body.username && user.password == req.body.password;
  if (users.find(userExists)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};
const signup = async (req, res) => {
  console.log("in signup func", req.body);
  res.sendStatus(200);
};

const sendEmail = async (req, res) => {
  console.log("in password controller sendemail func");
  console.log(req.body);
  var passCode = (Math.random() + 1).toString(36).substring(2);
  console.log("generated", passCode);
  res.send({ passCode: passCode });
};

const resetPassword = async (req, res) => {
  console.log("passwords: ", req.body);
  //var passCode = localStorage.getItem("passCode", passCode);
  console.log("getPass", passCode);
  console.log("userpass", req.body.passCode);
  if (req.body.passCode == "" || req.body.passCode == " ") {
    res.sendStatus(404);
  } else if (req.body.newPassword != req.body.repeatNew) {
    res.sendStatus(404);
  } else res.sendStatus(200);
};

module.exports = {
  login,
  signup,
  sendEmail,
  resetPassword,
};
