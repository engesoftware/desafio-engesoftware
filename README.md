# Desafio Engesoftware (Java, PHP e Javascript)

![](desafio-engesoftware.png)

Chamando todos os Javeiros, Javeiras, PHPzeiros PHPzeiras, Artesãos, Artesãs,  Caçadores de Pokemon, até mesmo você fanboy, evangelista ou RUBIsta, ou você que faz POG (programação orientada a gato) ... você entendeu. **Estamos contratando desenvolvedores!**

O nosso processo começa aqui, arrebente nesse desafio, **Mostre do que você é Capaz!**!

Para participar, faça um fork desse repositório e o use como repo principal do projeto, todos os seus commits devem estar registrados aqui, pois **queremos ver como você trabalha**.

**Registre tudo**: testes que forem executados, idéias que gostaria de implementar se tivesse tempo (explique como você as resolveria, se houvesse tempo), decisões que forem tomadas e seus porquês, arquiteturas que forem testadas e os motivos de terem sido modificadas ou abandonadas. Use o arquivo COMMENTS.md do repositório para registrar essas reflexões e decisões.


## A EngeSoftware

A Engesoftware Tecnologia S.A. iniciou suas atividades em 1995, em Brasília, prestando serviços técnicos em informática. Em 1996 a empresa já atendia toda a região Centro-Oeste. 

Hoje, a Engesoftware orgulha-se de ter entre seus clientes importantes empresas e órgãos públicos do país e, no seu corpo de profissionais, uma das melhores equipes técnicas – uma equipe dedicada e criativa, treinada periodicamente nas tecnologias emergentes.

**VENHA CONSTRUIR SUA CARREIRA EM UM AMBIENTE DINÂMICO E INOVADOR?**

## O Desafio

O desafio consiste na criação de uma aplicação para **Gerenciamento de uma Lista de Contatos**, conforme detalhes abaixo:


### A) Desenvolver API REST com as seguintes características
   - Deve ser implementado em **JAVA >= 8 & Maven** ou **PHP >= 5.6 & Composer**, usando os Frameworks ou organização de camadas de sua preferência
       - **[JAVA]**: Utilizar banco de dados em memória (H2 DB) e JPA
           - *Se não for usar banco em memória, disponibilizar docker-compose para criação da instância já com execução de scripts*
       - **[PHP]**: Utilizar banco de dados PostgreSQL, MySQL ou MariaDB e fazer uso de PDO (mesmo que indiretamente via framework)
           - *Utilizar versão do banco que tenha disponibilidade de uso com docker https://hub.docker.com/search?q=&type=image&category=database, se houver scripts, descrever os passos de criação* 
   - Permitir ao usuário criar uma conta
       - *não é necessário envio de e-mail nem outras conexões externas* 
   - Permitir ao usuário fazer login
       - *Usando Sessão ou Token*
   - Criar endpoints **PROTEGIDOS** *(sessão ou token)* de um CRUD que permita ao usuário gerenciar contatos *(Nome, E-mail, Telefone e Empresa)*
   - Utilizar DB migration (FlyWay), GraphQL, Swagger, Oauth e outras abordagens modernas será um diferencial *(Mostre suas habilidades)*
   
   
### B) Desenvolver a interface da aplicação com as seguintes características
   - Deve ser uma aplicação SPA, podendo escolher qualquer framework para implementação *(usar Angular ou React será um diferencial)*
   - Usuário deve conseguir cadastrar-se, fazer login e gerenciar os contatos
       - *CRUD contendo Nome, E-mail, Telefone e Empresa do contato* 
   - Deve possuir funcionalidade para usuário filtrar a lista de contato
       - *Seja organizado por letra inicial do nome do contato [similar aos contatos do telefone] ou por meio de input de pesquisa* 
   - Utilizar NPM para gerenciar dependencias
   - Utilizar Webpack, Gulp, Sass ou Grunt será um diferencial

### O que será validado

Seu código será observado por uma equipe de desenvolvedores que avaliarão a implementação do código, simplicidade e clareza da solução, a arquitetura, estilo de código, o design da interface e a documentação. Além disso, atente para os requsitos abaixo:

1. Não deve permitir usuário duplicado
2. Endpoints do CRUD só podem ser acessados após o LOGIN (sessão ou token)
3. Interface só pode exibir funcionalidade do CRUD após o LOGIN
4. Deve permitir LOGOUT 


### Finalizei o desafio, e agora?

Após finalizar a implementação, faça um [pull-request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) da sua implementação e envie um email para currriculo@engesoftware.com.br. No e-mail, anexar um currículo atualizado e no corpo do e-mail o link para o seu pull-request.

Atente-se para os seguintes detalhes

- Para JAVA, o pom.xml deve conter a informação sobre a versão da jdk usada (8, 9, 11, 13)
- O package.json (e composer.json para PHP)  deve ter a entrada de todas as dependências necessárias para execução
- Se houver algum passo adicional para execução do projeto, descrever em um arquivo README.md no diretório do referido projeto (backend, frontend)


#### Dicas

- Use ferramentas e bibliotecas open-source, mas documente as decisões e  porquês;
- Em caso de dúvidas, pergunte!


Excecução do projeto

Usar o mysql e o php 5.6

Criar Um banco de Dados e colocar a informação do banco e dados do usuário para conexão com o banco no arquivo

backend/config/database.php
alterar os campos username, password, database