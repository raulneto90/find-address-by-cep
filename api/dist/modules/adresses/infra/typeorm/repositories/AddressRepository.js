"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Address_1 = __importDefault(require("../entities/Address"));
class AddressRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(Address_1.default);
    }
    async create(data) {
        const address = this.repository.create(data);
        await this.repository.save(address);
        return address;
    }
    async findByZipCode(zip_code) {
        const address = await this.repository.findOne({ where: { zip_code } });
        return address;
    }
}
exports.default = AddressRepository;
