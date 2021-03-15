import { container } from 'tsyringe';
import AddressRepository from '@modules/adresses/infra/typeorm/repositories/AddressRepository';
import IAddressRepository from '@modules/adresses/repositories/IAddressRepository';

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
