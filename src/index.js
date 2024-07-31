import express from "express";
import multer from "multer";

const app = express();

// Set up multer for storing uploaded files in the 'uploads' directory
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.array("media", 10), (req, res) => {
  // req.files is array of `media` files
  // req.body will contain the text fields, if there were any
  // Return list of uploaded files
  const uploadedFiles = req.files;
  res.send({
    message: "Files uploaded successfully.",
    files: uploadedFiles,
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
