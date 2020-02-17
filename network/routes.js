const movies = require("../components/movies/routes");
const messages = require("../components/messages/routes");
const routes = server => {
  server.use("/api/movies", movies);
  server.use("/api/message", messages);
};

module.exports = routes;
