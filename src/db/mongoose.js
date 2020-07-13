const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

//dotenv.config({ path: "../../config/dev.env" });
dotenv.config({ path: path.resolve(__dirname, "../../config/dev.env") });

mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});
