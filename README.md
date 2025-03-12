O repositório [ReginaldDev/RockshaverMobile](https://github.com/ReginaldDev/RockshaverMobile) contém testes automatizados para a aplicação móvel Rockshaver, utilizando o framework Cypress. A seguir, uma documentação detalhada para auxiliar na configuração do ambiente, construção e execução dos containers Docker, bem como na execução dos testes automatizados.

## Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Construção e Execução dos Containers Docker](#construção-e-execução-dos-containers-docker)
4. [Execução dos Testes Automatizados](#execução-dos-testes-automatizados)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Considerações Finais](#considerações-finais)

## 1. Pré-requisitos

Antes de iniciar, certifique-se de que as seguintes ferramentas estão instaladas em seu ambiente:

- **Node.js**: Versão 12 ou superior. Você pode baixar a versão mais recente em [nodejs.org](https://nodejs.org/).
- **Yarn**: Gerenciador de pacotes. Instale-o seguindo as instruções em [yarnpkg.com](https://yarnpkg.com/).
- **Docker**: Para gerenciamento de containers. Disponível em [docker.com](https://www.docker.com/).
- **Docker Compose**: Para orquestração de múltiplos containers. Geralmente incluído na instalação do Docker.

## 2. Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. **Clonar o Repositório**

   Abra o terminal e execute:

   ```bash
   git clone https://github.com/ReginaldDev/RockshaverMobile.git
   cd RockshaverMobile
   ```

2. **Instalar Dependências**

   Utilize o Yarn para instalar as dependências do projeto:

   ```bash
   yarn install
   ```

3. **Configurar Variáveis de Ambiente**

   Verifique se o arquivo `.env` está presente na raiz do projeto. Caso contrário, crie-o com base no arquivo de exemplo `.env.example`. Configure as variáveis de ambiente conforme necessário para o funcionamento da aplicação.

## 3. Construção e Execução dos Containers Docker

Para garantir um ambiente consistente, utilize o Docker para construir e executar os containers necessários:

1. **Construir e Subir os Containers**

   Execute o seguinte comando para construir as imagens e iniciar os containers definidos no `docker-compose.yml`:

   ```bash
   docker-compose up --build
   ```

   Este comando irá:

   - Construir as imagens Docker conforme definido no `docker-compose.yml`.
   - Iniciar os containers necessários para a aplicação.

   Certifique-se de que o arquivo `docker-compose.yml` esteja configurado corretamente para a sua aplicação.

2. **Verificar Status dos Containers**

   Após subir os containers, verifique se todos estão em funcionamento:

   ```bash
   docker ps
   ```

   Este comando listará todos os containers em execução.

## 4. Execução dos Testes Automatizados

Com o ambiente configurado e os containers em execução, prossiga para a execução dos testes automatizados:

1. **Abrir Interface do Cypress**

   Para abrir a interface gráfica do Cypress e selecionar os testes manualmente, execute:

   ```bash
   yarn cypress open
   ```

   Isso permitirá que você visualize e execute testes específicos conforme necessário.

2. **Executar Testes em Modo Headless**

   Para executar todos os testes de forma automatizada, sem interface gráfica, utilize:

   ```bash
   yarn cypress run
   ```

   Este modo é útil para integrações contínuas e ambientes de produção.

## 5. Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `cypress/`: Contém os testes automatizados e configurações relacionadas ao Cypress.
- `cypress.config.js`: Arquivo de configuração do Cypress, onde você pode ajustar parâmetros conforme necessário.
- `package.json`: Lista as dependências do projeto e scripts disponíveis para execução.
- `.env`: Arquivo de variáveis de ambiente para configuração personalizada.
- `docker-compose.yml`: Define os serviços, volumes e redes para o Docker Compose.

## 6. Considerações Finais

Este repositório é parte do ecossistema Rockshaver, que inclui outras aplicações e testes relacionados. Para uma integração completa e entendimento aprofundado, é recomendável consultar os demais repositórios associados ao projeto Rockshaver.

Certifique-se de que todas as dependências e configurações estejam corretamente definidas para garantir o funcionamento adequado dos containers e a execução bem-sucedida dos testes automatizados.

Para mais informações ou suporte, consulte a documentação oficial das ferramentas utilizadas ou entre em contato com os mantenedores do projeto. 