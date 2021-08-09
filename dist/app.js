"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res, next) {
    res.send("nuestro primer aplicacion n");
});
app.listen(3000, function () { return console.log('servidor inicializado'); });
console.log('server on port,3000');
