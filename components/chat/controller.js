const store = require("./store");

addChat = users => {
  console.log("entro a addchat");
  console.log("!users", users);
  console.log("!Array.isArray(users)", !Array.isArray(users));
  if (!users || !Array.isArray(users)) {
    return Promise.reject(new Error("Invalid user list"));
  }
  const chat = {
    users: users
  };
  console.log("el chat :)", chat);
  return store.addChat(chat);
};

listChats = userId => {
  console.log("entro a controller listChats");
  return store.listChats(userId);
};

module.exports = {
  addChat,
  listChats
};
