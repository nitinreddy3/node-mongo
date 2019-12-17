"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const dbUser = 'nitin1';
const dbPassword = 'nitin1';
const dbConnection = (user, pass) => {
    return `mongodb+srv://${user}:${pass}@cluster0-jple3.mongodb.net/test?retryWrites=true&w=majority`;
};
let database = dbConnection(dbUser, dbPassword);
const connectDBModule = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('DB connected..!');
});
exports.default = connectDBModule;
