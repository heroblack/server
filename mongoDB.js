const db = require("mongoose");
db.promise = global.Promise;

async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  console.log("[DB] Conectada con exito!!");
}

module.exports = connect;
