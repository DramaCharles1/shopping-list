# Use an official Python runtime as a parent image
FROM python:3.8

WORKDIR /shopping_list

COPY requirements.txt /shopping_list/

# Create virtual environment directly in /venv_env and install dependencies
RUN python3 -m venv /venv_env && \
    /venv_env/bin/pip install --upgrade pip && \
    /venv_env/bin/pip install -r requirements.txt

# Copy application source code
COPY . /shopping_list/

# Expose Django's default port
EXPOSE 8000

# Set the environment variable to use the virtual environment
ENV PATH="/venv_env/bin:$PATH"

ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_ROOT_PASSWORD

# Set the environment variables for the build process
ENV MYSQL_DATABASE=$MYSQL_DATABASE
ENV MYSQL_USER=$MYSQL_USER
ENV MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD

RUN mkdir -p /var/www/static/

# Collect static files that can be served by the web server
RUN python3 manage.py collectstatic --noinput