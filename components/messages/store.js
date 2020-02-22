const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  return myMessage.save();
}

getMessages = filterChat => {
  //return new Promise(async (resolve, reject) => {
  const filter =
    //filterUser != null ? { user: new RegExp(filterUser, "i") } : {};
    filterChat != null ? { chat: filterChat } : {};
  const messages = Model.find(filter)
    .populate("user")
    .exec();
  return messages;

  //});
};

// async function getMessages(filterUser) {
//   const filter =
//     filterUser != null ? { user: new RegExp(filterUser, "i") } : {};

//   try {
//     const messages = await Model.find(filter);
//     return messages;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

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

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const deleteMessage = await Model.deleteOne({ _id: id });
      resolve(deleteMessage);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage,
  deleteMessage
};
