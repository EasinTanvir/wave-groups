const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const imageRoute = require("./router");

app.use(cors());

app.use("/api", imageRoute);

app.listen(5000, () => console.log("server running"));
