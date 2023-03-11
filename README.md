# automacao-cypress-mark

Requisitos
 Node 18
 Gerenciador de pacotes yarn hailitado 
 
git clone https://github.com/kamilaalbuquerquecc/automacao-cypress-mark.git

Acessa pasta raiz do projeto
Cria projeto node dentro da pasta
$ yarn init


1º Terminal (executa api): /apps/api
 $ yarn install //primeira execução
 $ yarn dev

2º Terminal (executa web): /apps/web
 $ yarn install //primeira execução
 $ yarn dev

Executar testes CLI
$ yarn cypress run

## Alure Reports

Requisito
Java 8+

Ativa report por allure
$ yarn cypress run --env allure=true

Abre interface Allure Report
$ yarn allure serve 
