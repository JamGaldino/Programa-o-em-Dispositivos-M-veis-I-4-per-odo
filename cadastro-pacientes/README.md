# Cadastro de Pacientes

Projeto desenvolvido para a disciplina de **Programação para Dispositivos Móveis I**, com o objetivo de praticar os conceitos fundamentais de React utilizando **Class Components**.

## Informações da Atividade

- **Disciplina:** Programação para Dispositivos Móveis I
- **Atividade:** Atividade Avaliativa 01
- **Tema:** Cadastro de Pacientes
- **Data de entrega:** 19/06/2026

## Objetivo

O objetivo da atividade foi desenvolver uma aplicação React para o cadastro de pacientes de uma clínica médica, utilizando os principais conceitos estudados em sala de aula.

A aplicação permite informar:

- Nome do paciente;
- Idade;
- Cidade;
- Sexo;
- Tipo de atendimento.

Após o preenchimento do formulário, os dados são exibidos em um alerta, sem recarregar a página.

Como desafio extra, foi implementado um relógio digital utilizando **Class Components**, atualizado automaticamente a cada segundo.

## Funcionalidades

- Cadastro de pacientes
- Campo para nome
- Campo para idade
- Campo para cidade
- Seleção de sexo
- Seleção do tipo de atendimento
- Exibição dos dados cadastrados em um alerta após o envio do formulário
- Relógio digital atualizado automaticamente (desafio extra)

## Conceitos utilizados

- React
- JSX
- Componentes
- Props
- Class Components
- State
- Formulários controlados
- Manipulação de eventos (`onChange` e `onSubmit`)
- Select
- Ciclo de vida dos componentes (`componentDidMount` e `componentWillUnmount`)

## Estrutura do projeto

```text
src/
│
├── components/
│   ├── Cabecalho.jsx
│   ├── PacienteForm.jsx
│   └── Relogio.jsx
│
├── App.jsx
└── main.jsx
```

## Como executar o projeto

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd cadastro-pacientes
```

3. Instale as dependências:

```bash
npm install
```

4. Execute a aplicação:

```bash
npm run dev
```

## Tecnologias utilizadas

- React
- Vite
- JavaScript

## Autora

Jamille Galdino