"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError {
    constructor(message, statusCode = 400) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.default = AppError;
