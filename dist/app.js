"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var entity_routes_1 = __importDefault(require("./routes/entity.routes"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
typeorm_1.createConnection()
    .then(function (connection) { }).catch(function (error) { return console.log(error); });
//middlewares
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//routes
app.use(entity_routes_1.default);
app.listen(3000, function () { return console.log('servidor inicializado'); });
console.log('server on port,3000');
