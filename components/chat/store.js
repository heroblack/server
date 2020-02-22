const Model = require("./model");

addChat = chat => {
  const myChat = new Model(chat);
  return myChat.save();
};

listChats = userId => {
  let filter = {};
  if (userId) {
    filter = { users: userId };
  }
  return Model.find(filter);
};

module.exports = {
  addChat,
  listChats
};
