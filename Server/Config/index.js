"use strict";

require("dotenv").config();

const config = {
  port: process.env.PORT,

  dbUri: process.env.MONGO_URI,
  dbName: process.env.MONGO_DB_NAME
};

module.exports = config;