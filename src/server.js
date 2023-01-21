// >Importing express for server
const express = require("express");

// >Importing dotenv for safegaurding the port server
const dotenv = require("dotenv");
dotenv.config();

const Router = require("./routes/route");

const cors = require("cors");

const app = express();
// meta functions
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = require("./config/db");
dotenv.config();
const PORT = process.env.PORT || 8080;
app.use("/", Router);

app.listen(PORT, async () => {
  connectDB();

  console.log(`Server Runs in Port ${PORT}`);
});
