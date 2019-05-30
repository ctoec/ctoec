# Local development
## Setup 
1. [Install Docker](https://docs.docker.com/install/) 
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
1. [Install 10updocker](https://10up.github.io/wp-local-docker-docs/installation/)
1. Linux Only: Run the command below and restart
    ```bash
    sudo usermod -a -G docker $USER
    ```
1. Mac and Windows Only: Start docker
1. Configure 10updocker
    ```bash
    10updocker configure
    ```
    When asked `What directory would you like WP Local Docker to create environments within? ` choose the directory above the ctoec repository. 
1. Create new env with the following options. The generated code will be deleted later 
    ```bash
    10updocker create ctoec-test
    ```
    ```
    ? What is the primary hostname for your site? (Ex: docker.test) ctoec.test
    ? Are there additional domains the site should respond to? No
    ? Do you want to set a proxy for media assets? (i.e. Serving /uploads/ directory assets from a production site) No
    ? What version of PHP would you like to use? 7.3
    ? Do you need Elasticsearch Yes
    ? Do you want to install WordPress? Yes
    ? Select a WordPress installation type: Core Development Version
    ? Do you want to remove the default content? Yes
    ? Site Name ctoec.test
    ? Admin Username admin
    ? Admin Password password
    ? Admin Email (admin@example.com) 
    ```
1. Replace the new env with this repository
    ```bash
    rm -rf ctoec-test
    mv ctoec ctoec-test
    ```
1. Stop the current site
    ```
    cd ctoec-test
    ```
1. Load the sample data
    ```bash
    docker-compose exec phpfpm bash -c 'mysql -h mysql -u root -ppassword ctoec-test < /tmp/backup'
    ```
1. Install dependencies
    ```
    docker run -it -u $(id -u):$(id -g) -v $(pwd):/wordpress 10up/phpfpm:7.3 bash -c "cd /wordpress && composer install"
    ```
1. Setup the wp config file
    ```
    10updocker stop
    10updocker wp config create --dbname=ctoec-test --dbuser=wordpress --dbhost=mysql --dbpass=password
    ```

1. Start the service
    ```bash
    10updocker start
    ```