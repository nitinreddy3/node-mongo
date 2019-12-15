"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Connection_1 = require("./src/DB/Connection");
const app = express();
Connection_1.default();
app.use(express.json());
app.use('/api/users', require('./src/API/User'));
app.listen(5000);
