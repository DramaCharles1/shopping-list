# shopping-list
Shopping list app

## setup environment
`python3 -m venv shopping_list`
`pip install -r requirements.txt`

## Run this to init a django project
`django-admin startproject mysite`

## Run this to start the server
`cd mysite`
`python manage.py runserver`

## Run this to build and run the application inside a container
### Docker commands
Build image\
`docker build -t shopping_list .`\
Run container\
`docker run -p 8000:8000 shopping_list`\
List volumes attached to container\
`docker volume ls`\
Remove volume attached to container\
`docker volume rm <volume>`

### Docker compose commands
Build docker compose\
`docker-compose build <container from yaml>`\
Run docker compose\
`docker-compose up <container from yaml>`\
Start bash in docker compose container\
`docker-compose exec <container from yaml> bash`

### Run tests
Run shopping_list tests\
`python manage.py test shopping_list`\
Run shopping_list tests from docker-compose\
`TEST=y docker-compose up backend`

### Docker troubleshoot
Problem with docker revision 2904 causing http header problem\
`sudo snap refresh --revision=2893 docker`\
Freeze revision\
`sudo snap refresh --hold=forever docker`

### Pylint
`pylint --load-plugins pylint_django --django-settings-module=mysite.settings --rcfile .pylintrc ./mysite/shopping_list`

### Install MariaDB
Install mysqlclient\
`sudo apt-get install python3-dev default-libmysqlclient-dev build-essential`

Install MariaDB server\
*MariaDB needs to be at 10.4 or higher*\
`sudo apt update`\
`sudo apt install mariadb-server`

Start MariaDB service\
`sudo systemctl start mariadb.service`

Ensure that MariaDB service runs\
`sudo systemctl status mariadb`

Run the included security script\
`sudo mysql_secure_installation`

Stop MariaDB service\
`sudo systemctl stop mariadb`

Check if any database instance is already running on port\
`sudo lsof -i :3306`

Stop database instance\
`sudo service mysql stop`

### Create User and database
Log in to mariadb as root\
`sudo mariadb`

Create a new database\
`CREATE DATABASE shopping_list;`

Create a new user with a password\
`CREATE USER 'test'@'%' IDENTIFIED BY 'password';`

Grant *all* permissions\
`GRANT ALL PRIVILEGES ON * . * TO 'test'@'%';`

Migrate\
`python manage.py migrate`

Migrate models\
*Changes to models is stored as a migration*\
`python manage.py makemigrations shopping_list`\
*Return migration names as SQL. Good for debugging*\
`python manage.py sqlmigrate shopping_list 0001`\
*synchronize changes in model to database* \
`python manage.py migrate`

Manage shell\
`python manage.py shell`

### Add admin
`python manage.py createsuperuser`

# Frontend using React
This part is instructions related to the frontend and client side of the shopping list application. For this part React will be used and all instructions on how to setup and install the environment will be here.

### Install Node.js v21.x on ubuntu
`curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\ sudo apt-get install -y nodejs`

### Install dependencies
`npm install`

### Create new React project
`npx create-react-app frontend`

## NVM
`Node Version Manager is used to manage different version of node`

### Install NVM
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash`

### List Available Node.js Versions
`nvm ls`

### Install a Specific Node.js Version
`nvm install <version>`

### Switch Between Node.js Versions
`nvm use <version>`

# Server stuff
Stuff related to webserver and reverse proxy

## Apache2
Webserver

### Start server
`sudo systemctl start apache2`

### Stop server
`sudo systemctl stop apache2`

### Check status
`sudo systemctl status apache2`