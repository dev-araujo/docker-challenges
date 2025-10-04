# Nginx com Node.js

Este projeto é um desafio do curso de Docker da [FullCycle](https://fullcycle.com.br/). O objetivo é criar uma aplicação Docker multi-container usando **Nginx**, **Node.js** e **MySQL**. 


## Arquitetura

*   **Nginx:** Atua como um proxy reverso, encaminhando as requisições para a aplicação Node.js.
*   **Node.js:** Uma aplicação simples em Express.js que se conecta a um banco de dados MySQL. A cada requisição na rota raiz (`/`), um novo nome é adicionado na tabela `people` e então a lista completa de nomes é exibida.
*   **MySQL:** O banco de dados utilizado para armazenar os nomes.

## Como Executar

1.  Certifique-se de que você tem o Docker e o Docker Compose instalados.
2.  Navegue até o diretório `nginx-node`.
3.  Execute o seguinte comando:

    ```bash
    docker-compose up -d --build
    ```

4.  Acesse a aplicação no seu navegador em [http://localhost:8080](http://localhost:8080).
