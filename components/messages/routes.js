const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/", async (req, res) => {
  try {
    let filterUser = req.query.user;
    const data = await controller.getMessages(filterUser);
    response.succes(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error, 500);
  }
  // res.set("Cache-Control", "public, max-age=60");
  // res.header({
  //   "custom-header": "server hackchan"
  // });
});

router.post("/", async (req, res) => {
  // console.log("id");
  //console.log("el body:", req.body);
  // console.log("el query:", req.query);
  // console.log("el params:", req.params);
  try {
    let data = await controller.addMessage(req.body.user, req.body.message);
    response.succes(req, res, data, 200);
    //res.json(data);
  } catch (error) {
    response.error(req, res, error, 500);
    //res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let data = await controller.updateMessage(req.params.id, req.body.message);
    response.succes(req, res, data, 200);
  } catch (error) {
    response.succes(req, res, error, 500);
  }
});

module.exports = router;
