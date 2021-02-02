const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
var cors = require("cors");

// const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

// routes
const common = require("./routes/api/common");
const product = require("./routes/api/product");
const auth = require("./routes/api/auth");

//load config
dotenv.config({ path: "./config/config.env" });

connectDB();
const server = express();

// logging
if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

// Handlebars
// server.engine(
//   ".hbs",
//   exphbs({
//     defaultLayout: "main",
//     extname: ".hbs",
//   })
// );
server.use(bodyParser.json());
server.use(cors());

// Routes
server.use("/api/common", common);
server.use("/api/product", product);
server.use("/api/auth", auth);

const PORT = process.env.PORT || 3000;
server.listen(
  PORT,
  console.log(
    `server is running on ${process.env.NODE_ENV} mode on PORT ${PORT}`
  )
);
