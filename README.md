# API.RestFul

Automação de testes de API REST utilizando **Playwright**, aplicando boas práticas de organização, reutilização de código e separação de responsabilidades.

O projeto foi desenvolvido com foco em validar operações CRUD de uma API REST por meio de testes automatizados, simulando cenários comuns encontrados em aplicações reais.

---

## Tecnologias utilizadas

- JavaScript (ES6+)
- Playwright
- Node.js
- GitHub Actions

---

## API utilizada

Os testes utilizam a API pública:

https://api.restful-api.dev

---

## Funcionalidades testadas

✔️ Listar todos os Devices

✔️ Consultar um Device por ID

✔️ Validar os dados de um Device específico

✔️ Criar um novo Device

✔️ Atualizar um Device existente

✔️ Excluir um Device

---

## Estrutura do projeto

```
API.RestFul
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── pages
│   └── devicesPage.js
│
├── tests
│   ├── fixtures
│   │   └── devicePayloads.js
│   │
│   └── devices.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Organização do projeto

### pages/

Responsável por encapsular todas as chamadas da API.

A classe `DevicesPage` centraliza os métodos:

- listarDevices()
- pegarDevicePorId()
- criarDevice()
- atualizarDevice()
- deletarDevice()

Essa abordagem evita duplicação de código e facilita a manutenção da suíte de testes.

---

### tests/

Contém todos os cenários automatizados.

Cada teste valida uma funcionalidade da API de forma independente.

---

### fixtures/

Armazena os payloads utilizados durante os testes.

Essa estratégia facilita:

- reutilização de dados
- organização
- manutenção
- criação de novos cenários

---

## Como executar o projeto

### 1 - Clone o repositório

```bash
git clone https://github.com/Narbona836/API.RestFul.git
```

### 2 - Entre na pasta

```bash
cd API.RestFul
```

### 3 - Instale as dependências

```bash
npm install
```

### 4 - Instale o Playwright

```bash
npx playwright install
```

### 5 - Execute todos os testes

```bash
npx playwright test
```

---

## Gerando o relatório HTML

Após a execução:

```bash
npx playwright show-report
```

---

## Arquitetura utilizada

O projeto foi organizado utilizando o conceito de **Page Object Model (POM)** adaptado para APIs.

Ao invés de concentrar as requisições dentro dos testes, elas foram abstraídas para uma camada responsável apenas pela comunicação com a API.

Fluxo:

```
Teste
      │
      ▼
DevicesPage
      │
      ▼
API REST
```

Essa abordagem torna o código:

- mais limpo
- reutilizável
- escalável
- fácil de manter

---

## Integração Contínua

O projeto possui configuração do **GitHub Actions**, permitindo que a suíte seja executada automaticamente em pipelines.

---

## Melhorias futuras

- [ ] Implementar testes negativos
- [ ] Criar geração dinâmica de dados
- [ ] Utilizar Faker para criação de payloads
- [ ] Implementar Allure Report
- [ ] Integração com CI/CD completa
- [ ] Utilizar variáveis de ambiente (.env)
- [ ] Cobrir novos endpoints da API

---

## Autor

**Willian Narbona Aquino**

QA Automation 

GitHub:
https://github.com/Narbona836

LinkedIn:
https://www.linkedin.com/in/willian-narbona-aquino/

---

## Objetivo

Este projeto faz parte do meu portfólio de estudos em Automação de Testes, demonstrando conhecimentos em:

- Automação de APIs
- Playwright
- JavaScript
- Organização de código
- Boas práticas de testes
- Estrutura escalável para projetos reais
