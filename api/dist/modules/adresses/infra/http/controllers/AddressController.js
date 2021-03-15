"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShowAddressService_1 = __importDefault(require("@modules/adresses/services/ShowAddressService"));
const tsyringe_1 = require("tsyringe");
class AddressController {
    async show(request, response) {
        const { zip_code } = request.body;
        const showAddress = tsyringe_1.container.resolve(ShowAddressService_1.default);
        const address = await showAddress.execute({ zip_code });
        return response.json(address);
    }
}
exports.default = AddressController;
