# Desafio Go

Este projeto é um desafio do curso de Docker da [FullCycle](https://fullcycle.com.br/). O objetivo é criar uma imagem Docker de uma aplicação Go que seja a menor possível.

## Arquitetura

A aplicação é um simples programa em Go que imprime a mensagem "Full Cycle Rocks!!".

O `Dockerfile` utiliza uma abordagem multi-stage para compilar a aplicação Go em um ambiente e depois copiar o binário compilado para uma imagem `scratch` limpa, resultando em uma imagem Docker extremamente pequena.

## Como Executar

1.  Certifique-se de que você tem o Docker instalado.
2.  Navegue até o diretório `golang`.
3.  Construa a imagem Docker com o seguinte comando:

    ```bash
    docker build -t fullcycle-golang .
    ```

4.  Execute a imagem com o seguinte comando:

    ```bash
    docker run fullcycle-golang
    ```

5.  Você verá a seguinte saída no seu terminal:

    ```
    Full Cycle Rocks!!
    ```

## Docker Hub

- [Link para a imagem no Docker Hub](https://hub.docker.com/repository/docker/araujo66/fullcycle-golang/general)
