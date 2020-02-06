# AppContatos - Aplicação Gerenciador de Contatos

Aplicação para gerenciamento de contatos. (Teste Prático realizado para processo seletivo da ENGESOFTWARE)

## Instalação do AppContatos
Procedimentos para instalação do sistema:

1. Clonar o repositório do projeto no GitHub:
```
git clone https://github.com/luizrjunior/teste_engesoftware.git
```
2. Criar o schema <i>"testeengesoftware"</i> no banco de dados (MySQL);
3. Criar o arquivo .env baseado no arquivo .env.example e configurar a conexão com banco de dados:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=testeengesoftware
DB_USERNAME=root
DB_PASSWORD=
```
5. Instalar as dependencias
```
composer install
```
6. Gerar a chave da aplicação
``` 
php artisan key:generate
```
7. Gerar as Tabelas do Banco de Dados
``` 
php artisan migrate
```
10. Executar a aplicação:
```
php artisan serve
```
11. Acessar a aplicação:
```
http://localhost:8000
```