const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      reject("datos incorrectos");
      return;
    }

    const fullMessage = {
      user,
      message,
      date: new Date()
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise(async (resolve, reject) => {
    const listaData = await store.list(filterUser);
    resolve(listaData);
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid Data!");
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

module.exports = {
  addMessage,
  getMessages,
  updateMessage
};
