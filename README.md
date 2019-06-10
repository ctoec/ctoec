# Connecticut Office of Early Childhood's website

[beta.ctoec.org](https://beta.ctoec.org/learn-more/)

This repository houses the Connecticut Office of Early Childhood's website. This site uses a modified version of the [Benjamin WP theme](https://github.com/matthewcrist/benjamin) for the front end interface.

## Local development
### Setup 
1. [Install Docker](https://docs.docker.com/install/) 
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
1. Run docker compose
    ```bash
    docker-compose up
    ```
1. Setup the site
    ```bash
    ./scripts/build-dev
    ```
1. The site should be running on [localhost:8080](http://localhost:8080)

### Starting and stopping site after initial setup
1. Stop docker
    ```bash
    docker-compose down
    ```
1. Start docker
    ```bash
    docker-compose down
    ```