# Automação do projeto Mark L com Cypress

## Requisitos
 - Node 18
 - Gerenciador de pacotes yarn habilitado 
 
**Baixar Projeto**
```
git clone https://github.com/kamilaalbuquerquecc/automacao-cypress-mark.git
```
**Acessar pasta raiz do projeto**
```
cd automacao-cypress-mark
```

**1º Terminal (executa api): /apps/api**
```
 $ yarn install //primeira execução
 $ yarn dev
```
**2º Terminal (executa web): /apps/**
```
 $ yarn install //primeira execução
 $ yarn dev
```
**Executar testes CLI**
```
$ yarn cypress run
```
## Alure Reports

**Requisito**
- Java 8+

**Ativa report por allure**
```
$ yarn cypress run --env allure=true
```
**Abre interface Allure Report**
```
$ yarn allure serve 

```
