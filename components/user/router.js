const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.post("/", async (req, res) => {
  try {
    console.log(req.body.name);
    const data = await controller.addUser(req.body);
    console.log("la data is:", data);
    response.success(req, res, data, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, error, 500);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await controller.getUsers(req.query.name);
    response.success(req, res, data, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, error, 500);
  }
});

module.exports = router;
