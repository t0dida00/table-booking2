
'use strict';
require('dotenv').config()

const assert = require("assert")
const {PORT,URL,DATABASE_URL}= process.env

assert(PORT,"PORT is required")

assert(URL,"URL is required")

module.exports = {PORT,URL,DATABASE_URL} 

