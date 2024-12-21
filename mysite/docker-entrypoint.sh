#!/bin/bash
source /shopping_list/venv/bin/activate

python manage.py migrate

if [ "$TEST" == "y" ]; then
    python manage.py test shopping_list
else
    python manage.py runserver 0.0.0.0:8000
fi