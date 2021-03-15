import ShowAddressService from '@modules/adresses/services/ShowAddressService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class AddressController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { zip_code } = request.body;

    const showAddress = container.resolve(ShowAddressService);

    const address = await showAddress.execute({ zip_code });

    return response.json(address);
  }
}
