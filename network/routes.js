const messages = require("../components/messages/routes");
const users = require("../components/user/router");
const chat = require("../components/chat/router");
const routes = server => {
  server.use("/api/users", users);
  server.use("/api/message", messages);
  server.use("/api/chat", chat);
};

module.exports = routes;
