const db = require("mongoose");
const Model = require("./model");
db.promise = global.Promise;
db.connect(
  "mongodb+srv://hackchan:f62856far1981@cluster0-ujxvk.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(db => console.log("Database is Connected"))
  .catch(err => console.log(err));
console.log("[db] Conectada con exito");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessages(filterUser) {
  return new Promise(async (resolve, reject) => {
    const filter =
      filterUser != null ? { user: new RegExp(filterUser, "i") } : {};

    try {
      const messages = await Model.find(filter);
      resolve(messages);
    } catch (error) {
      reject(error);
    }
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    try {
      const foundMessage = await Model.findOne({ _id: id });
      foundMessage.message = message;
      const newMessage = await foundMessage.save();
      resolve(newMessage);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage
};
