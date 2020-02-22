const express = require("express");
const morgan = require("morgan");
const app = express();
const server = require("http").Server(app);
const mongoDB = require("./mongoDB");
const router = require("./network/routes");
const path = require("path");
const socket = require("./socket");
const cors = require("cors");

//socketIO
// io.on("connection", function(socket) {
//   console.log("nuevo cliente conectado");
//   socket.emit("mensaje", "Bienvenido");
// });

// setInterval(function() {
//   io.emit("mensaje", "hola le escribo a todos");
// }, 3000);

//databases

mongoDB(
  "mongodb+srv://hackchan:f62856far1981@cluster0-ujxvk.mongodb.net/test?retryWrites=true&w=majority"
);

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router(app);
socket.connect(server);
app.use("/app", express.static(path.join(__dirname, "public")));

process.on("unhandledRejection", error => {
  // Won't execute
  console.log("unhandledRejection", error);
});

//routes
//app.use(require("./routes/"));
//app.use("/api/movies", require("./components/movies/network"));
//app.use("/api/users", require("./routes/users"));

//starting the server
listenApp = () => {
  console.log(`The server Running in http://localhost:${app.get("port")}`);
};

server.listen(app.get("port"), listenApp);
