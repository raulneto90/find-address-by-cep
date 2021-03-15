"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AddressController_1 = __importDefault(require("../controllers/AddressController"));
const addressController = new AddressController_1.default();
const addressRouter = express_1.Router();
addressRouter.post('/', addressController.show);
exports.default = addressRouter;
