
## Ambiente
Para montar o ambiente siga os passos abaixo na pasta raiz do projeto:

 - instalar os serviços de PHP, MySql e Nginx

```
    docker-compose up -d
```

 - baixar dependências de PHP do projeto
```
    docker exec -it php composer install
```
 - após o serviço iniciar, criar tabelas no banco pelo laravel migration
```
    docker exec -it php php artisan migrate
```
 - gerar chaves de geração de senha para a aplicação
```
    docker exec -it php php artisan passport:install
```
 - (na pasta frontend) instalar dependências do Angular
```
    cd frontend && npm install && ng serve
```

projeto acessível no endereço [http://localhost:4200](http://localhost:4200)


