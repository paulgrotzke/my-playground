"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = require("firebase-functions");
const express = require("express");
const todos_1 = require("./todos");
const app = express();
app.get('/todos', todos_1.getAllTodos);
exports.api = functions.region('europe-west1').https.onRequest(app);
//# sourceMappingURL=index.js.map