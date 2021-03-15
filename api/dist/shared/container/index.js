"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const AddressRepository_1 = __importDefault(require("@modules/adresses/infra/typeorm/repositories/AddressRepository"));
tsyringe_1.container.registerSingleton('AddressRepository', AddressRepository_1.default);
