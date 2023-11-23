# shopping-list
Shopping list app

## setup environment
python3 -m venv shopping_list
pip install -r requirements.txt

## Run this to init a django project
django-admin startproject mysite

## Run this to start the server
cd mysite
python manage.py runserver

## Pylint
pylint --load-plugins pylint_django --django-settings-module=mysite.settings --rcfile .pylintrc .\mysite\shopping_list\

### Install MariaDB
Install mysqlclient\
`sudo apt-get install python3-dev default-libmysqlclient-dev build-essential`

Install mariaDB server\
*MariaDB needs to be at 10.4 or higher*\
`sudo apt update`\
`sudo apt install mariadb-server`

Ensure that MariaDB is running with the systemctl start command\
`sudo systemctl start mariadb.service`\
`sudo systemctl status mariadb`\

Run the included security script\
`sudo mysql_secure_installation`\

If you need to stop mariadb service\
`sudo systemctl stop mariadb`

### Create User and database
log in to mariadb as root\
`sudo mariadb`

Create a new database\
`CREATE DATABASE shopping_list;`\

Create a new user with a password\
`CREATE USER 'new'@'%' IDENTIFIED BY 'password';`\

Grant *all* permissions\
`GRANT ALL PRIVILEGES ON * . * TO 'new'@'%';`\

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
