"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@shared/container");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const AppError_1 = __importDefault(require("../errors/AppError"));
typeorm_1.createConnection();
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((error, request, response, _next) => {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    console.log(error);
    return response.status(500).json({ message: 'Internal Server Error' });
});
exports.default = app;
