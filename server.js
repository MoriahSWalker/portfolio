const express = require("express");
const path = require("path");
const logger = require("morgan");
// cross origin access
const cors = require("cors");

const app = express();

// access
app.use(
  cors({
    origin: "*",
  })
);

// logs the different requests to our server
app.use(logger("dev"));

//parse stringified objects (JSON)
app.use(express.json());

// server build folder
app.use(express.static(path.join(__dirname, "build")));

app.listen(4000, () => {
  console.log(`Server is Listening on 4000`);
});
