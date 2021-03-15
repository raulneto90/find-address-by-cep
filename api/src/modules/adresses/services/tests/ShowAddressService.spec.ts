import FakeAddressRepository from '@modules/adresses/infra/typeorm/repositories/fakes/FakeAddressRepository';
import ShowAddressService from '../ShowAddressService';

let showAddressService: ShowAddressService;
let fakeAddressRepository: FakeAddressRepository;

describe('ShowAddressService', () => {
  beforeEach(() => {
    fakeAddressRepository = new FakeAddressRepository();
    showAddressService = new ShowAddressService(fakeAddressRepository);
  });

  it('should be able to show a address using ViaCEP api', async () => {
    const create = jest.spyOn(fakeAddressRepository, 'create');
    const address = await showAddressService.execute({
      zip_code: '19015-150',
    });

    expect(create).toHaveBeenCalled();
    expect(address).toHaveProperty('id');
  });

  it('should be able to show a address using database', async () => {
    const findByZipCode = jest.spyOn(fakeAddressRepository, 'findByZipCode');
    const address = await showAddressService.execute({
      zip_code: '19015-150',
    });

    expect(findByZipCode).toHaveBeenCalledWith(address.zip_code);
  });
});
