const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const path = require("path");
const fileUploadRouter = express.Router();

fileUploadRouter.post(
  "/single/html",
  expressAsyncHandler(async (req, res, next) => {
    try {
      const userFile = req.files.userFile;
      const savePath = path.join(
        __dirname,
        "../../public/uploads/",
        userFile.name
      );
      await userFile.mv(savePath);
      res.send("File uploaded successfully");
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  })
);

module.exports = fileUploadRouter;
