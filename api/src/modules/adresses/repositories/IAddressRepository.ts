import ICreateAddress from '../dtos/ICreateAddress';
import Address from '../infra/typeorm/entities/Address';

export default interface IAddressRepository {
  create(data: ICreateAddress): Promise<Address>;
  findByZipCode(zip_code: string): Promise<Address | undefined>;
}
