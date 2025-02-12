#!/bin/bash
source /venv_env/bin/activate

python manage.py migrate

if [ "$TEST" == "y" ]; then
    python manage.py test shopping_list
fi
if [ "$DEVELOPMENT" == "y" ]; then
    python manage.py test shopping_list
fi