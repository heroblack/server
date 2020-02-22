const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

function getUsers(filter) {
  filterUser = filter != null ? { name: filter } : {};
  return Model.find(filterUser);
}
module.exports = {
  addUser,
  getUsers
};
