const store = require("./store");
const { socket } = require("../../socket");
function addMessage(chat, user, message, file) {
  if (!user || !message) {
    Promise.reject(new Error("datos incorrectos"));
    return;
  }
  let fullMessage = { chat, user, message, date: new Date(), file };
  socket.io.emit("message", fullMessage);

  return store.add(fullMessage);
}

function getMessages(filterChat) {
  return store.list(filterChat);
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject(new Error("Invalid Data!"));
      return;
    }
    try {
      const data = await store.updateMessage(id, message);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject(new Error("Invalid Data!"));
      return;
    }
    try {
      const data = await store.deleteMessage(id);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
