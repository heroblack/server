const store = require("./store");

addUser = user => {
  if (!user) {
    console.log("no estra");
    return Promise.reject(new Error("Invalid Data"));
  }
  return store.addUser(user);
};

getUsers = filter => {
  return store.getUsers(filter);
};

module.exports = {
  addUser,
  getUsers
};
