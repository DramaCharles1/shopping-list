#!/bin/bash

python manage.py migrate
#python manage.py runserver 0.0.0.0:8000

if [ "$TEST" == "y" ]; then
    python manage.py test shopping_list
else
    python manage.py runserver 0.0.0.0:8000
fi