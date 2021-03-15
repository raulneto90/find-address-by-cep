import { v4 as uuid } from 'uuid';
import ICreateAddress from '@modules/adresses/dtos/ICreateAddress';
import IAddressRepository from '@modules/adresses/repositories/IAddressRepository';
import Address from '../../entities/Address';

export default class FakeAddressRepository implements IAddressRepository {
  private addresses: Address[] = [];

  public async create(data: ICreateAddress): Promise<Address> {
    const address = new Address();

    Object.assign(address, { id: uuid() }, data);

    this.addresses.push(address);

    return address;
  }

  public async findByZipCode(zip_code: string): Promise<Address | undefined> {
    const address = this.addresses.find(
      findAddress => findAddress.zip_code === zip_code,
    );

    return address;
  }
}
