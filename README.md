O repositório [ReginaldDev/RockshaverMobile](https://github.com/ReginaldDev/RockshaverMobile) contém testes automatizados para a aplicação móvel Rockshaver, utilizando o framework Cypress. A seguir, uma documentação detalhada para auxiliar na configuração do ambiente, construção e execução dos containers Docker, bem como na execução dos testes automatizados.

## Pré-requisitos

- **Node.js**: Versão 12 ou superior.
- **Yarn**: Gerenciador de pacotes.
- **Docker**: Para gerenciamento de containers.
- **Docker Compose**: Para orquestração de múltiplos containers.

## Passos para Configuração e Execução

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/ReginaldDev/RockshaverMobile.git
   cd RockshaverMobile
   ```


2. **Instalar Dependências**

   ```bash
   yarn install
   ```


3. **Configurar o Ambiente**

   Certifique-se de que o arquivo `.env` esteja corretamente configurado com as variáveis de ambiente necessárias.

4. **Construir e Subir os Containers Docker**

   Caso o repositório contenha um arquivo `docker-compose.yml`, você poderá utilizar o Docker Compose para construir e subir os containers necessários. Certifique-se de que o arquivo `docker-compose.yml` esteja configurado corretamente para a sua aplicação.

   ```bash
   docker-compose up --build
   ```


   Este comando irá construir as imagens Docker conforme definido no `docker-compose.yml` e iniciar os containers.

5. **Executar os Testes Automatizados**

   Após os containers estarem em funcionamento, você pode executar os testes automatizados utilizando o Cypress.

   - Para abrir a interface do Cypress e selecionar os testes manualmente:

     ```bash
     yarn cypress open
     ```

   - Para executar todos os testes em modo headless:

     ```bash
     yarn cypress run
     ```

## Estrutura do Projeto

- `cypress/`: Contém os testes automatizados.
- `cypress.config.js`: Configurações do Cypress.
- `package.json`: Dependências e scripts do projeto.
- `.env`: Variáveis de ambiente para configuração.

## Considerações Finais

Este repositório é parte do ecossistema Rockshaver, que inclui outras aplicações e testes relacionados. Para uma integração completa e entendimento aprofundado, é recomendável consultar os demais repositórios associados ao projeto Rockshaver.

Certifique-se de que todas as dependências e configurações estejam corretamente definidas para garantir o funcionamento adequado dos containers e a execução bem-sucedida dos testes automatizados. 
