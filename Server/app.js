'use strict'
require('./App/Utils/MongooseConnecter')
const express = require('express')
const app = express()
const {port } = require('./Config/index')

app.listen(port, () =>
  console.log(`Server is running on http://127.0.0.1:${port}`)
);