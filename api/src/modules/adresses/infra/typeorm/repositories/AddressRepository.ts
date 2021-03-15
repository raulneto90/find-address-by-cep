import ICreateAddress from '@modules/adresses/dtos/ICreateAddress';
import IAddressRepository from '@modules/adresses/repositories/IAddressRepository';
import { getRepository, Repository } from 'typeorm';
import Address from '../entities/Address';

export default class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  public async create(data: ICreateAddress): Promise<Address> {
    const address = this.repository.create(data);

    await this.repository.save(address);

    return address;
  }

  public async findByZipCode(zip_code: string): Promise<Address | undefined> {
    const address = await this.repository.findOne({ where: { zip_code } });

    return address;
  }
}
