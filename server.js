const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const projects = require("./routes/api/project");

const app = express();

//Bodyparser Middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Config

const db = require("./config/keys").mongoURI;

//Connect to Mongo

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected ...."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/projects", projects);

const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => console.log(`Server started on port ${port}`));
