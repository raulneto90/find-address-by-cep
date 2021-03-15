"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("@config/api"));
const tsyringe_1 = require("tsyringe");
let ShowAddressService = class ShowAddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async execute({ zip_code }) {
        const addressExists = await this.addressRepository.findByZipCode(zip_code);
        if (addressExists) {
            console.log('Consultou do banco de dados');
            return addressExists;
        }
        console.log('Consultou da API');
        const response = await api_1.default.get(`/${zip_code}/json`);
        const { cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi, } = response.data;
        const address = await this.addressRepository.create({
            zip_code: cep,
            street: logradouro,
            complement: complemento,
            district: bairro,
            locale: localidade,
            state: uf,
            ibge_number: ibge,
            gia,
            ddd,
            siafi,
        });
        return address;
    }
};
ShowAddressService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('AddressRepository')),
    __metadata("design:paramtypes", [Object])
], ShowAddressService);
exports.default = ShowAddressService;
