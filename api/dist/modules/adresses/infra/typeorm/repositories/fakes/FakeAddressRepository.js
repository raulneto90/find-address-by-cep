"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Address_1 = __importDefault(require("../../entities/Address"));
class AddressRepository {
    constructor() {
        this.addresses = [];
    }
    async create(data) {
        const address = new Address_1.default();
        Object.assign(address, { id: uuid_1.v4() }, data);
        this.addresses.push(address);
        return address;
    }
    async findByZipCode(zip_code) {
        const address = this.addresses.find(findAddress => findAddress.zip_code === zip_code);
        return address;
    }
}
exports.default = AddressRepository;
