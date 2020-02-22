const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.post("/", async (req, res) => {
  try {
    console.log("req.body.user:", req.body.users);
    console.log("req.params.userId:", req.params);
    console.log("req.query:", req.query);
    let filterUser = req.body.users;
    const data = await controller.addChat(filterUser);
    response.success(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error, 500);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("entro a la ruta listar chats", req.query.userId);
    console.log("netx");
    let data = await controller.listChats(req.query.userId);
    response.success(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error, 500);
  }
});

module.exports = router;
