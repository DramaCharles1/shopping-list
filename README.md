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