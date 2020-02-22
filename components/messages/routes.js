const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");
const multer = require("multer");

const pathImages = process.env.pathImages || "public/files/";

const upload = multer({ dest: `${pathImages}` });
router.get("/", async (req, res) => {
  try {
    let filterMessage = req.query.chat;
    const data = await controller.getMessages(filterMessage);
    response.success(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error, 500);
  }
  // res.set("Cache-Control", "public, max-age=60");
  // res.header({
  //   "custom-header": "server hackchan"
  // });
});

router.post("/", upload.single("file"), async (req, res) => {
  // console.log("id");
  //console.log("el body:", req.body);
  // console.log("el query:", req.query);
  // console.log("el params:", req.params);
  console.log(req.file);

  console.log("protocol:", req.protocol);
  console.log("host:", req.get("host"));
  console.log("puerto:", req.get("port"));
  console.log("file:", req.file.filename);
  console.log(
    `${req.protocol}://${req.get("host")}/app/files/${req.file.filename}`
  );

  let fileUrl = "";
  if (req.file) {
    fileUrl = `${req.protocol}://${req.get("host")}/app/files/${
      req.file.filename
    }`;
  }

  try {
    let data = await controller.addMessage(
      req.body.chat,
      req.body.user,
      req.body.message,
      fileUrl
    );
    response.success(req, res, data, 200);
    //res.json(data);
  } catch (error) {
    console.log("el error>>>", error);
    response.error(req, res, error, 500);
    //res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let data = await controller.updateMessage(req.params.id, req.body.message);
    response.success(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error, 500);
  }
});

router.delete("/:id", async function(req, res) {
  try {
    let data = await controller.deleteMessage(req.params.id);
    response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
  } catch (error) {
    response.error(req, res, error, 500);
  }
});

module.exports = router;
