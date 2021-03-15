import api from '@config/api';
import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Address from '../infra/typeorm/entities/Address';
import IAddressRepository from '../repositories/IAddressRepository';

interface IRequest {
  zip_code: string;
}

@injectable()
export default class ShowAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  public async execute({ zip_code }: IRequest): Promise<Address> {
    const addressExists = await this.addressRepository.findByZipCode(zip_code);

    if (addressExists) {
      return addressExists;
    }

    const response = await api.get(`/${zip_code}/json`);

    if (!response) {
      throw new AppError('Não encontrei nenhum endereço no CEP informado');
    }

    const {
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
      ibge,
      gia,
      ddd,
      siafi,
    } = response.data;

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
}
