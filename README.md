# Consulta de CEP

---
## :information_source: Sobre o projeto

Neste projeto, você pode encontrar o endereço desejado digitando apenas o cep.

## :computer: Tecnologias utilizadas

### API

- Typescript
- Cors
- Eslint
- Prettier
- Typeorm
- UUID
- Jest

### Web

- Styled-components
- Axios
- React-input-mask
- React-loader-spinner
- React-icons
- Unform
- Yup

## :floppy_disk: Como baixar e utilizar o projeto

Para utilizar este projeto, é necessário que tenha instalado em seu computador o [Git](https://git-scm.com/), o [NodeJS](https://nodejs.org/en/) e o [Yarn](https://yarnpkg.com/).
Depois, em seu terminal:

```bash
# Clonar o projeto

$ git clone https://github.com/raulneto90/find-address-by-cep

# Acessar a pasta do projeto
$ cd find-address-by-cep
```
### API

```bash
$ cd api

# Instalar as dependências
$ yarn

# Executar as migrations do BD
$ yarn typeorm migration:run

# Executar o projeto em modo desenvolvimento:
$ yarn dev

# Buildar o projeto
$ yarn build

# Para rodar os testes
$ yarn test

# Rodar o projeto em produção
$ yarn start
```

### Web

```bash
$ cd web

# Instalar as dependências
$ yarn

# Executar o projeto em modo desenvolvimento:
$ yarn start

# Buildar o projeto
$ yarn build
```

## :exclamation: Observações importantes

### API

1) Para que a API funcione corretamente, é necessário liberar a porta 3333 no computador.
A alteração de porta pode ser feita no arquivo `src/shared/infra/http/server.ts`

2) Para que a API comunique-se com o banco de dados, é necessário criar o banco de dados com as configurações abaixo:
```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "docker",
  "database": "consultacep",
}
```

Feito com ❤ por Raul Neto. Me siga no [Linkedin](https://www.linkedin.com/in/raul-neto-777bb988/)