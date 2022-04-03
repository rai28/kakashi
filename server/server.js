const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.set("view engine", "ejs");

// my imports
const fileUploadRouter = require("./routes/fileUpload/fileUploadRouter");

app.get("/", (req, res) => {
  res.send("I'm Hatake Kakashi.");
});

// file upload
app.use("/upload", fileUploadRouter);

app.set("views", path.join(__dirname, "public"));
// load index.html on root
app.get("/home", (req, res) => {
  res.render("index");
});

// PORT For Main Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
