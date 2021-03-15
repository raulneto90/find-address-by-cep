import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Address, AddressInfo, Error } from './styles';
import imgNotFound from '../../assets/notfound.svg';
import api from '../../services/api';

interface IFormData {
  cep: string;
}

interface IAddress {
  id: string;
  zip_code: string;
  street: string;
  complement: string;
  district: string;
  locale: string;
  state: string;
  ibge_number: string;
  gia: string;
  ddd: string;
  siafi: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [address, setAddress] = useState<IAddress | undefined>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data: IFormData) => {
    setLoading(true);
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        cep: Yup.string().required('O CEP é obrigatório!'),
      });

      await schema.validate(data, { abortEarly: false });

      const response = await api.post<IAddress>('addresses', {
        zip_code: data.cep,
      });

      setAddress(response.data);

      setLoading(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <h1>Consulte seu endereço informando seu CEP</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="cep"
          type="text"
          icon={FiSearch}
          placeholder="Ex: 00000-000"
        />
        <Button type="submit">
          {loading ? (
            <Loader type="TailSpin" color="#fff" height={40} />
          ) : (
            'Pesquisar endereço'
          )}
        </Button>
      </Form>

      <Address>
        {address ? (
          <AddressInfo key={address.id}>
            <h2>Endereço</h2>
            <div>
              <strong>Logradouro:</strong>
              <p>{address.street}</p>
            </div>
            <div>
              <strong>Complemento:</strong>
              <p>{address.complement}</p>
            </div>
            <div>
              <strong>Bairro:</strong>
              <p>{address.district}</p>
            </div>
            <div>
              <strong>Cidade:</strong>
              <p>{address.locale}</p>
            </div>
            <div>
              <strong>Estado:</strong>
              <p>{address.state}</p>
            </div>
            <div>
              <strong>IBGE:</strong>
              <p>{address.ibge_number}</p>
            </div>
            <div>
              <strong>GIA:</strong>
              <p>{address.gia}</p>
            </div>
            <div>
              <strong>DDD:</strong>
              <p>{address.ddd}</p>
            </div>
            <div>
              <strong>Siafi:</strong>
              <p>{address.siafi}</p>
            </div>
          </AddressInfo>
        ) : (
          <Error>
            <img src={imgNotFound} alt="" />
            <p>Ainda não encontrei nenhum CEP!</p>
          </Error>
        )}
      </Address>
    </Container>
  );
};

export default Home;
